import Link from 'next/link';
import styles from './intro.module.css';
//vanila extract ? 하기 ?
export default function Intro() {
  return (
    <main className={styles.container}>
      <div className={styles.center}>
        <h1>타이틀</h1>
        <h2>로그인하세요</h2>
        <Link href='/login' className={`${styles.btn} ${styles.login}`}>
          로그인
        </Link>
        <h3>or</h3>
        <Link href='/login' className={`${styles.btn} ${styles.signup}`}>
          계정 만들기
        </Link>
        {/* 페이지 라우팅 */}
        {/* redirect(); */}
      </div>
    </main>
  );
}
