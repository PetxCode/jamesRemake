import { Document, model, models, Schema, Types } from "mongoose";
interface iComments {
  reply: string;
  post: {};
  user: {};
}
interface iCommentsData extends iComments, Document {}
const commentModel = new Schema<iCommentsData>(
  {
    reply: { type: String },
    post: { type: Types.ObjectId, ref: "posts" },
    user: { type: Types.ObjectId, ref: "users" },
  },
  { timestamps: true }
);

const myCommentModel =
  models.comments || model<iCommentsData>("comments", commentModel);

export default myCommentModel;
