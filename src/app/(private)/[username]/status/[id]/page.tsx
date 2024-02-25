import Image from 'next/image';
import BackButton from '@/app/(private)/_component/BackButton';
import styles from './singlePost.module.css';
import Post from '@/app/(private)/main/_component/Post';
import CommentForm from './_component/CommentForm';
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <BackButton />
        <h3 className={styles.headerTitle}>게시하기</h3>
      </div>
      <Post />
      <CommentForm />
      <div>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </main>
  );
}
