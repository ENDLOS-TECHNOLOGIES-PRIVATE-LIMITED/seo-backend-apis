import mongoose from "mongoose";

import { Schema, model } from "mongoose";
const headSchema = new Schema(
  {
    website: { type: mongoose.Schema.Types.ObjectId, refPath: "websiteRef" },
    webPageUrl: { type: String, required: true,unique:true },
    title: { type: String, required: true,  },
    description: { type: String, required: true,  },
    keywords: { type: String, required: true,  },
    ogTitle: { type: String, required: true,  },
    ogDescription: { type: String, required: true,  },
    ogImageUrl: { type: String, required: true,  },
    twitterTitle: { type: String, required: true,  },
    twitterDescription: { type: String, required: true,  },
    twitterImage: { type: String, required: true,  },

  },
  {
    timestamps: true,
  }
);

const Head = model("Head", headSchema);
export default Head;
