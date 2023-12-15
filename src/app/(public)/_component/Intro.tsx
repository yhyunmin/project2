import Link from 'next/link';
import styles from './intro.module.css';
import Logo from '@/assets/logo.png';
import Image from 'next/image';
//vanila extract ? 하기 ?
export default function Intro() {
  return (
    <main className={styles.container}>
      <div className={styles.center}>
        <Image
          src={Logo}
          alt='logo'
          width={128}
          height={128}
          placeholder='blur'
          quality={75}
          priority={true}
          className={styles.logo}
        />
        <h1>Windjammer Gym</h1>
        <p>윈드재머 짐 회원관리 페이지</p>
        <Link href='/login' className={`${styles.btn} ${styles.login}`}>
          로그인
        </Link>
        <hr />
        <Link href='/signup' className={`${styles.btn} ${styles.signup}`}>
          계정생성
        </Link>
        {/* 페이지 라우팅 */}
        {/* redirect(); */}
      </div>
    </main>
  );
}
