import React, { createContext, useContext, useState, useEffect } from "react";
import { onAuthStateChanged, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword  } from "firebase/auth";
import { auth, FirestoreDatabase } from "@/firebase/config";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { enqueueSnackbar } from "notistack";
import {useRouter} from 'next/navigation';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const router = useRouter()
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (authUser) => {
      if (authUser) {
        const userRef = doc(FirestoreDatabase, "users", authUser.uid);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          setUser({id: userSnap.id, ...userSnap.data()});
        } else {
          enqueueSnackbar({
            message: "No user data found.",
            variant: "error",
          });
        }
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, [auth, FirestoreDatabase]);

  const logout = async () => {
    try {
      await signOut(auth);
      enqueueSnackbar({
        message: "You've been logged out of your account.",
        variant: "success",
      });
    } catch (error) {
      enqueueSnackbar({
        message: "Logout failed.",
        variant: "error",
      });
    }
  };

  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Inicio de sesión exitoso");
      enqueueSnackbar({
        message: "Login successful.",
        variant: "success",
      });
      router.push('/')
    } catch (error) {
      enqueueSnackbar({
        message: "Invalid credentials.",
        variant: "error",
      });
    }};

const signUp = async (email, password) => {
  if (!email || !password) {
    enqueueSnackbar({
      message: "Please fill all inputs.",
      variant: "error",
    });
    return
  }
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await setDoc(doc(FirestoreDatabase, "users", userCredential.user.uid), {
            email: email,
            role: "user",
            created_at: Date.now()
        });
        enqueueSnackbar({
          message: "Account created! You've been logged in automatically.",
          variant: "success",
        });
        router.push('/')
    } catch (error) {
      enqueueSnackbar({
        message: "Error creating account.",
        variant: "error",
      });
      return
    }
};

  const value = {
    user,
    logout,
    login,
    signUp
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  return useContext(UserContext);
};
