"use client";
import { addPost } from "@/app/global/slice";
import cloudinary from "@/utils/cloudinary";
import { imageUpload } from "@/utils/imageUpload";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import { MdCloseFullscreen, MdImage, MdPerson } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

const Post = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [changed, setChanged] = useState(false);
  const formAction = async (formData: FormData) => {
    const content = formData.get("content");
    const image = formData.get("image") as File;
    // const img = imageUpload(image);
  };
  return (
    <div
      className="md:w-[98.5vw]  relative backdrop-blur-sm  flex items-center flex-col  "
      style={{
        background: "rgba(59, 59, 59, 0.2)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(0.3px)",
      }}
    >
      <div className="w-[600px] border bg-white rounded-md h-full border-neutral-300 p-4 ">
        <div className=" flex justify-between items-center ">
          <div className="flex gap-2 items-center justify-center  cursor-pointer">
            <MdPerson className="text-[40px] w-[50px] h-[50px] border rounded-full" />
            <div className="leading-tight mt-[-10px]">
              <h1 className="text-[18px] font-semibold">James Gomenti</h1>
              <p className="text-[13px] text-neutral-500">Post to everyone</p>
            </div>
          </div>
          <div
            className="cursor-pointer p-2 mb-4 bg-blue-950 text-white rounded-full border"
            onClick={() => {
              setChanged(false);
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

        <form action={formAction} className="w-full h-full">
          <div className="flex flex-col mb-3">
            <textarea
              name="content"
              placeholder="What's on your mind"
              className=" h-[320px] resize-none p-1 outline-none"
              value={text}
              onChange={(e) => {
                setText(e.target.value);
                setChanged(true);
              }}
            ></textarea>
            <div>
              <label htmlFor="file">
                <MdImage className="text-[40px] text-blue-950" />
              </label>

              <input name="image" type="file" id="file" className="hidden" />
            </div>
          </div>
          {changed ? (
            <button
              className="bg-blue-950 text-white border rounded-md flex w-full justify-center items-center h-[55px] mt-6 disabled:cursor-not-allowed disabled:bg-gray-200"
              type="submit"
            >
              Create Project
            </button>
          ) : (
            <button
              disabled
              className="bg-blue-950 text-white border rounded-md flex w-full justify-center items-center h-[55px] mt-6 disabled:cursor-not-allowed disabled:bg-gray-200"
              type="submit"
            >
              Create Project
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Post;
