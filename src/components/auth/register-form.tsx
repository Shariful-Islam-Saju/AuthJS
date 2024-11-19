/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";

// Internal imports
import {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormField,
} from "../ui/form";
import { loginSchema } from "../../../schemas";
import CardWrappar from "./CardWrappar";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import FormError from "../FormError";
import FormSuccess from "../FormSuccess";
import { login } from "../../../actions/login";

export const RegisterForm = () => {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState<string | undefined>();
  const [error, setError] = useState<any | undefined>();
  const onSubmit = (data: z.infer<typeof loginSchema>) => {
    startTransition(async () => {
      try {
        const res = await login(data);
        if (res.error) {
          throw new Error(res.error);
        }
        setSuccess(res.data);
      } catch (err: any | undefined) {
        setError(err.message);
      }
    });
  };
  return (
    <>
      <CardWrappar
        headerLabel="Welcome Back"
        backButtonHerf="/auth/register"
        backButtonLabel="Don't have an account?"
        showSocial
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <FormControl>
                      <Input
                        id="email"
                        {...field}
                        disabled={isPending}
                        placeholder="example@gmail.com"
                        type="email"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <FormControl>
                      <Input
                        id="password"
                        disabled={isPending}
                        placeholder="*******"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormError message={error} />
            <FormSuccess message={success} />
            <Button type="submit" disabled={isPending} className="w-full">
              Log In
            </Button>
          </form>
        </Form>
      </CardWrappar>
    </>
  );
};
