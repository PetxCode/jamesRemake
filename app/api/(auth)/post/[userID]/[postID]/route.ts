import { dbConfig } from "@/utils/dbConfig";
import myPostModel from "@/utils/model/postModel";
import myUserModel from "@/utils/model/userModel";
import { NextRequest, NextResponse } from "next/server";

export const DELETE = async (req: NextRequest, { params }: any) => {
  try {
    await dbConfig();
    const { userID, postID } = await params;
    const user = await myUserModel.findById(userID);
    const post = await myPostModel.findById(postID);
    const getD = await myPostModel.findByIdAndDelete(postID);
    await user.post.pull(post._id);
    user.save();
    return NextResponse.json({
      message: "Post Deleted",
      status: 200,
      data: getD,
    });
  } catch (error: any) {
    return NextResponse.json({
      message: "Error Occured",
      status: 400,
      error: error.message,
    });
  }
};

export const PATCH = async (req: NextRequest, { params }: any) => {
  try {
    await dbConfig();
    const { userID, postID } = await params;
    const toggle = await myPostModel.findById(postID);
    await myPostModel.findByIdAndUpdate(
      postID,
      {
        commentToggle: !toggle?.commentToggle,
      },
      { new: true }
    );

    return NextResponse.json({
      message: "Post Deleted",
      status: 200,
    });
  } catch (error: any) {
    return NextResponse.json({
      message: "Error Occured",
      status: 400,
      error: error.message,
    });
  }
};
