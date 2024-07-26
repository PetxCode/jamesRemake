import { dbConfig } from "@/utils/dbConfig";
import myUserModel from "@/utils/model/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

export const POST = async (req: NextRequest) => {
  try {
    await dbConfig();
    const { email, password } = await req.json();
    const emailCheck = await myUserModel.findOne({ email });
    if (emailCheck) {
      const passCheck = await bcrypt.compare(password, emailCheck.password);
      if (passCheck) {
        return NextResponse.json({
          msssage: "User Found",
          status: 200,
          data: emailCheck,
        });
      } else {
        return NextResponse.json({
          msssage: "Error Reading password",
          status: 400,
        });
      }
    } else {
      return NextResponse.json({
        msssage: "User doesn't exist",
        status: 400,
      });
    }
  } catch (error: any) {
    return NextResponse.json({
      message: "Error Occured",
      status: 400,
      error: error.message,
    });
  }
};
