'use client';
import React from 'react';
import styles from './Logout.module.css';
import Image from 'next/image';

interface profileProps {
  name: string;
  id: string;
  image: string;
}
const onLogout = (): void => {};
const me: profileProps = {
  name: '이름',
  id: '아이디',
  image: '/profile.png',
};
export const Logout = () => {
  return (
    <button className={styles.logOutBtn} onClick={onLogout}>
      <div className={styles.logOutUserImage}>
        <Image src='{me.image}' alt='{me.id}' />
      </div>
      <div className={styles.logOutUserName}>
        <div>{me.name}</div>
        <div>{me.id}</div>
      </div>
    </button>
  );
};
