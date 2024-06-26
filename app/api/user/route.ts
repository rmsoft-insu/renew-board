import { NextResponse } from "next/server";
import { prismadb } from "@/lib/prismadb";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const user = await prismadb.user.create({
      data: body,
    });
    return NextResponse.json(user);
  } catch (error) {
    console.log("[USER_POST]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
