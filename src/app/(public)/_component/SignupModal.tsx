// 'use client';
// 서버컴포넌트에서의 서버 액션
import { ChangeEventHandler, FormEventHandler, useState } from 'react';
import styles from './signup.module.css';
import BackBtn from './BackBtn';
import { redirect } from 'next/navigation';
import { signIn } from '@/auth';
export default function SingupModal() {
  // const [id, setId] = useState('');
  // const [password, setPassword] = useState('');
  // const [nickname, setNickname] = useState('');
  // const [image, setImage] = useState('');
  // const [imageFile, setImageFile] = useState<File>();

  // const onChangeId: ChangeEventHandler<HTMLInputElement> = e => {
  //   setId(e.target.value);
  // };
  // const onChangePassword: ChangeEventHandler<HTMLInputElement> = e => {
  //   setPassword(e.target.value);
  // };
  // const onChangeNickname: ChangeEventHandler<HTMLInputElement> = e => {
  //   setNickname(e.target.value);
  // };
  // const onChangeImageFile: ChangeEventHandler<HTMLInputElement> = e => {
  //   e.target.files && setImageFile(e.target.files[0]);
  // };
  // const onSubmit = (): void => {};

  const submit = async (formData: FormData) => {
    // formData.get('id');
    'use server';
    // form validation 검증 코드
    if (!formData.get('id')) {
      return { message: 'no_id' };
    }
    if (!formData.get('password')) {
      return { message: 'no_password' };
    }
    if (!formData.get('nickname')) {
      return { message: 'no_nickname' };
    }
    if (!formData.get('image')) {
      return { message: 'no_image' };
    }
    // try catch 안에서 redirect X 를위한 flag 변수
    let shouldRedirect = false;
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/users}`,
        {
          method: 'post',
          body: formData,
          // credentials: 쿠키
          credentials: 'include',
        }
      );
      console.log(response.status);
      // 서버 status 에 따른 분기 작성
      if (response.status === 403) {
        return { message: 'user_exists' };
      }

      console.log(await response.json());
      shouldRedirect = true;
      await signIn('credentials', {
        username: formData.get('id'),
        password: formData.get('password'),
        redirect: false,
      });
    } catch (err) {
      console.log(err);
      return;
    }
    if (shouldRedirect) {
      redirect('/main');
    }
  };
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <BackBtn />
          <h2>회원가입</h2>
          <p>계정을 생성하세요</p>
          <form action={submit}>
            <div className={styles.modalBody}>
              <div className={styles.inputDiv}>
                <label
                  htmlFor='hmSignupId'
                  className={styles.inputLabel}>
                  아이디
                </label>
                <input
                  type='text'
                  id='hmSignupId'
                  name='id'
                  placeholder='아이디'
                  className={styles.input}
                  required
                />
              </div>

              <div className={styles.inputDiv}>
                <label
                  htmlFor='hmSignupPassword'
                  className={styles.inputLabel}>
                  비밀번호
                </label>
                <input
                  type='text'
                  placeholder='비밀번호'
                  id='hmSignupPassword'
                  name='password'
                  className={styles.input}
                  required
                />
              </div>
              <div className={styles.inputDiv}>
                <label
                  htmlFor='hmSignupNickname'
                  className={styles.inputLabel}>
                  닉네임
                </label>
                <input
                  type='text'
                  placeholder='닉네임'
                  id='hmSignupNickname'
                  name='nickname'
                  className={styles.input}
                  required
                />
              </div>
              <div className={styles.inputDiv}>
                <label
                  htmlFor='hmSignupImage'
                  className={styles.profileLabel}>
                  프로필 이미지 등록
                </label>
                <input
                  type='file'
                  accept='image/*'
                  placeholder='닉네임'
                  id='hmSignupImage'
                  name='image'
                  className={styles.input}
                  required
                />
              </div>
              <div>
                <button
                  type='submit'
                  className={styles.actionBtn}>
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
