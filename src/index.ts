import express, { Application } from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";

const app: Application = express();

// using cors
app.use(cors());

// data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT: string | number = process.env.PORT || 4000;
const URI = process.env.URI;

const dbConnection = async (): Promise<void> => {
  if (!URI) throw new Error("URI is not defined");
  await mongoose.connect(URI).then(() => console.log("DB Connected"));

  const db = mongoose.connection;
  const collection = db.collection("devices");

  app.get("/devices", async (req, res) => {
    const data = await collection.find({}).toArray();
    res.send(data);
  });
};

dbConnection();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
