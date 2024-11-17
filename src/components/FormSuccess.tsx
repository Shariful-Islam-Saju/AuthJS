import React from "react";
import { BsCheckCircle } from "react-icons/bs";
interface propsType {
  message?: string;
}
const FormSuccess = ({ message }: propsType) => {
  if (!message) {
    return null;
  } else {
    return (
      <div className="bg-emerald-500/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-emerald-500 ">
        <BsCheckCircle className="h-4 w-4" />
        <p>{message}</p>
      </div>
    );
  }
};

export default FormSuccess;
