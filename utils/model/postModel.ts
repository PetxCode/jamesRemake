import { Document, model, models, Schema, Types } from "mongoose";
interface iPost {
  like: [];
  comment: {}[];
  content: string;
  image: string;
  user: {};
  userID: string;
}
interface iPostData extends iPost, Document {}
const postModel = new Schema<iPostData>(
  {
    userID: { type: String },
    content: { type: String },
    comment: [{ type: Types.ObjectId }],
    like: { type: [] },
    image: { type: String },
    user: { type: Types.ObjectId },
  },
  { timestamps: true }
);
const myPostModel = models.posts || model<iPostData>("posts", postModel);
export default myPostModel;
