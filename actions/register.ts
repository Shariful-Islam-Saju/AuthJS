"use server";
import bcrypt from "bcrypt";

import { connect } from "../db/mongodb";
import { registerSchema } from "../schemas";
import User from "../schemas/user";

connect();
interface userValues {
  name: string;
  email: string;
  password: string;
}
export const register = async (values: userValues) => {
  const hasedPassword = await bcrypt.hash(values.password, 10);
  const userObject: userValues = { ...values, password: hasedPassword };
  const validateFields = registerSchema.safeParse(values);
  console.log(validateFields);
  if (!validateFields.success) {
    return { error: "Invalid Info" };
  }
  const newUser = new User(userObject);
  await newUser.save();
  return { data: "Successfull" };
};
