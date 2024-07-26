import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import myUserModel from "@/utils/model/userModel";
import { dbConfig } from "@/utils/dbConfig";

export const POST = async (req: NextRequest) => {
  try {
    await dbConfig();
    const { name, email, password } = await req.json();
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);
    const getD = await myUserModel.create({ name, email, password: hashed });
    return NextResponse.json({
      message: "User Created Successfully",
      data: getD,
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

export const GET = async (req: NextRequest) => {
  try {
    await dbConfig();
    const getD = await myUserModel.find();
    return NextResponse.json({
      message: "All Users",
      status: 200,
      data: getD,
    });
  } catch (error: any) {
    return NextResponse.json({
      message: "Error OCcured",
      status: 400,
      error: error.message,
    });
  }
};
