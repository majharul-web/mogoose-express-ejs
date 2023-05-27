import express, { Application } from "express";
import cors from "cors";
import "dotenv/config";
import dbConnect from "./utils/dbconnect";
import productRouter from "./modules/Product/product.route";
import userRouter from "./modules/User/user.route";
import { errorHandler } from "./utils/errorHandler";
import { checkedLogin } from "./utils/checkedLogin";

const app: Application = express();

// use ejs template engine
app.set("view engine", "ejs");

// using cors
app.use(cors());

// data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

// db connection
dbConnect();

const pLangs: string[] = [];

app.get("/", (req, res) => {
  res.render("index", { pLangs });
});
app.post("/", (req, res) => {
  const { pLanguage } = req.body;
  pLangs.push(pLanguage);
  res.redirect("/");
});
app.get("/about", (req, res) => {
  res.render("about");
});

// Routes
app.use("/api/v1/products",checkedLogin, productRouter);

app.use("/api/v1/user", userRouter);

app.use(errorHandler);
export default app;
