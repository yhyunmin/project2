import React from 'react';
import styles from './Post.module.css';
import Link from 'next/link';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';
dayjs.locale('ko');
dayjs.extend(relativeTime);
const Post = () => {
  const target = {
    User: {
      id: '',
      nickname: 'nickname',
      img: '',
    },
    Content: 'contentString',
    CreateAt: new Date(),
    Imgs: [],
  };
  return (
    <article className={styles.post}>
      <div className={styles.postWrapper}>
        <div className={styles.postUserSection}>
          <Link
            href={`/${target.User.id}`}
            className={styles.postUserImage}>
            <img
              src={target.User.img}
              alt={target.User.nickname}
            />
          </Link>
          <div className={styles.postShade}></div>
        </div>
        <div className={styles.postBody}>
          <div className={styles.postMeta}>
            <Link href={`/${target.User.id}`}>
              <span className={styles.postUserName}>
                {target.User.nickname}
              </span>
              <span className={styles.postUserId}>{target.User.id}</span>
              <span className={styles.postDate}>
                {dayjs(target.CreateAt).fromNow()}
              </span>
            </Link>
          </div>
          <div>{target.Content}</div>
          <div className={styles.postImgSection}>
            {/* {target.Imgs.length > 8 && (
              <div className={styles.postImageSection}>
                <img
                  src={EventTarget.Imgs[0]?.link}
                  alt=''
                />
              </div>
            )} */}
          </div>
          {/* <ActionButtons post={post} /> */}
        </div>
      </div>
    </article>
  );
};

export default Post;