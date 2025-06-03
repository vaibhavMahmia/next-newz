import { getNews } from "@/db/db";
import { NextResponse } from "next/server";

export const GET = (request) => NextResponse.json(getNews(), { status: 200 });
