import { Props } from '@/types';
import styles from '@/app/(private)/layout.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/assets/logo.png';
import { NavMenu } from './_component/NavMenu';
import { Logout } from './_component/Logout';
import { Notify } from './_component/Notify';
import { StepOut } from './_component/Stepout';
// flex-grow: 1
// 어드민페이지 main 레이아웃 잡기
const PrivateLayout = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      <header className={styles.leftSectionWrapper}>
        <section className={styles.leftSection}>
          <div className={styles.leftSectionFixed}>
            <Link className={styles.logo} href='/main'>
              <div className={styles.logoPill}>
                <Image src={Logo} alt='gym logo' width={48} height={48} />
              </div>
            </Link>
            <nav>
              <ul>
                <NavMenu />
              </ul>
              <Link href='/compose/threads'>글쓰기</Link>
            </nav>
            <Logout />
          </div>
        </section>
      </header>
      <div className={styles.rightSectionWrapper}>
        <div className={styles.rightSectionInner}>
          <main className={styles.main}>{children}</main>
          <section className={styles.rightSection}>
            <form action='' className={styles.search}>
              <input type='search' />
            </form>
            <Notify />
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivateLayout;
