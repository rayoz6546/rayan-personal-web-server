import mongoose from "mongoose";
const paperSchema = new mongoose.Schema(
 {
   title: String,
   report: String,
   description: String,

 },
 { collection: "papers" }
);
export default paperSchema;