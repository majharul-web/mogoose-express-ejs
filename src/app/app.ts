import express, { Application } from "express";
import cors from "cors";
import "dotenv/config";
import dbConnect from "./utils/dbconnect";

const app: Application = express();

// using cors
app.use(cors());

// data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// db connection
dbConnect();

// Routes

export default app;
