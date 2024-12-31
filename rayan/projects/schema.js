import mongoose from "mongoose";
const projectSchema = new mongoose.Schema(
 {
   name: String,
   description: String,
   url: String,
   video: String,
   image: String,
   skills: Array,
   info_string: Object,
   info_video: Object,
   info_pic: Array,

 },
 { collection: "projects" }
);
export default projectSchema;