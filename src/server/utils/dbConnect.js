import mongoose from "mongoose";

export default function dbconnect(params) {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected successfully..."))
    .catch(() => console.log("MongoDB could not connect...!"));
}
