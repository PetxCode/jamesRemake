import { Document, model, models, Schema, Types } from "mongoose";
interface iLikes {
  post: {};
  user: {};
}
interface iLikesData extends iLikes, Document {}
const likeModel = new Schema<iLikesData>(
  {
    post: { type: Types.ObjectId, ref: "posts" },
    user: { type: Types.ObjectId, ref: "users" },
  },
  { timestamps: true }
);

const myLikesModel = models.likes || model<iLikesData>("likes", likeModel);

export default myLikesModel;
