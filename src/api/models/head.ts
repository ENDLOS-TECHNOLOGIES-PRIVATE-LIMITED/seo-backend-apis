import mongoose from "mongoose";

import { Schema, model } from "mongoose";
const headSchema = new Schema(
  {
    website: { type: mongoose.Schema.Types.ObjectId, refPath: "websiteRef" },
    webPageUrl: { type: String, required: true,unique:true },
    headTag: { type: String, required: true,  },
  },
  {
    timestamps: true,
  }
);

const Head = model("Head", headSchema);
export default Head;
