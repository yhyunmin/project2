import React from 'react';
import styles from './Post.module.css';
import Link from 'next/link';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';
import ActionButtons from './ActionButtons';
import PostArticle from './PostArticle';
dayjs.locale('ko');
dayjs.extend(relativeTime);
const Post = () => {
  const post = {
    postId: 1,
    User: {
      id: '',
      nickname: 'nickname',
      img: 'https://picsum.photos/200/300',
    },
    Content: 'Post 입니다. ',
    CreateAt: new Date(),
    Imgs: [
      {imageId:1,link:faker}
    ],
  };
  return (
    <PostArticle post={post}>
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
          <ActionButtons />
        </div>
      </div>
    </PostArticle>
  );
};

export default Post;
