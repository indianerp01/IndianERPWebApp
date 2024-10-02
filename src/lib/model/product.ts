import mongoose, { model } from "mongoose";

const postSchema = new mongoose.Schema({
    blogTitle:String,
    blogContent:String
})

export const Post =mongoose.models.posts || mongoose.model("posts",postSchema);