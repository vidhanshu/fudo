import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const SignUpFormSchema = z.object({
  email: z.string().min(2).max(50),
  password: z.string().min(6).max(30),
  name: z.string().min(3).max(50),
});

const SigninComponent: React.FC<{
  onSubmit: (values: z.infer<typeof SignUpFormSchema>) => void;
}> = ({ onSubmit }) => {
  const form = useForm<z.infer<typeof SignUpFormSchema>>({
    resolver: zodResolver(SignUpFormSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });

  return (
    <div className="flex gap-4 flex-col md:flex-row">
      <div className="flex-1 h-screen">
        <nav className="px-4 py-2">
          <Image src="/home/logo.svg" alt="logo" width={100} height={100} />
        </nav>
        <div className="flex justify-center items-center h-[calc(100vh-65px)]">
          <div className="flex flex-col">
            <div className="mb-4 ">
              <h1 className="typo-title-xl">Welcome to fudo!</h1>
              <p className="typo-detail-md mt-2">
                Sign up to order your favorite food
              </p>
            </div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4 flex-1"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Email" {...field} />
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
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="Password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Register</Button>
                <h1>
                  Already have an account?{" "}
                  <Link
                    className="text-primary-main hover:underline"
                    href="/signin"
                  >
                    sign in
                  </Link>{" "}
                  instead
                </h1>
              </form>
            </Form>
          </div>
        </div>
      </div>
      <div
        className="flex-1 h-screen"
        style={{ backgroundImage: "url('/auth/auth.jpg')" }}
      />
    </div>
  );
};

export default SigninComponent;
