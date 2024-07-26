import { CopyIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CameraIcon } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { signUser } from "../global/slice";
import Image from "next/image";

export function ProfileModal() {
  const user = useSelector((state: any) => state.userState);
  const dispatch = useDispatch();
  console.log(user?.data?._id);
  const [name, setName] = useState<string>("");
  const [profession, setProfession] = useState<string>("");
  const [avatar, setAvatar] = useState<string>("");

  const updateProfile = async () => {
    const url = process.env.LOCAL_URL;
    await fetch(`/api/${user?.data?._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        profession,
        avatar,
      }),
    }).then(async (res) => {
      let data = await res.json();
      dispatch(signUser(data));
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="border-2 flex items-center justify-center border-white rounded-full w-[60px] h-[60px] bg-gray-300 top-[50px] md:right-[80px] right-[40%] absolute">
          {user?.data?.avatar ? (
            <Image
              width={1000}
              height={1000}
              src={user?.data?.avatar}
              alt=""
              className="rounded-full w-ful h-full object-cover"
            />
          ) : (
            <CameraIcon className="text-[20px] text-blue-600" />
          )}
        </div>
      </DialogTrigger>
      <DialogContent className="w-full">
        <DialogHeader>
          <DialogTitle>Update your Profile</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Name
            </Label>
            <Input
              id="link"
              type="text"
              name="name"
              placeholder="Enter your updated name"
              //   readOnly

              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Label htmlFor="link" className="sr-only">
              Profession
            </Label>
            <Input
              id="link"
              type="text"
              name="profession"
              placeholder="Enter your updated Profession"
              //   readOnly

              value={profession}
              onChange={(e) => setProfession(e.target.value)}
            />
            <Label htmlFor="link" className="sr-only">
              avatar link
            </Label>
            <Input
              id="link"
              type="text"
              name="avatar"
              placeholder="Enter your updated Avatar Link"
              //   readOnly

              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
            />
          </div>
        </div>

        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button
              type="button"
              variant="secondary"
              onClick={() => {
                updateProfile();
                console.log("Printed");
              }}
            >
              Update Now
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
