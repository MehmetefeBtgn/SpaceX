"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {useMutation} from "@tanstack/react-query"
import { supabase } from "../lib/supabase";

export default function Signup() {

/**
 * State variables for user registration form.
 *
 * @constant {string} email - The user's email input state.
 * @constant {Function} setEmail - Function to update the email state.
 * @constant {string} password - The user's password input state.
 * @constant {Function} setPassword - Function to update the password state.
 * @constant {string} confirmPassword - The user's password confirmation input state.
 * @constant {Function} setConfirmPassword - Function to update the confirmPassword state.
 */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

/**
 * Registers a new user using email and password via Supabase.
 *
 * @async
 * @function registerUser
 * @param {Object} params - The registration credentials.
 * @param {string} params.email - The user's email address.
 * @param {string} params.password - The user's password.
 * @returns {Promise<string>} A success message if registration is successful.
 * @throws {Error} If registration fails (e.g., email already in use, weak password).
 */
  const registerUser = async ({ email, password }: { email: string; password: string }) => {
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) throw new Error(error.message);
    return "Kayıt başarılı! Lütfen e-postanızı doğrulayın.";
  };
  
/**
 * Kullanıcı kayıt işlemini yöneten `useMutation` hook'u.
 *
 * - `mutationFn`: Kullanıcı kaydını gerçekleştiren asenkron fonksiyon.
 * - `onSuccess`: Kayıt başarılı olduğunda çalışır, kullanıcıyı yönlendirir.
 * - `onError`: Kayıt başarısız olduğunda hata mesajını gösterir.
 *
 * @constant
 */
  const mutation = useMutation({
    mutationFn: registerUser,
    onSuccess: (message) => {
      alert(message);
      router.push("/");
    },
    onError: (error) => {
      alert(error.message);
    },
  });

/**
 * Handles the user registration process.
 *
 * - Checks if the passwords match.
 * - If they do not match, an error message is displayed.
 * - If they match, a registration request is sent using `mutation.mutate`.
 */
  const handleRegister = () => {
    if (password !== confirmPassword) {
      alert("Parolalar eşleşmiyor!");
      return;
    }
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
    <div className="text-2xl text-center pl-10 pr-10 text-white">Welcome to the SpaceX application, your gateway to the marvels of space exploration. Experience cutting-edge technology, real-time mission updates, and a seamless interface providing in-depth insights into SpaceX’s groundbreaking missions, rockets, and the future of interstellar travel. Join us as we push the boundaries of space exploration together.</div>
    <div className="text-bold text-3xl mt-10 text-center text-white">LOG IN</div>
    <div className="text-bold text-xl text-center text-white">Please fill out the form below to complete your profile </div>
    <div className="flex justify-center items-center m-5">
      <input className="border-solid border 1 w-96 h-8 rounded-full text-white pl-2" name="email" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
      </div>
    <div className="flex justify-center items-center m-5">
      <input className="border-solid border 1 w-96 h-8 rounded-full text-white pl-2" name="password" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
      </div>
     <div className="flex justify-center items-center m-5">
      <input className="border-solid border 1 w-96 h-8 rounded-full text-white pl-2" name="cpassword" type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}></input>
      </div>
    <div className="flex justify-center items-center mt-5 mb-2">
      <button className="bg-[#36445B] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-96 h-10 text-white" type="submit" onClick={handleRegister}>Sign Up</button>
    </div>
    <div className="text-center text-white">Do you have an account already ?</div>
    <div className="text-center text-white hover:text-gray-800"><Link href="/">LOG IN</Link></div>
    </div>
  );
}

