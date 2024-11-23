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
  if (!validateFields.success) {
    return { error: "Invalid Info" };
  }
  const exitEmail = await User.find({ email: userObject.email });
  if (exitEmail.length > 0) {
    return {error: "Email already exit"}
  }
  const newUser = new User(userObject);
  await newUser.save();
  return { data: "Successfull" };
};
