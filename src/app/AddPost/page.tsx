"use client"
import { useState } from "react"
import "../style.css"
import { addPostLink } from "@/lib/db";
import Timeline from "../components/Timeline/Timeline";
import React from "react";

const Page = () => {
  const [blogTitle,setBlogTitle] = useState("");
  const [blogContent,setBlogContent] = useState("");

  const addPost = async ()=>{
    console.log({blogTitle,blogContent})
    const postData = {blogTitle,blogContent}
    const result = await fetch(addPostLink,{
      method: "POST",
      body:JSON.stringify(postData)
    })
   
    alert("Successfully Inserted !");
  }
  return (
    <>
    <div className=" items-center justify-normal">
        <h1>Add Products</h1>
        <input type="text" className="input" value={blogTitle} onChange={(e)=>setBlogTitle(e.target.value)} placeholder="Enter Post Title" id="" />
        <input type="text" className="input" value={blogContent} onChange={(e)=>setBlogContent(e.target.value)} placeholder="Enter Post Content" id="" />
        <button className="btn" onClick={addPost}>Add Post</button>

        <Timeline/>
    </div>
    
    </>
  )
}

export default Page