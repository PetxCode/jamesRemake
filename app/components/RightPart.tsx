import Link from "next/link";
import React from "react";

const RightPart = () => {
  const navs = [
    { id: 0, name: "About", url: "#" },
    { id: 1, name: "Acessibility", url: "#" },
    { id: 2, name: "Help Center", url: "#" },
    { id: 3, name: "Privacy & Terms", url: "#" },
    { id: 4, name: "Ad Choices", url: "#" },
    { id: 5, name: "Advertising", url: "#" },
    { id: 6, name: "Business Services", url: "#" },
    { id: 7, name: "Get the Linkedin App", url: "#" },
    { id: 8, name: "More", url: "#" },
  ];

  return (
    <div className="col-span-3 hidden md:flex flex-col gap-[-10px]    ">
      <div className="border h-[450px] bg-white border-neutral-300 rounded-md">
        1
      </div>
      <div className="sticky top-16 h-[100px] py-6 w-full ">
        <div className="flex flex-wrap gap-3 pl-10 items-center justify-center">
          {navs.map((el: any) => (
            <Link
              className="text-[12px] text-neutral-500 hover:underline hover:text-blue-500"
              key={el.id}
              href={el.url}
            >
              {el.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightPart;
