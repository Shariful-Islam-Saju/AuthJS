/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface propsType {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHerf: string;
  showSocial: boolean;
}

const CardWrappar = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHerf,
  showSocial,
}: propsType) => {
  return (
    <Card className="w-[400px] shadow-lg">
     {children}
    </Card>
  );
};

export default CardWrappar;
