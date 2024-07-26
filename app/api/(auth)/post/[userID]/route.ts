import { dbConfig } from "@/utils/dbConfig";
import myPostModel from "@/utils/model/postModel";
import myUserModel from "@/utils/model/userModel";
import { Types } from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest, { params }: any) => {
  try {
    await dbConfig();
    const { userID } = await params;
    const { content, image } = await req.json();
    const user = await myUserModel.findById(userID);
    const getD = await myPostModel.create({ content, image, user, userID });
    await user.post.push(new Types.ObjectId(getD._id));
    user.save();
    return NextResponse.json({
      message: "Post Created",
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
