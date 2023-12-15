'use client';
import { useRouter } from 'next/navigation';
import { ChangeEventHandler, FormEventHandler, useState } from 'react';
import styles from './signup.module.css';
export default function SingupModal() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const [image, setImage] = useState('');
  const [imageFile, setImageFile] = useState<File>();

  const router = useRouter();

  const onClickClose = () => {
    router.back();
  };

  const onChangeId: ChangeEventHandler<HTMLInputElement> = e => {
    setId(e.target.value);
  };
  const onChangePassword: ChangeEventHandler<HTMLInputElement> = e => {
    setPassword(e.target.value);
  };
  const onChangeNickname: ChangeEventHandler<HTMLInputElement> = e => {
    setNickname(e.target.value);
  };
  const onChangeImageFile: ChangeEventHandler<HTMLInputElement> = e => {
    e.target.files && setImageFile(e.target.files[0]);
  };
  const onSubmit = (): void => {};
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <button className={styles.closeBtn} onClick={() => onClickClose()}>
            <svg width={24} viewBox='0 0 24 24' aria-hidden='true'>
              <g>
                <path d='M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z'></path>
              </g>
            </svg>
          </button>
          <h2>회원가입</h2>
          <p>계정을 생성하세요</p>
          <form onSubmit={onSubmit}>
            <div className={styles.modalBody}>
              <div className={styles.inputDiv}>
                <label htmlFor='hmSignupId' className={styles.inputLabel}>
                  아이디
                </label>
                <input
                  type='text'
                  id='hmSignupId'
                  value={id}
                  onChange={onChangeId}
                  placeholder='아이디'
                  className={styles.input}
                />
              </div>

              <div className={styles.inputDiv}>
                <label htmlFor='hmSignupPassword' className={styles.inputLabel}>
                  비밀번호
                </label>
                <input
                  type='text'
                  placeholder='비밀번호'
                  value={password}
                  onChange={onChangePassword}
                  id='hmSignupPassword'
                  className={styles.input}
                />
              </div>
              <div className={styles.inputDiv}>
                <label htmlFor='hmSignupNickname' className={styles.inputLabel}>
                  닉네임
                </label>
                <input
                  type='text'
                  placeholder='닉네임'
                  value={nickname}
                  onChange={onChangeNickname}
                  id='hmSignupNickname'
                  className={styles.input}
                />
              </div>
              <div className={styles.inputDiv}>
                <label htmlFor='hmSignupImage' className={styles.profileLabel}>
                  프로필 이미지 등록
                </label>
                <input
                  type='file'
                  accept='image/*'
                  placeholder='닉네임'
                  value={image}
                  onChange={onChangeNickname}
                  id='hmSignupImage'
                  className={styles.input}
                />
              </div>
              <div>
                <button className={styles.actionBtn} disabled>
                  가입하기
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
