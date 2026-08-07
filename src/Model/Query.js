import { model, Schema } from "mongoose";

const quarySchema = Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  message: {
    type: String,
    required: true,
    trim: true,
  },
});

const Query = model("Query", quarySchema);

export default Query;
