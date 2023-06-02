import mongoose from "mongoose";

import { Schema, model } from "mongoose";
const headSchema = new Schema(
  {
    webPageUrl: { type: String, required: true,unique:true },
    headTag: { type: String, required: true,  },
  },
  {
    timestamps: true,
  }
);

const Head = model("Head", headSchema);
export default Head;
