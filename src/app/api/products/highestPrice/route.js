import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export const GET = async () => {
    const gadgetCollection = dbConnect(collectionNameObj.gadgetCollection);
    const result = await gadgetCollection
        .find()
        .sort({ price: -1 })
        .limit(3)
        .toArray();
    return NextResponse.json(result);
};

