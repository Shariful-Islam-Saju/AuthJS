import React from "react";
export const metadata = {
  title: "Login",
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="text-left">{children}</div>;
};

export default layout;
