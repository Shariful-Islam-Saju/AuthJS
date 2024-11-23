import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String, // Specifies the data type
    required: true, // Makes this field mandatory
    trim: true, // Removes leading/trailing spaces
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensures email is unique in the collection
    lowercase: true, // Converts value to lowercase
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.models.users || mongoose.model("User", userSchema);

export default User;
