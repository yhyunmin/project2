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
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <button onClick={() => onClickClose}>창닫기</button>
          <h2>회원가입 모달</h2>
          <p>계정을 생성하세요</p>
          <form action=''>
            <div className={styles.inputDiv}>
              <label htmlFor='id' className={styles.inputLabel}>
                아이디
              </label>
              <input
                type='text'
                placeholder='아이디'
                value={id}
                onChange={onChangeId}
                id='id'
                className={styles.input}
              />
            </div>

            <div className={styles.inputDiv}>
              <label htmlFor='password' className={styles.inputLabel}>
                비밀번호
              </label>
              <input
                type='text'
                placeholder='비밀번호'
                value={password}
                onChange={onChangePassword}
                id='password'
                className={styles.input}
              />
            </div>

            <div>
              <label htmlFor='nickname'>닉네임</label>
              <input
                type='text'
                placeholder='닉네임'
                value={nickname}
                onChange={onChangeNickname}
                id='nickname'
                className={styles.input}
              />
            </div>
            <div>
              <label htmlFor='image'>프로필</label>
              <input
                type='file'
                accept='image/*'
                placeholder='닉네임'
                value={image}
                onChange={onChangeNickname}
                id='image'
                className={styles.input}
              />
            </div>
            <div>
              <button disabled>가입하기 </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
