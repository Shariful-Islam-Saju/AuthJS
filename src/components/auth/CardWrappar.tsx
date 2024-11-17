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
import Header from "./Header";
import Social from "./Social";
import BackButton from "./BackButton";

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
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>{showSocial && <Social />}</CardFooter>
      <CardFooter>
        <BackButton herf={backButtonHerf} label={backButtonLabel} />
      </CardFooter>
    </Card>
  );
};

export default CardWrappar;
