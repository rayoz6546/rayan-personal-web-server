import mongoose from "mongoose";
const courseSchema = new mongoose.Schema(
 {
   name: String,
   credits: Number,
   university: String,
   semester: String,
   level: String,
   grade: String,
   description: String,
   image: String,

 },
 { collection: "courses" }
);
export default courseSchema;