'use client';
// 클라이언트 컴포넌트에서의 서버 액션
import styles from './signup.module.css';
import BackBtn from './BackBtn';
import onSubmit from '../_lib/signup';
import { useFormState, useFormStatus } from 'react-dom';
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

  // 클라이언트 컴포넌트에서 서버액션을 사용하기위해 useFormState(), useFormStatus() 를 사용한다
  // form 에서 state를 쓸수있는 useFormState(
  // 데이터 폼이 서버에서 어떤상황인지 알 수 있는 useFormStatus();
  //
  //pending일 동안 로딩창, disabled처리 가능
  const { pending } = useFormStatus();
  // 첫번째 인자 서버액션 두번째 인자 초기값
  const [state, formAction] = useFormState(onSubmit, {
    message: null,
  });
  const showMessage = (message: string) => {
    if (message === 'no_id') {
      return '아이디를 입력해주세요.';
    }
    if (message === 'no_password') {
      return '비밀번호를 입력해주세요.';
    }
    if (message === 'no_nickname') {
      return '닉네임를 입력해주세요.';
    }
    if (message === 'no_image') {
      return '이미지를 업로드하세요.';
    }
    if (message === 'user_exists') {
      return '이미 사용중인 아이디입니다.';
    }
    return '';
  };
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <BackBtn />
          <h2>회원가입</h2>
          <p>계정을 생성하세요</p>
          <form action={formAction}>
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
                  className={styles.actionBtn}
                  disabled={pending}>
                  가입하기
                </button>
                {/* state 활용을 위해 에러메세지 출력 엘리먼트 */}
                {/* <div className={styles.error}>{state?.message}</div> */}
                {/* 에러메시지 가공 */}
                <div className={styles.error}>
                  {showMessage(state?.message)}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
