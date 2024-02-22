"use client";

import { getUserInfo } from "@/services/auth.services";

const page = () => {
  const hello = getUserInfo();

  return <div className="min-h-[83vh]">welcome profile</div>;
};

export default page;
