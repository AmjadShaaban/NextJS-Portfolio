import { Document } from 'mongoose';

export interface IPost extends Document {
  id: number;
  title: string;
  body: string;
  img?: string;
  imgText?: string;
  repoLink?: string;
  hostedLink?: string;
}

export interface HeaderSection {
  title: string;
  url: string;
}
