import React from 'react';
import styles from './Notify.module.css';
export const Notify = () => {
  return (
    <div className={styles.notifyContainer}>
      <p>
        0101월 안내사항
        <span>2024.01.01</span>
      </p>
      <p>rightSection 입니다.</p>
      <p>블라블라</p>
      <span>자세히보기</span>
    </div>
  );
};
