import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { getAdmin, userlogin } from "./routes/adminroute.js";
import { setStudent, getStudent } from "./routes/studentroute.js";
const app = express();
const PORT = 5050;

app.use(cors());
app.use(express.json());

async function connectToMongoDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://rohan:rohan631@cluster0.iromq4a.mongodb.net/Mydb"
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    process.exit(1); // Exit the process if unable to connect to MongoDB
  }
}
connectToMongoDB();

app.get("/getAdmin", getAdmin);
app.post("/setStudent", setStudent);
app.get("/login", userlogin);
app.get("/getStudent", getStudent);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
