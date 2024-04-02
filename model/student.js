import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  stdname: String,
  college: String,
  course: String,
  branch: String,
  internship: String,
  mono: Number,
  emailid: String,
  subject: String,
  msg: String,
});

const UserModel = mongoose.model("Student", UserSchema);

export default UserModel;
//import { setStudent } from "./routes/studentroute.js";
//app.post("/setStudent", setStudent);
//app.get("/getAdmin", getAdmin);
