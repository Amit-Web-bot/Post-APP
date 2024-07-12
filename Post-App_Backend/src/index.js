import dotenv from "dotenv"
dotenv.config()
import connectDB from "./db/connection.db.js";

connectDB();