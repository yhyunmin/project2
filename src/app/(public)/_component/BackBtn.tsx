'use client';
import styles from './signup.module.css';
import { useRouter } from 'next/router';

const BackBtn = () => {
  const router = useRouter();
  const onClickClose = () => {
    router.back();
  };
  return (
    <button
      className={styles.closeBtn}
      onClick={() => onClickClose()}>
      <svg
        width={24}
        viewBox='0 0 24 24'
        aria-hidden='true'>
        <g>
          <path d='M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z'></path>
        </g>
      </svg>
    </button>
  );
};

export default BackBtn;
