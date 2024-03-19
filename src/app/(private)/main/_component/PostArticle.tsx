'use client';
import { Props } from '@/types';
import { ReactNode } from 'react';
import styles from './Post.module.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Post } from '@/models/Post';
type PostProps = {
  children: ReactNode;
  post:Post;
};

const PostArticle = ({ children, post }: PostProps) => {
  const router = useRouter();
  const onClick = () => {
    router.push(`/${post.User.id}/status/${post.postId}`);
  };
  return (
    <article
      onClickCapture={onClick}
      className={styles.post}>
      {children}
    </article>
  );
};

export default PostArticle;
