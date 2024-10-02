// const {userName,password} = process.env;

const name = process.env.name;
const password = process.env.password;
const websiteLink = process.env.websiteLink; 
export const addPostLink = websiteLink+"/api/posts";
export const connection = "mongodb+srv://"+name+":"+password+"@cluster0.chivoge.mongodb.net/blog";