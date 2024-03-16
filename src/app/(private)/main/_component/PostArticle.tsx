'use client';
import { Props } from '@/types';
import { ReactNode } from 'react';
import styles from './Post.module.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
type PostProps = {
  children: ReactNode;
  post: {
    postId: number;
    User: {
      id: string;
      nickname: string;
      img: string;
    };
    Content: string;
    CreateAt: Date;
    Imgs: any[];
  };
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
