import { dbConfig } from "@/utils/dbConfig";
import myUserModel from "@/utils/model/userModel";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, { params }: any) => {
  try {
    await dbConfig();
    const { userID } = params;

    const user = await myUserModel.findById(userID);

    return NextResponse.json({
      message: "Default Route",
      status: 200,
      data: user,
    });
  } catch (error: any) {
    return NextResponse.json({
      message: "Error Occured!",
      status: 400,
      error: error.message,
    });
  }
};