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
import { useState } from "react";
import { useSelector } from "react-redux";
import { revalidateTag } from "next/cache";

export function DialogCloseButton() {
  const [text, setText] = useState<string>("");
  const [image, setImage] = useState<string>("");

  const user = useSelector((state: any) => state.userState);

  const makePost = async () => {
    await fetch(`/api/post/${user?.data?._id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        content: text,
        image,
      }),
    });

    revalidateTag("posts");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="border hover:bg-gray-100 transition-all duration-300 cursor-pointer outline-none w-full h-[50px] rounded-full px-4 placeholder:font-semibold placeholder:text-[12px] placeholder:text-black flex justify-start"
        >
          Start a Post
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full">
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Post
            </Label>
            <Input
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Post Title"
            />
            <Label htmlFor="link" className="sr-only">
              Image
            </Label>
            <Input
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="Add Image URL"
            />
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary" onClick={makePost}>
              Post
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
