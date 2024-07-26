"use client";
import { addPost } from "@/app/global/slice";
import { redirect } from "next/navigation";
import React from "react";
import { MdCloseFullscreen } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

const Page = () => {
  const postToggle = useSelector((state: any) => {
    return state.postToggle;
  });
  const dispatch = useDispatch();
  console.log(postToggle);

  return (
    <div>
      <div
        className="w-[100vw] backdrop-blur-sm h-screen flex items-center justify-center flex-col"
        style={{
          //   background: "rgba(109, 188, 255, 0.2)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(5px)",
        }}
      >
        <div className="w-[400px] border bg-white rounded-md min-h-[200px] border-black p-4 ">
          <div className=" flex justify-between items-center ">
            <p className="text-[18px] font-semibold mb-5 ">Create Post</p>
            <div
              className="cursor-pointer p-2 mb-4 bg-red-500 text-white rounded-full border"
              onClick={() => {
                console.log("HEY");
                dispatch(addPost());
                // {
                //   postToggle ? setStaffToggle(false) : setToggle(false);
                // }
              }}
            >
              <MdCloseFullscreen />
            </div>
          </div>
          <div className="my-5">
            <hr />
          </div>

          <form className="w-full">
            <div className="flex flex-col mb-3">
              <textarea
                placeholder="What's on your mind"
                className="min-h-[200px] resize-none p-3"
              ></textarea>
            </div>
            <button
              className="bg-blue-950 text-white border rounded-md flex w-full justify-center items-center h-[55px] mt-6"
              type="submit"
            >
              Create Project
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Page;
