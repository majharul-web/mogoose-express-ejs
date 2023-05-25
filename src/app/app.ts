import express, { Application } from "express";
import cors from "cors";
import "dotenv/config";
import dbConnect from "./utils/dbconnect";
import productRouter from "./modules/Product/product.route";

const app: Application = express();

// use ejs template engine
app.set("view engine", "ejs");

// using cors
app.use(cors());

// data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// db connection
dbConnect();

app.get("/", (req, res) => {
  res.render("index");
});

// Routes
app.use("/api/v1/products", productRouter);

export default app;
