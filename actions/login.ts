"use server";

import { loginSchema, registerSchema } from "../schemas";

export const login = async (values: object) => {
  const validateFields = loginSchema.safeParse(values);
  if (!validateFields.success) {
    return { error: "Invalid Info" };
  }

  return { data: "Successfull" };
};

export const register = async (values: object) => {
  const validateFields = registerSchema.safeParse(values)
    console.log(validateFields);
    if (!validateFields.success) {
      return { error: "Invalid Info" };
    }

    return { data: "Successfull" };
}