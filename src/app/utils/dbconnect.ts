import mongoose from "mongoose";
import log from "./logger";
const URI = process.env.URI;

const dbConnect = async (): Promise<void> => {
  try {
    if (!URI) {
      log.error("URI is not defined");
      process.exit(1);
    }
    await mongoose.connect(URI);
    log.info("MongoDB connected");
  } catch (error: any) {
    log.error(error.message);
  }
};

export default dbConnect;
