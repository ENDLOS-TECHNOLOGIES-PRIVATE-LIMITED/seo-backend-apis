import mongoose from "mongoose";

import { Schema, model } from "mongoose";
const websiteSchema = new Schema(
  {
    name: { type: String, required: true,},
    // url: { type: String, required: true, unique: true },
  
  },
  {
    timestamps: true,
  }
);

const Website = model("Website", websiteSchema);
export default Website;
