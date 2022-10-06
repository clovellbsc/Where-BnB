import { Schema, model } from "mongoose";

const postSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
});

const Post = model("Post", postSchema);

export default Post;
