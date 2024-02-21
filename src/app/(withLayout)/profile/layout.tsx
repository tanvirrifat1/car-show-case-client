"use client";

import Loading from "@/app/loading";
import Navbars from "@/component/ui/Navbar";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <section>
      <Navbars />
      {children}
      {/* <Footer /> */}
    </section>
  );
}
