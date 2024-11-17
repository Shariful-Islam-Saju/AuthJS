/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useRouter } from "next/navigation";
import React from "react";

interface loginProps {
  children: React.ReactNode;
  mode: "modal" | "redirect";
  asChild: boolean;
}

const LoginButton = ({ children, mode = "redirect", asChild }: loginProps) => {
  const router = useRouter();
  function handleClick() {
    router.push("/auth/login");
  }

  if (mode === "modal") {
    return <span>TODO: Implent model</span>;
  } else {
    return (
      <span onClick={handleClick} className="cursor-pointer">
        {children}
      </span>
    );
  }
};

export default LoginButton;
