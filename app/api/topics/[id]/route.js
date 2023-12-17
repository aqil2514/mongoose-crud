import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  const { id } = params;
  const { newTitle: title, newDescription: description } = await req.json();
  await connectMongoDB();
  await Topic.findByIdAndUpdate(id, { title, description });

  return NextResponse.json({ msg: "Topic updated" }, { status: 200 });
}

export async function GET(req, { params }) {
  const { id } = params;
  await connectMongoDB();
  const topic = await Topic.findOne({ _id: id });

  return NextResponse.json({ topic }, { status: 200 });
}
