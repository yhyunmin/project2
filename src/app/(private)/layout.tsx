import { Props } from '@/types';
import styles from '@/app/(private)/layout.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/assets/logo.png';
import { NavMenu } from './_component/NavMenu';
import { Logout } from './_component/Logout';
import { NotifySection } from './_component/NotifySection';
import { StepOutSection } from './_component/StepOutSection';
import RightSearchZone from './_component/RightSearchZone';
import { auth } from '@/auth';
// flex-grow: 1
// 어드민페이지 main 레이아웃 잡기
const PrivateLayout = async ({ children, modal }: Props) => {
  const session = await auth();
  return (
    <div className={styles.container}>
      <header className={styles.leftSectionWrapper}>
        <section className={styles.leftSection}>
          <div className={styles.leftSectionFixed}>
            <Link
              className={styles.logo}
              href='/main'>
              <div className={styles.logoPill}>
                <Image
                  src={Logo}
                  alt='gym logo'
                  width={48}
                  height={48}
                />
              </div>
            </Link>
            {session?.user && (
              <nav>
                <ul>
                  <NavMenu />
                </ul>
                <Link
                  href='/compose/threads'
                  className={styles.postBtn}>
                  <span>작성하기</span>
                  <div>SVG 아이콘</div>
                </Link>
              </nav>
            )}
            <Logout />
          </div>
        </section>
      </header>
      <div className={styles.rightSectionWrapper}>
        <div className={styles.rightSectionInner}>
          <main className={styles.main}>{children}</main>
          <section className={styles.rightSection}>
            <RightSearchZone />
            <NotifySection />
            <StepOutSection />
          </section>
        </div>
      </div>
      {modal}
    </div>
  );
};

export default PrivateLayout;
