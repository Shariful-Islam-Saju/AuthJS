"use server";

import { registerSchema } from "../schemas";

export const register = async (values: object) => {
  const validateFields = registerSchema.safeParse(values);
  console.log(validateFields);
  if (!validateFields.success) {
    return { error: "Invalid Info" };
  }

  return { data: "Successfull" };
};
