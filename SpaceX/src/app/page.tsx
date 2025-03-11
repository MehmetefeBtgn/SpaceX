"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState} from "react";
import { supabase } from "./lib/supabase";
import { useMutation } from "@tanstack/react-query";

/**
 * Retrieves the currently authenticated user from Supabase.
 *
 * @returns {Promise<Object|null>} A promise that resolves to the user object if authenticated, otherwise null.
 * @throws {Error} If there is an error fetching the user.
 */
const getUser = async () => {
  const { data, error } = await supabase.auth.getUser();
  if (error) throw new Error(error.message);
  return data?.user;
};

/**
 * Logs in a user using email and password authentication via Supabase.
 *
 * @param {Object} params - The login credentials.
 * @param {string} params.email - The user's email address.
 * @param {string} params.password - The user's password.
 * @returns {Promise<string>} A success message if login is successful.
 * @throws {Error} If authentication fails (incorrect email or password).
 */
const loginUser = async ({ email, password }: { email: string; password: string }) => {
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw new Error("E-posta veya şifre hatalı!");
  return "Giriş başarılı!";
};

export default function Login() {
/**
 * Manages user login state and handles authentication using TanStack Query.
 *
 * @constant {string} email - The user's email input state.
 * @constant {Function} setEmail - Function to update the email state.
 * @constant {string} password - The user's password input state.
 * @constant {Function} setPassword - Function to update the password state.
 */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /*** @constant {Object} mutation - TanStack Query mutation for handling user login.
 * @property {Function} mutation.mutationFn - The login function to authenticate the user.
 * @property {Function} mutation.onSuccess - Callback triggered on successful login.
 * @property {Function} mutation.onError - Callback triggered when login fails.
 */
  const mutation = useMutation({
    mutationFn: loginUser,
    onSuccess: () => {
      alert("Giriş başarılı!");
      router.push("/anasayfa");
    },
    onError: (error) => {
      alert(error.message);
    },
  });

/**
 * Handles the user login process by triggering the login mutation.
 *
 * @function handleLogin
 * @throws {Error} If the login request fails.
 */
  const handleLogin = () => {
    mutation.mutate({ email, password });
  };

/**
 * Next.js router instance for navigation.
 *
 * @constant {Object} router - The Next.js router instance.
 */
  const router = useRouter();

  return (
    <div>
    <div className="flex justify-center items-center m-15">
      <Image src="/spacex.png" alt="space" width={516} height={63} />
    </div>
    <div className="text-2xl text-center pl-10 pr-10 text-white">Welcome to the SpaceX application, your gateway to the marvels of space exploration. Experience cutting-edge technology, real-time mission updates, 
      and a seamless interface providing in-depth insights into SpaceX’s groundbreaking missions, rockets, and the future of interstellar travel. Join us as we push the boundaries of space exploration together.</div>
    <div className="text-bold text-3xl mt-10 text-center text-white">LOG IN</div>
    <div className="text-bold text-xl text-center text-white">Please fill out the form below to complete your profile </div>
    <div className="flex justify-center items-center m-5">
      <input className="border-solid border 1 w-96 h-8 rounded-full  text-white pl-2" name="email" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}></input></div>
    <div className="flex justify-center items-center m-5">
      <input className="border-solid border 1 w-96 h-8 rounded-full text-white pl-2" name="password" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></input></div>
    <div className="flex justify-center items-center mt-5 mb-2">
      <button className="bg-[#36445B] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-96 h-10 text-white" type="submit" onClick={handleLogin}>Log In</button>
    </div>
    <div className="text-center text-white">Don't you have an account already ?</div>
    <div className="text-center text-white hover:text-gray-800"><Link href="/signup" id="1">Sign Up</Link></div>
    </div>
  );
}
