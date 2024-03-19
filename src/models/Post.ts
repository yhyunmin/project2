import { PostImages } from './PostImage';
import { User } from './User';

export interface Post {
  postId: number;
  User: User;
  content: string;
  createAt: Date;
  Images: PostImages[];
}
