'use client';
import React, { useState } from 'react';
import styles from './Tab.module.css';

export const Tab = () => {
  const [tab, setTab] = useState('daily');

  const onClickDaily = () => {
    setTab('daily');
  };
  const onClickWeekly = () => {
    setTab('weekly');
  };
  return (
    <div className={styles.homeFixed}>
      <div className={styles.homeText}>대시보드</div>
      <div className={styles.homeTab}>
        <div onClick={onClickDaily}>
          일간
          <div
            className={styles.tabIndicator}
            hidden={tab === 'weekly'}></div>
        </div>
        <div onClick={onClickWeekly}>
          주간
          <div
            className={styles.tabIndicator}
            hidden={tab === 'daily'}></div>
        </div>
      </div>
    </div>
  );
};
