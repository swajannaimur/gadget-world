import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";


export async function GET(req, { params }) {
    const p = await params
    const gadgetCollection = dbConnect(collectionNameObj.gadgetCollection)
    const query = {_id: new ObjectId(p.id)}
    const singleProduct = await gadgetCollection.findOne(query)
    return NextResponse.json(singleProduct)
}
