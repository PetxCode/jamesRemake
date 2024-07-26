"use client";
import { redirect } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";
import Header from "./Header";
import Post from "./Post";
import PostPart from "./components/PostPart";
import RightPart from "./components/RightPart";
import LeftPart from "./components/LeftPart";

const Page = () => {
  const data = useSelector((state: any) => {
    return state.userState;
  });
  const postToggle = useSelector((state: any) => {
    return state.postToggle;
  });

  if (data.status !== 200) {
    redirect("/login");
  } else {
    return (
      <div className={postToggle ? "h-[100vh] overflow-x-hidden" : "w-full"}>
        {postToggle && <Post />}
        <Header />

        {/* PART 1 */}

        <div className="grid w-[100vw] grid-cols-1 md:grid-cols-7 lg:grid-cols-10 gap-5 md:px-20 px-5 pt-20">
          <div className=" lg:col-span-2 flex flex-col w-[90vw] md:w-full h-full gap-1 md:col-span-3">
            <LeftPart />
          </div>

          {/* PART 2 */}
          <div className="md:col-span-4 col-span-5 ">
            <PostPart />
          </div>

          {/* PART 3 */}
          <div className=" col-span-2 lg:col-span-3 hidden lg:flex flex-col gap-[-10px]">
            <RightPart />
          </div>
        </div>
      </div>
    );
  }
};

export default Page;
