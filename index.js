import express from 'express';
import cors from "cors";
import session from "express-session";
import "dotenv/config";
import mongoose from "mongoose";
import UserRoutes from "./rayan/users/routes.js";
import CourseRoutes from './rayan/courses/routes.js';
import ProjectRoutes from "./rayan/projects/routes.js";
import PaperRoutes from './rayan/papers/routes.js';


const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || "mongodb://127.0.0.1:27017/rayan"
mongoose.connect(CONNECTION_STRING);
const app = express()
app.use(cors({   credentials: true,
    origin: process.env.NETLIFY_URL || "http://localhost:3000",
})); 

const sessionOptions = {
secret: process.env.SESSION_SECRET || "rayan",
resave: false,
saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
sessionOptions.proxy = true;
sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
    domain: process.env.NODE_SERVER_DOMAIN,
};
}
app.use(session(sessionOptions));
      
      
app.use(express.json());
UserRoutes(app);
CourseRoutes(app);
ProjectRoutes(app);
PaperRoutes(app);
app.listen(process.env.PORT || 4000)