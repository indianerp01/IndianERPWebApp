import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { Post } from "@/lib/model/product";
import { connection } from "@/lib/db";
export async function GET(){

    mongoose.connect(connection, {
        // useCreateIndex: true,
    }).then (() => {
        console.log("Connected to the database");
        
    }).catch(err => {
        console.log("Error", err.message);
    });
    
    const data = Post.find({})
    .then(function(posts){
        console.log(posts[3]);
        
    })
    
    
    
    return NextResponse.json({ message: 'Hello from Next.js API route!' });

}

export async function POST(request:any){
    const payload = await request.json();
    await mongoose.connect(connection);
    let post = new Post(payload)

    const result = await post.save();

    return NextResponse.json({result,success:true});
}