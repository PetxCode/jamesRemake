import React from "react";
import { ProfileModal } from "./profileModal";
import { useSelector } from "react-redux";

const LeftPart = () => {
  const user = useSelector((el: any) => el.userState);

  return (
    <div>
      <div className="border pb-4 w-full md:w-full md:h-[370px] bg-white  border-neutral-300 rounded-md">
        <div className="relative">
          <div className="bg-gray-300 h-[80px] "></div>

          <ProfileModal />
        </div>
        <div className="flex justify-center items-center mt-10 md:border-b md:pb-4">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-[14px] text-neutral-500 font-semibold pb-1">
              Welcome, {user?.data?.name}
            </h1>
            <p className="text-[11px]  text-blue-600 font-light">Add a Photo</p>
          </div>
        </div>

        <div className="px-5 py-2 leading-5 border-b pb-2 hidden md:block">
          <h1 className="font-medium text-[10px] text-neutral-500">
            Profile Viewers
          </h1>
          <h1 className="font-medium text-[10px] text-neutral-500">
            View all Analytics
          </h1>
        </div>
      </div>

      <div className="border h-[100px] bg-white border-neutral-300 hidden md:block rounded-md">
        2
      </div>
    </div>
  );
};

export default LeftPart;
