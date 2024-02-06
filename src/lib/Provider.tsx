"use client";
import React from "react";

import { Provider } from "react-redux";

import { NextUIProvider } from "@nextui-org/react";
import { Toaster } from "react-hot-toast";
import { IChildrenProps } from "@/types/common";
import { store } from "@/redux/store";

const Providers = ({ children }: { children: IChildrenProps }) => {
  return (
    <Provider store={store}>
      <NextUIProvider>{children}</NextUIProvider>
      <Toaster position="top-center" reverseOrder={false} />
    </Provider>
  );
};

export default Providers;
