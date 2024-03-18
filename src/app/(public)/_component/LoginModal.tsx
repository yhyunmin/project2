// parallels route
// usestate client Component에서 동작함 , but 서버컴포넌트에서 작성함 서버컴포넌트에서는 hooks사용못함

// client Component 바꾸는법 ;
'use client';
//
// (.)login : 도메인 /login 일시 login 컴포넌트 대신 인터셉트 컴포넌트가 보이게됨.
// 현재 인터셉트 컴포넌트는 모달 컴포넌트이기에.public 컴포넌트와 동시에보여주게됨.
import { ChangeEventHandler, FormEventHandler, useState } from 'react';
import styles from '@/app/(public)/_component/login.module.css';
import { useRouter } from 'next/navigation';
// 클라이언트 컴포넌트에선 next-auth/react , 서버컴포넌트에선 auth.ts
import { signIn } from 'next-auth/react';
export default function LoginModal() {
  const router = useRouter();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit: FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault();
    setMessage('');
    try {
      await signIn('credentials', {
        username: id,
        password,
        // 클라이언트에서 리다이렉트를 이용해야해서 false
        redirect: false,
      });
      router.replace('/main');
    } catch (e) {
      console.log(e);
      setMessage('아이디와 비밀번호가 틀렸습니다.');
    }
  };
  const onClickClose = (): void => {
    router.back();
  };
  const onChangeId: ChangeEventHandler<HTMLInputElement> = (e): void => {
    setId(e.target.value);
  };
  const onChangePassword: ChangeEventHandler<HTMLInputElement> = (e): void => {
    setPassword(e.target.value);
  };
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
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
          <h2>로그인 하세요.</h2>
        </div>
        <form onSubmit={onSubmit}>
          <div className={styles.modalBody}>
            <div className={styles.inputDiv}>
              <label
                htmlFor='hmLoginId'
                className={styles.inputLabel}>
                아이디
              </label>
              <input
                type='text '
                id='hmLoginId'
                value={id}
                onChange={onChangeId}
                placeholder='아이디'
                className={styles.input}
              />
            </div>
            <div className={styles.inputDiv}>
              <label
                htmlFor='hmloginPassword'
                className={styles.inputLabel}>
                비밀번호
              </label>
              <input
                type='password'
                id='hmloginPassword'
                value={password}
                placeholder='비밀번호'
                onChange={onChangePassword}
                className={styles.input}
              />
            </div>
            <div className={styles.inputDiv}>
              <button className={styles.actionBtn}>로그인하기</button>
            </div>
          </div>
          <div className={styles.message}>{message}</div>
        </form>
      </div>
    </div>
  );
}
