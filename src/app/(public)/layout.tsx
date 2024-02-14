// intro page layout
import { Props } from '@/types';
import styles from './layout.module.css';
export default function Layout({ children, modal }: Props) {
  return (
    <div className={styles.container}>
      {children}
      {modal}
    </div>
  );
}

// children - page.tsx
// modal - @modal/default.tsx

// /login - children ->login.tsx, modal ->@modal/login.tsx
