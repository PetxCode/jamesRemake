import Image from "next/image";
import React, { FC, useEffect, useState } from "react";
import moment from "moment";
interface iPropr {
  userID: string;
  post: any;
}

const Profile: FC<iPropr> = ({ userID, post }) => {
  const [userData, setUserData] = useState<any>({});

  const fetchUserData = async () => {
    return await fetch(`/api/${userID}`, {
      method: "GET",
      cache: "no-cache",
    }).then((res) => {
      return res.json();
    });
  };

  useEffect(() => {
    fetchUserData().then((res) => {
      setUserData(res.data);
    });
  }, [userID]);

  return (
    <div className="flex gap-3 items-center">
      {userData?.avatar ? (
        <Image
          src={userData?.avatar}
          alt="#"
          width={1000}
          height={1000}
          className="w-[40px] h-[40px] rounded-full border"
        />
      ) : (
        <div>{userData?.email?.charAt(0)}</div>
      )}

      <div className="leading-[14px]">
        <h1 className="font-semibold text-[14px]">{userData?.name}</h1>
        <p className="text-neutral-500 font-light text-[12px]">
          {userData?.profession}
        </p>
        <p className="text-neutral-500 font-light text-[12px]">
          {moment(post?.createdAt).fromNow()}.
        </p>
      </div>
    </div>
  );
};

export default Profile;
