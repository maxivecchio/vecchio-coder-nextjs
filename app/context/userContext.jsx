import React, { createContext, useContext, useState, useEffect } from "react";
import { onAuthStateChanged, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword  } from "firebase/auth";
import { auth, FirestoreDatabase } from "@/firebase/config";
import { doc, getDoc, setDoc } from "firebase/firestore";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log("holitas1");
    const unsubscribe = onAuthStateChanged(auth, async (authUser) => {
      console.log("holitas2");
      if (authUser) {
        console.log("holitas3");
        const userRef = doc(FirestoreDatabase, "users", authUser.uid);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          console.log("holitas4");
          setUser(userSnap.data());
          console.log(user);
        } else {
          console.log("No user data found.");
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
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };

  const login = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
};

const signUp = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await setDoc(doc(FirestoreDatabase, "users", userCredential.user.uid), {
            email: email,
            role: "user",
            created_at: Date.now()
        });
    } catch (error) {
        console.error('Error creating account');
        throw error;
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
