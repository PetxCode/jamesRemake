"use client";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import Link from "next/link";
import React, { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { useDispatch, useSelector } from "react-redux";
import { signUser } from "@/app/global/slice";
import { dbConfig } from "@/utils/dbConfig";

const Page = () => {
  const data = useSelector((state: any) => {
    return state.userState;
  });
  // console.log(data);

  const dispatch = useDispatch();
  const { toast } = useToast();
  const formAction = async (formData: FormData) => {
    const url = "https://linkedin-wine.vercel.app/api/login";
    const email = formData.get("email");
    const password = formData.get("password");

    return await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    }).then(async (res) => {
      const read = await res.json();
      if (read.status === 200) {
        dispatch(signUser(read));
        redirect("/");
      } else {
        console.log(read);
        toast({
          description: `${read.message}`,
        });
      }
    });
  };
  return (
    <div className="flex flex-col items-center justify-center h-[100vh] ">
      <Toaster />
      <form
        action={formAction}
        className=" flex flex-col gap-3 border rounded-md w-[350px] "
      >
        <div className="border-b">
          <h1 className="font-semibold text-[16px] px-3  py-2">Login Screen</h1>
        </div>

        <div className="px-3 flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-[10px]">Email</label>
            <input
              required
              className="border text-[13px] h-[32px] outline-none rounded-sm placeholder:text-[12px] p-1 "
              placeholder="Enter your Email"
              name="email"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-[10px]">Password</label>
            <input
              required
              className="border text-[13px] h-[32px] outline-none rounded-sm placeholder:text-[12px] p-1 "
              type="text"
              name="password"
              placeholder="Enter your Password"
            />
          </div>

          <Button type="submit" className=" h-[40px]">
            SignIn
          </Button>
        </div>
        <div className="flex items-center mt-[-8px] pb-3 justify-center text-[10px] font-light px-4">
          <h1>Don't have an account?</h1>
          <Link className="italic underline" href={"/register"}>
            Sign in Here
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Page;
