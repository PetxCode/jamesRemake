import React from "react";
import { IoMdCalendar } from "react-icons/io";
import { MdArticle, MdImage, MdPerson } from "react-icons/md";
import { PiPictureInPictureLight } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "./global/slice";
import { DialogCloseButton } from "./components/modal";
import Image from "next/image";

const Content = () => {
  const dispatch = useDispatch();

  const user = useSelector((state: any) => state.userState);
  return (
    <div className="w-full bg-white border-neutral-300 flex flex-col gap-2 border rounded-md h-[130px]">
      <div className="flex gap-3 w-full px-4 py-4 items-center">
        <div className="flex items-center justify-center rounded-full border h:40px md:h-[50px] cursor-pointer w-[40px] md:w-[55px]">
          {user?.data?.avatar ? (
            <Image
              src={user?.data?.avatar}
              alt="text"
              width={1000}
              height={1000}
              className=" w-[55px] h-[38px] rounded-full object-cover"
            />
          ) : (
            <MdPerson className="text-[40px]" />
          )}
        </div>
        <div className="w-full ">
          <DialogCloseButton />
        </div>
      </div>
      <div className="flex justify-between px-5 md:px-14">
        <div
          // onClick={() => dispatch(addPost())}
          className="flex gap-2 items-center cursor-pointer"
        >
          <MdImage color="blue" className="text-[20px]" />
          <p className="text-[14px] font-semibold text-neutral-600">Media</p>
        </div>
        <div
          // onClick={() => dispatch(addPost())}
          className="flex gap-2 items-center cursor-pointer"
        >
          <IoMdCalendar color="#c37d16" className="text-[20px]" />
          <p className="text-[14px] font-semibold text-neutral-600">Event</p>
        </div>
        <div
          // onClick={() => dispatch(addPost())}
          className="flex gap-2 items-center cursor-pointer"
        >
          <MdArticle color="#e06847" className="text-[20px]" />
          <p className="text-[14px] font-semibold text-neutral-600">Article</p>
        </div>
      </div>
    </div>
  );
};

export default Content;
