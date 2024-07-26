import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    return NextResponse.json({
      message: "Default Route",
      status: 200,
    });
  } catch (error: any) {
    return NextResponse.json({
      message: "Error Occured!",
      status: 400,
      error: error.message,
    });
  }
};
