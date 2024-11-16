import React from "react";

import CardWrappar from "./CardWrappar";

export const LoginForm = () => {
  return (
    <>
      <CardWrappar
        headerLabel="Welcome Back"
        backButtonHerf="/auth/register"
        backButtonLabel="Don't have account?"
        showSocial
       >
        Login Form
      </CardWrappar>
    </>
  );
};
