import { dbConfig } from "@/utils/dbConfig";
import myPostModel from "@/utils/model/postModel";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await dbConfig();

    const post = await myPostModel.find();

    return NextResponse.json({
      message: "Default Route",
      status: 200,
      data: post,
    });
  } catch (error: any) {
    return NextResponse.json({
      message: "Error Occured!",
      status: 400,
      error: error.message,
    });
  }
};
