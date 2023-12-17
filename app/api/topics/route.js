import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { title, description } = await req.json();
  await connectMongoDB();
  await Topic.create({ title, description });

  return NextResponse.json({ msg: "Topic created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const topics = await Topic.find();
  return NextResponse.json({ topics }, { status: 201 });
}

export async function DELETE(req) {
  const id = req.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Topic.findByIdAndDelete(id);

  return NextResponse.json({ msg: "Topic deleted" }, { status: 200 });
}
