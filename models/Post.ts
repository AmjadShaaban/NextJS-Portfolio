import mongoose, { Schema } from 'mongoose';
import { IPost } from '../interfaces/';

const PostSchema = new Schema(
  {
    title: { type: String, required: true, unique: true },
    body: { type: String, required: true },
    img: { type: String },
    imgText: { type: String },
    repoLink: { type: String },
    hostedLink: { type: String }
  },
  { timestamps: true }
);

export default mongoose.models.Post ||
  mongoose.model<IPost>('Post', PostSchema);
