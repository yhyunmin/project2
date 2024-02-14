'use client';
import React, { useState } from 'react';
import styles from './Tab.module.css';
import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation';

export const Tab = () => {
  const [current, setCurrent] = useState('daily');
  const router = useRouter();
  const searchParams = useSearchParams();
  const onClickDaily = () => {
    setCurrent('daily');
    router.replace(`/search?q=${searchParams.get('q') || ''}&f=${current}`);
  };
  const onClickWeekly = () => {
    setCurrent('weekly');
    router.replace(`/search?q=${searchParams.toString()}&f=${current}`);
  };
  return (
    <div className={styles.homeFixed}>
      <div className={styles.homeText}>대시보드</div>
      <div className={styles.homeTab}>
        <div onClick={onClickDaily}>
          일간
          <div
            className={styles.tabIndicator}
            hidden={current === 'weekly'}></div>
        </div>
        <div onClick={onClickWeekly}>
          주간
          <div
            className={styles.tabIndicator}
            hidden={current === 'daily'}></div>
        </div>
      </div>
    </div>
  );
};
