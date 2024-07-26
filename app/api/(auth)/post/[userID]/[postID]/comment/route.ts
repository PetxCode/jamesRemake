import { dbConfig } from "@/utils/dbConfig";
import myCommentModel from "@/utils/model/commentModel";
import myPostModel from "@/utils/model/postModel";
import myUserModel from "@/utils/model/userModel";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest, { params }: any) => {
  try {
    await dbConfig();
    const { userID, postID } = await params;
    const { reply } = await req.json();
    const user = await myUserModel.findById(userID);
    const post = await myPostModel.findById(postID);
    const getD = await myCommentModel.create({ reply, post, user });
    await post.comment.push(getD._id);
    post.save();
    return NextResponse.json({
      message: "Comment Posted",
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

export const GET = async (req: NextRequest, { params }: any) => {
  try {
    const { postID } = await params;

    const getD = await myPostModel.findById(postID).populate({
      path: "comment",
      options: {
        sort: {
          createAt: -1,
        },
      },
    });
    return NextResponse.json({
      message: "All Comments",
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
