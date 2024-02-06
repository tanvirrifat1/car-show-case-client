"use client";
import React from "react";

import { Provider } from "react-redux";

import { NextUIProvider } from "@nextui-org/react";
import { Toaster } from "react-hot-toast";
import { IChildrenProps } from "@/types/common";

const Providers = ({ children }: { children: IChildrenProps }) => {
  return (
    <>
      <NextUIProvider>{children}</NextUIProvider>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default Providers;
