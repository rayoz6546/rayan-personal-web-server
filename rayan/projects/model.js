import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("ProjectModel", schema);
export default model;