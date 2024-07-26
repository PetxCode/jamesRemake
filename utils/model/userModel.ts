import { Document, model, models, Schema, Types } from "mongoose";
interface iUser {
  name: string;
  email: string;
  password: string;
  profession: string;
  avatar: string;
  avatarID: string;
  post: {}[];
}
interface iUserData extends iUser, Document {}
const userModel = new Schema<iUserData>(
  {
    name: { type: String },
    profession: { type: String },
    email: { type: String },
    password: { type: String },
    avatar: { type: String },
    avatarID: { type: String },
    post: { type: [{ type: Types.ObjectId, ref: "posts" }] },
  },
  { timestamps: true }
);
const myUserModel = models.users || model<iUserData>("users", userModel);
export default myUserModel;
