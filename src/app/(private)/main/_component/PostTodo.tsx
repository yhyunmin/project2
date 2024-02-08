'use client';
import React, {
  ChangeEvent,
  ChangeEventHandler,
  FormEventHandler,
  useState,
} from 'react';

import styles from './PostTodo.module.css';
export const PostTodo = () => {
  const imgRef = React.useRef<HTMLInputElement>(null);
  const [content, setContent] = useState('');
  const me: { id: string; img: string } = {
    id: '1',
    img: 'https://picsum.photos/200/300',
  };
  const onChange: ChangeEventHandler<HTMLInputElement> = (
    e: ChangeEvent<HTMLInputElement>
  ): void => {
    setContent(e.target.value);
  };
  const onSubmit: FormEventHandler = (e): void => {
    e.preventDefault();
  };
  const onClickBtn = () => {
    imgRef.current?.click();
  };
  return (
    <div>
      <form
        className={styles.postForm}
        onSubmit={onSubmit}>
        <div>
          <div className={styles.postUserImage}>
            <img
              src={me.img}
              alt={me.id}
            />
          </div>
        </div>
        <div className={styles.postInputSection}>
          <input
            type='text'
            value={content}
            onChange={onChange}
            placeholder='일정 추가하기'
          />
          <div className={styles.postBtnSection}>
            <div className={styles.footerBtns}>
              <div className={styles.footerBtnLeft}>
                <button
                  className={styles.selectDateBtn}
                  onClick={onClickBtn}>
                  달력 아이콘
                </button>
              </div>
              <button className={styles.actionBtn}>추가하기</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
