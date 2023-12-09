import { Props } from '@/types';
import styles from '@/app/layout.module.css';

// flex-grow: 1
const PrivateLayout = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      <header className={styles.leftSectionWrapper}>
        <section className={styles.leftSection}></section>
      </header>
      <div className={styles.rightSectionWrapper}>
        <div className={styles.rightSectionInnter}>
          <main className={styles.main}>{children}</main>
          <section className={styles.rightSection}>
            <form action=''>
              <input type='search' />
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivateLayout;
