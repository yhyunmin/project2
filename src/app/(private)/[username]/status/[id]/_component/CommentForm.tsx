'use client';
import { useRef, useState } from 'react';
import styles from './commentForm.module.css';
const CommentForm = () => {
  const [content, setContent] = useState('');
  const imageRef = useRef<HTMLInputElement>(null);
  const onClickButton = () => {};
  const onSubmit = () => {};
  const onChange = () => {};
  const me = {
    id: 'me',
    image: 'https://picsum.photos/200/300',
  };
  return (
    <form
      className={styles.postForm}
      onSubmit={onSubmit}>
      <div className={styles.postUserSection}>
        <div>
          <img
            src={me.image}
            alt={me.id}
          />
        </div>
      </div>
      <div className={styles.postInputSection}>
        <textarea
          value={content}
          onChange={onChange}
          placeholder='답글 게시하기 '
        />
        <div className={styles.postButtonSection}>
          <div className={styles.footerButtons}>
            <div className={styles.footerButtonLeft}>
              <input
                type='file'
                name='imageFiles'
                multiple
                hidden
                ref={imageRef}
              />
              <button
                className={styles.uploadButton}
                onClick={onClickButton}>
                업로드이미지
              </button>
            </div>
            <button
              className={styles.actionButtons}
              disabled={!content}>
              답글
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CommentForm;
