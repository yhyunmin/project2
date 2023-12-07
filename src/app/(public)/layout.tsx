import { Props } from '@/types';
import styles from '@/app/page.module.css';
export default function Layout({ children, modal }: Props) {
  return (
    <div className={styles.container}>
      {children}
      {modal}
    </div>
  );
}

// children - page.tsx
// modal - @modal/defaul.tsx

// /login - children ->login.tsx, modal ->@modal/login.tsx
