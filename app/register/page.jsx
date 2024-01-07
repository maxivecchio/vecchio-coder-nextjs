import React from "react";
import RegisterForm from "@/app/components/register/RegisterForm";
import Link from "next/link";

const RegisterPage = () => {
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

              <p className="mt-3">Create a user to access your account</p>
            </div>

            <div className="mt-8">
              <RegisterForm />

              <p className="mt-6 text-sm text-center">
                Already've an account?{" "}
                <Link
                  href="/login"
                  className="text-primary-500 focus:outline-none focus:underline hover:underline"
                >
                  Log in
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
        <div className="hidden bg-cover lg:block lg:w-2/3 bg-[url('https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')]">
          <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Meraki UI
              </h2>

              <p className="max-w-xl mt-3 text-gray-300">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                autem ipsa, nulla laboriosam dolores, repellendus perferendis
                libero suscipit nam temporibus molestiae
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
