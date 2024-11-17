import React from "react";
import { BsExclamationTriangle } from "react-icons/bs";
interface propsType {
  message?: string;
}
const FormError = ({ message }: propsType) => {
 if (!message) {
  return null
 } else {
   return <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive ">
    <BsExclamationTriangle className="h-4 w-4" />
    <p>{message}</p>
   </div>;
 }
};

export default FormError;
