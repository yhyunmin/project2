// parallels route
// usestate client Component에서 동작함 , but 서버컴포넌트에서 작성함 서버컴포넌트에서는 hooks사용못함

// client Component 바꾸는법 ;
'use client';
//
// (.)login : 도메인 /login 일시 login 컴포넌트 대신 인터셉트 컴포넌트가 보이게됨.
// 현재 인터셉트 컴포넌트는 모달 컴포넌트이기에.public 컴포넌트와 동시에보여주게됨.
import { useState } from 'react';
import styles from '@/app/(public)/_component/login.module.css';
export default function LoginModal() {
  const [id, setId] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState();

  const onSubmit = (): void => {};
  const onCLickClose = (): void => {};
  const onChangeId = (e: React.ChangeEvent<HTMLInputElement>): void => {};
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>): void => {};
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <button className={styles.closeBtn}>x</button>
          <div>로그인하세요.</div>
        </div>
        <form onSubmit={onSubmit}>
          <div className={styles.modalBody}>
            <div className={styles.inputDiv}>
              <label htmlFor='id'>아이디</label>
              <input
                type='text '
                id='id'
                value={id}
                onChange={onChangeId}
                placeholder=''
              />
            </div>
            <div className={styles.inputDiv}>
              <label htmlFor='password'>비밀번호</label>
              <input
                type='password'
                id='password'
                value={password}
                onChange={onChangePassword}
              />
            </div>
          </div>
          <div className={styles.message}>{message}</div>
          <div className={styles.modalFooter}>
            <button className={styles.actionBtn} disabled={!id && !password}>
              로그인하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
