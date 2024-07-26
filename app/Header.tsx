"use client";
import { redirect } from "next/navigation";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOutUser } from "./global/slice";
import Image from "next/image";
import { MdHome, MdPeople, MdSearch } from "react-icons/md";
import { IoMdBriefcase } from "react-icons/io";
import { TiMessageTyping } from "react-icons/ti";
import { CgNotifications } from "react-icons/cg";
import Post from "./Post";

const Header = () => {
  const navs = [
    {
      id: 0,
      name: "Home",
      icon: <MdHome />,
    },
    {
      id: 1,
      name: "My Network",
      icon: <MdPeople />,
    },
    {
      id: 2,
      name: "Jobs",
      icon: <IoMdBriefcase />,
    },
    {
      id: 3,
      name: "Messaging",
      icon: <TiMessageTyping />,
    },
    {
      id: 4,
      name: "Notifications",
      icon: <CgNotifications />,
    },
  ];
  const dispatch = useDispatch();

  return (
    <div>
      <div className="flex justify-between w-full z-[9999] px-5 md:px-20 bg-white shadow-sm h-[60px] items-center fixed">
        <div className="flex gap-1 md:gap-2 items-center">
          <Image
            src={"/linkedin.png"}
            alt="#"
            width={1000}
            height={1000}
            className="w-[37px] h-[37px] rounded-md"
          />
          <div className="flex gap-1 items-center md:bg-[#edf3f8] pl-3 py-2   rounded-md">
            <MdSearch className="font-extrabold text-[30px] md:text-[20px]" />
            <input
              type="text"
              placeholder="Search"
              className="bg-[#edf3f8] outline-none placeholder:text-[14px] placeholder:font-medium hidden md:block"
            />
          </div>
        </div>

        <div className="md:flex gap-6 items-center hidden">
          {navs.map((el: any) => (
            <div key={el.id} className="flex flex-col items-center">
              <div className="text-[30px] md:text-[22px] md:text-neutral-500 text-neutral-800">
                {el.icon}
              </div>
              <nav className="text-[12px] text-neutral-500 font-light hidden md:block">
                {el.name}
              </nav>
            </div>
          ))}
        </div>

        <p
          className="cursor-pointer p-2 bg-[#0a66c2] text-[12px] rounded-md font-semibold text-white"
          onClick={() => {
            dispatch(signOutUser());
          }}
        >
          Sign Out
        </p>
      </div>
    </div>
  );
};

export default Header;
