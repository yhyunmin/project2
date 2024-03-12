import styles from './messages.module.css';
import { Room } from './_component/Room';
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h3>쪽지</h3>
      </div>
      <Room />
    </main>
  );
}
