"use client";

import Form from "@/component/Forms/Form";
import FormInput from "@/component/Forms/FormInput";
import Link from "next/link";
import React from "react";

const SignUp = () => {
  const onSubmit = async (data: any) => {
    console.log(data);
  };

  return (
    <div className="my-6">
      {/* <Link href={"/home"}>
        <div className="ml-36 ">
          <BiArrowBack className="text-4xl" />
        </div>
      </Link> */}

      <div className="container xl:w-[40%] px-20 py-5 border-gray-900 mt-5 border">
        <Form submitHandler={onSubmit}>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Profile
              </h2>
              <p className="mt-1 text-xl leading-6 text-black">
                You enter all your information correctly.
              </p>

              <div className="col-span-2">
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <input
                    type="file"
                    accept="image/*"
                    // onChange={handleImageChange}
                    className="file-input file-input-bordered w-full"
                  />
                </div>
              </div>
            </div>

            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Personal Information
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Use a permanent address where you can receive mail.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <div className="mt-2">
                    <FormInput
                      id=""
                      type="text"
                      name="fullName"
                      placeholder="type your name"
                      label="Your Name"
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <div className="mt-2">
                    <FormInput
                      id=""
                      name="email"
                      type="email"
                      label="Your email"
                      placeholder="enter your email"
                      className="block w-full rounded-md border-0 py-1.5 px-2  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <div className="mt-2">
                    <FormInput
                      id=""
                      name="password"
                      type="password"
                      placeholder="*****"
                      label="your password"
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <div className="mt-2">
                    <FormInput
                      id=""
                      name="address"
                      label="Address"
                      type="text"
                      placeholder="write your address"
                      className="block w-full rounded-md border-0 py-1.5 px-2  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <div className="mt-2">
                    <FormInput
                      id=""
                      name="contactNo"
                      type="text"
                      label="Number"
                      placeholder="Your number"
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <button type="submit" className="btn btn-outline w-72 rounded-full">
              Signup
            </button>
          </div>
        </Form>
        <p className="mt-10 text-center text-sm text-gray-500">
          Already you have an account?{" "}
          <Link
            href="/login"
            className="font-semibold leading-6 text-secondary hover:text-indigo-500"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
