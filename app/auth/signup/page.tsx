"use client";
import { Buttons } from "@/components/Buttons";
import { PasswordInput } from "@/components/Inputs/passwordInput";
import { TextInput } from "@/components/Inputs/textInput";
import { FormikProvider, useFormik } from "formik";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
export interface ISignupData {
  name: string;
  password: string;
  confirmPassword: string;
}
const Signup = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <FormikProvider value={formik}>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col min-h-screen items-center justify-center">
          <p className="mb-5 text-lg">Sign up your Account.</p>
          <div className="w-10/12 sm:w-7/12 md:w-4/12 lg:w-3/12 xl:w-3/12 mb-2">
            <TextInput text="Name" name="name" />
            <PasswordInput text="Password" />
            <PasswordInput text="Confirm Password" />
            <Buttons name="REGISTER" handleClick={() => {}} />
          </div>
          <p className="mb-2">OR</p>
          <p className="underline hover:cursor-pointer hover:text-light-blue">
            <Link href="/auth/login"> Sign in here.</Link>
          </p>
        </div>
      </form>
    </FormikProvider>
  );
};

export default Signup;
