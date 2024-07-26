import { dbConfig } from "@/utils/dbConfig";
import myCommentModel from "@/utils/model/commentModel";
import myLikesModel from "@/utils/model/likeModel";
import myPostModel from "@/utils/model/postModel";
import myUserModel from "@/utils/model/userModel";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest, { params }: any) => {
  try {
    await dbConfig();
    const { userID, postID } = await params;
    const user = await myUserModel.findById(userID);
    const post = await myPostModel.findById(postID);
    const getD = await myLikesModel.create({ post, user });
    await post.like.push(getD._id);
    post.save();
    return NextResponse.json({
      message: "Like Posted",
      status: 200,
      data: getD,
    });
  } catch (error: any) {
    return NextResponse.json({
      message: "Error Occured!",
      status: 400,
      error: error.message,
    });
  }
};
