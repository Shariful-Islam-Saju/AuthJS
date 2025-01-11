import React from "react";

const page = () => {
  return (
    <div>
      
    </div>
  );
};

export default page;



// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";
// /* eslint-disable @typescript-eslint/no-unused-vars */
// import React, { useState } from "react";
// import * as z from "zod";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useTransition } from "react";

// // Internal imports
// import {
//   Form,
//   FormItem,
//   FormLabel,
//   FormControl,
//   FormMessage,
//   FormField,
// } from "../ui/form";
// import { registerSchema } from "../../../schemas";
// import CardWrappar from "./CardWrappar";
// import { Input } from "../ui/input";
// import { Button } from "../ui/button";
// import FormError from "../FormError";
// import FormSuccess from "../FormSuccess";
// import { register } from "../../../actions/register";

//  const RegisterForm = () => {
//   const form = useForm<z.infer<typeof registerSchema>>({
//     resolver: zodResolver(registerSchema),
//     defaultValues: {
//       name: "",
//       email: "",
//       password: "",
//     },
//   });

//   const [isPending, startTransition] = useTransition();
//   const [success, setSuccess] = useState<string | undefined>();
//   const [error, setError] = useState<string | undefined>();

//   const onSubmit = (data: z.infer<typeof registerSchema>) => {
//     setError(undefined)
//     setSuccess(undefined)
//     startTransition(async () => {
//       try {
//         const res = await register(data);
//         if (res.error) throw new Error(res.error);
//         setSuccess("Registration successful!");
//         setError(undefined); // Clear any previous errors
//       } catch (err) {
//         setError(
//           err instanceof Error ? err.message : "An unknown error occurred"
//         );
//       }
//     });
//   };

//   return (
//     <CardWrappar
//       headerLabel="Create an Account"
//       backButtonHerf="/auth/login"
//       backButtonLabel="Already have an account?"
//       showSocial
//     >
//       <Form {...form}>
//         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//           <div className="space-y-4">
//             <FormField
//               control={form.control}
//               name="name"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel htmlFor="name">Name</FormLabel>
//                   <FormControl>
//                     <Input
//                       id="name"
//                       {...field}
//                       disabled={isPending}
//                       placeholder="Your Full Name"
//                       type="text"
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <FormField
//               control={form.control}
//               name="email"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel htmlFor="email">Email</FormLabel>
//                   <FormControl>
//                     <Input
//                       id="email"
//                       {...field}
//                       disabled={isPending}
//                       placeholder="example@gmail.com"
//                       type="email"
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <FormField
//               control={form.control}
//               name="password"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel htmlFor="password">Password</FormLabel>
//                   <FormControl>
//                     <Input
//                       id="password"
//                       disabled={isPending}
//                       placeholder="*******"
//                       type="password"
//                       {...field}
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//           </div>
//           <FormError message={error} />
//           <FormSuccess message={success} />
//           <Button type="submit" className="w-full">
//             Register
//           </Button>
//         </form>
//       </Form>
//     </CardWrappar>
//   );
// };

// export default RegisterForm