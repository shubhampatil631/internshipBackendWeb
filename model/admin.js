import mongoose from "mongoose";

const UserSchema1 = new mongoose.Schema({
  username: Number,
  password: Number,
});

const UserModel2 = mongoose.model("admin", UserSchema1);

export default UserModel2;
