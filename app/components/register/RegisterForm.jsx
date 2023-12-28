"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import {useUser} from '@/app/context/userContext'

const RegisterForm = () => {
  const {signUp} = useUser();

  const router = useRouter();
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      signUp(email, password)
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      {error && (
        <div className="mt-3 bg-red-500 py-1 rounded-md w-full text-center">
          <p className="text-white">{error}</p>
        </div>
      )}

      <form className="mt-6" onSubmit={handleRegister}>
        <div className="mt-6">
          <label htmlFor="email" className="block mb-2 text-sm">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@example.com"
            className="block w-full px-4 py-2 mt-2 placeholder-gray-400 bg-background border border-foreground rounded-lg dark:placeholder-white/30 focus:border-primary-400 dark:focus:border-primary-400 focus:ring-primary-400 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>

        <div className="mt-6">
          <div className="flex justify-between mb-2">
            <label
              htmlFor="password"
              className="text-sm text-gray-600 dark:text-gray-200"
            >
              Password
            </label>
            <a
              href="#"
              className="text-sm text-gray-400 focus:text-primary-500 hover:text-primary-500 hover:underline"
            >
              Forgot password?
            </a>
          </div>

          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Your Password"
            className="block w-full px-4 py-2 mt-2 placeholder-gray-400 bg-background border border-foreground rounded-lg dark:placeholder-white/30 focus:border-primary-400 dark:focus:border-primary-400 focus:ring-primary-400 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>

        <div className="mt-3">
          <button
            type="submit"
            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-primary-500 rounded-lg hover:bg-primary-400 focus:outline-none focus:bg-primary-400 focus:ring focus:ring-primary-300 focus:ring-opacity-50"
          >
            Sign in
          </button>
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
