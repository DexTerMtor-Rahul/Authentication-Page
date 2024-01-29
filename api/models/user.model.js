import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    // profilePic: {
    //   type: String,
    //   default: "",
    // },
  },
  //   timestamps: true is used to add createdAt and updatedAt time automatically
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
