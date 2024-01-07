import React from "react";
import LoginForm from "@/app/components/login/LoginForm";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="bg-backgorund">
      <div className="flex justify-center h-screen">
        <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
          <div className="flex-1">
            <div className="text-center">
              <div className="flex justify-center mx-auto">
                <img
                  className="w-auto h-7 sm:h-8"
                  src="https://merakiui.com/images/logo.svg"
                  alt=""
                />
              </div>

              <p className="mt-3">Sign in to access your account</p>
            </div>

            <div className="mt-8">
              <LoginForm />

              <p className="mt-6 text-sm text-center">
                Don&#x27;t have an account yet?{" "}
                <Link
                  href="/register"
                  className="text-primary-500 focus:outline-none focus:underline hover:underline"
                >
                  Sign up
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
        <div className="hidden bg-cover lg:block lg:w-2/3 bg-[url('https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')]">
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
