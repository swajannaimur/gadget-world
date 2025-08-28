import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export const POST = async (req) => {
    const body = await req.json();
    const gadgetCollection = dbConnect(collectionNameObj.gadgetCollection);
    const result = await gadgetCollection.insertOne(body);
    return NextResponse.json(result);
};

export const GET = async () => {
    const gadgetCollection = dbConnect(collectionNameObj.gadgetCollection);
    const result = await gadgetCollection.find().toArray();
    return NextResponse.json(result);
};

