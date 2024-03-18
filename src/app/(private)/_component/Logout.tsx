'use client';
import React from 'react';
import styles from './Logout.module.css';
import Image from 'next/image';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

interface profileProps {
  name: string;
  id: string;
  image: string;
}
// const me: profileProps = {
//   name: '이름',
//   id: '아이디',
//   image: '/profile.png',
// };
export const Logout = () => {
  const router = useRouter();
  // 클라이언트에서만 사용하는 유저 데이터 가져오는 useSession();
  const { data: me } = useSession();
  const onLogout = async () => {
    await signOut({ redirect: false });
    router.replace('/');
  };

  if (!me?.user) {
    return null;
  }
  return (
    <button
      className={styles.logOutBtn}
      onClick={onLogout}>
      <div className={styles.logOutUserImage}>
        <Image
          src={me.user?.image as string}
          alt='{me.id}'
          width={48}
          height={48}
        />
      </div>
      <div className={styles.logOutUserName}>
        <div>{me.user?.name}</div>
        <div>{me.user?.email}</div>
      </div>
    </button>
  );
};
