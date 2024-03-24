"use client";
import "./globals.css";
import { useSession, signIn, signOut } from "next-auth/react";
import store from "../lib/store";
import { Provider } from "react-redux";

export default function Home() {
  const { data: session } = useSession();
  console.log(session, "session");
 
  return <main className="min-h-screen ">Landing Page</main>;
}
