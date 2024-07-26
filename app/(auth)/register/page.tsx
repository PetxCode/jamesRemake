import { Button } from "@/components/ui/button";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const page = () => {
  const formAction = async (formData: FormData) => {
    "use server";
    const url = "https://linkedin-wine.vercel.app/api/register";
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    await fetch(url, {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
    }).then(async (res) => {
      const read = await res.json();
      if (read.status === 200) {
        redirect("/login");
      }
    });
  };
  return (
    <div className="flex flex-col items-center justify-center h-[100vh] ">
      <form
        action={formAction}
        className=" flex flex-col gap-3 border rounded-md w-[350px] "
      >
        <div className="border-b">
          <h1 className="font-semibold text-[16px] px-3  py-2">
            Registeration Screen
          </h1>
        </div>

        <div className="px-3 flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-[10px]">Name</label>
            <input
              className="border text-[13px] h-[32px] outline-none rounded-sm placeholder:text-[12px] p-1"
              placeholder="Enter your Name"
              name="name"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-[10px]">Email</label>
            <input
              className="border text-[13px] h-[32px] outline-none rounded-sm placeholder:text-[12px] p-1 "
              placeholder="Enter your Email"
              name="email"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-[10px]">Password</label>
            <input
              className="border text-[13px] h-[32px] outline-none rounded-sm placeholder:text-[12px] p-1 "
              type="text"
              name="password"
              placeholder="Enter your Password"
            />
          </div>

          <Button type="submit" className=" h-[40px]">
            Register
          </Button>
        </div>
        <div className="flex items-center mt-[-8px] pb-3 justify-center text-[10px] font-light px-4">
          <h1>Already have an account?</h1>
          <Link className="italic underline" href={"/login"}>
            Sign in Here
          </Link>
        </div>
      </form>
    </div>
  );
};

export default page;
