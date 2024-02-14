'use client';

import { useRef, useState } from 'react';
import styles from './modal.module.css';
const ThreadsModal = () => {
  const me = {
    id: 'admin',
    image: 'https://picsum.photos/200/300',
  };

  const [content, setContent] = useState('');
  const imgRef = useRef<HTMLInputElement>(null);
  const onClick = () => {};
  const onSubmit = () => {};
  const onChangeContent = () => {};
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modal}>
        <button
          className={styles.closeButton}
          onClick={onClick}></button>
        <form
          className={styles.modalForm}
          onSubmit={onSubmit}>
          <div className={styles.modalBody}>
            <div className={styles.postUserSection}>
              <div className={styles.postUserImage}>
                <img
                  src={me.image}
                  alt={me.id}
                />
              </div>
            </div>
            <div className={styles.inputDiv}>
              <textarea
                className={styles.input}
                placeholder='content'
                value={content}
                onChange={onChangeContent}></textarea>
            </div>
          </div>
          <div className={styles.modalFooter}>
            <div className={styles.modalDivider} />
            <div className={styles.footerButtons}>
              <div className={styles.footerButtonLeft}>
                <input
                  type='file'
                  name='imgFiles'
                  multiple
                  ref={imgRef}
                />
                <button
                  className={styles.uploadButton}
                  type='button'
                  disabled={!content}>
                  게시하기
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ThreadsModal;
