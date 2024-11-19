"use server";

import { loginSchema } from "../schemas";

export const login = async (values: object) => {
  const validateFields = loginSchema.safeParse(values);
  if (!validateFields.success) {
    return { error: "Invalid Info" };
  }

  return { data: "Successfull" };
};

