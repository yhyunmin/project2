'use client';
import { useRouter } from 'next/navigation';
import { ChangeEventHandler, FormEventHandler, useState } from 'react';

export default function SingupModal() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const [image, setImage] = useState('');
  const [imageFile, setImageFile] = useState<File>();

  const router = useRouter();

  const onCLickClose = () => {
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
    <div>
      <h1>회원가입 모달</h1>
      <div>
        <div>
          <div>
            <button onClick={onCLickClose}>창닫기</button>
            <div>계정을 생성하세요</div>
            <form action=''>
              <div>
                <label htmlFor='id'>아이디</label>
                <input
                  type='text'
                  placeholder='아이디'
                  value={id}
                  onChange={onChangeId}
                  id='id'
                />
              </div>

              <div>
                <label htmlFor='password'>비밀번호</label>
                <input
                  type='text'
                  placeholder='비밀번호'
                  value={password}
                  onChange={onChangePassword}
                  id='password'
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
                />
              </div>
              <div>
                <button disabled>가입하기 </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
