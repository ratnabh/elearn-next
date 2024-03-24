"use client";
import { Buttons } from "@/components/Buttons";
import { PasswordInput } from "@/components/Inputs/passwordInput";
import { TextInput } from "@/components/Inputs/textInput";
import { RootState } from "@/lib/reducers";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const Login = () => {
  const [user, setUser] = useState({
    email: null,
    password: null,
  });
  // const dispatch = useDispatch();
  // const count = useSelector((state: RootState) => state);
  // console.log(count)
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <p className="mb-5 text-lg">Login to your Account.</p>
      <div className="w-10/12 sm:w-7/12 md:w-4/12 lg:w-3/12 xl:w-3/12 mb-2">
        {/* <TextInput text="Email" />
        <PasswordInput text="Password" /> */}c
        <div className="mb-4" />
        <Buttons
          name="Sign In With Github"
          handleClick={() => signIn("github")}
        />
        <div className="mb-4" />
        <Buttons
          name="Sign In With Google"
          handleClick={() => signIn("google")}
        />
      </div>
      <p className="mb-2">OR</p>
      <p className="underline hover:cursor-pointer hover:text-light-blue">
        <Link href="/auth/signup"> Sign up with us.</Link>
      </p>
    </div>
  );
};

export default Login;
