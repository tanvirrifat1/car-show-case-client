"use client";

import { getUserInfo } from "@/services/auth.services";

const page = () => {
  const hello = getUserInfo();
  console.log(hello);
  return <div>welcome profile</div>;
};

export default page;
