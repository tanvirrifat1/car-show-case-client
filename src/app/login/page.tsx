"use client";

import Form from "@/component/Forms/Form";
import FormInput from "@/component/Forms/FormInput";
import Link from "next/link";
import React, { useState } from "react";

const Login = () => {
  const [loading, setLoading] = useState<Boolean>(false);

  const [error, setError] = useState<string>("");

  const handleSubmit = async (data: any) => {
    console.log(data);
  };

  return (
    <div>
      {/* <Link href={"/home"}>
        <div className="ml-36 mt-10">
          <BiArrowBack className="text-4xl" />
        </div>
      </Link>
      */}
      <div className="flex justify-center items-center h-screen  bg-[#F9FAFB]">
        <div className="flex flex-col justify-center px-6 py-12 lg:px-8 w-[400px] mx-auto ring bg-white shadow rounded">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <Form submitHandler={handleSubmit}>
              <div className="space-y-5">
                <div>
                  <div className="mt-2">
                    <FormInput
                      id="email"
                      name="email"
                      type="email"
                      label="Email address"
                      className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="mt-2">
                    <FormInput
                      id="password"
                      name="password"
                      type="password"
                      label="Password"
                      className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <div className="flex items-center justify-between my-5">
                    <div className="form-control"></div>
                    <div className="text-sm"></div>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex justify-center ">
                <button className="btn border-gray-900 rounded-3xl border w-48 h-10">
                  Login
                </button>
              </div>
            </Form>

            <p className="mt-10 text-center text-sm text-gray-500">
              not have your account?{" "}
              <Link
                href="/signup"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                signup
              </Link>
            </p>
            {error && (
              <small className="text-red-500 text-center text-xl pt-4 block">
                {error}
              </small>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
