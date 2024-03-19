import React from 'react';
import styles from './Post.module.css';
import Link from 'next/link';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';
import ActionButtons from './ActionButtons';
import PostArticle from './PostArticle';
import { faker } from '@faker-js/faker';
import PostImages from './PostImages';
import { Post } from '@/models/Post';
dayjs.locale('ko');
dayjs.extend(relativeTime);

type Props = {
  noImage?: boolean;
  post: Post;
};
const Post = ({ noImage, post }: Props) => {
  const target = post;
  //  {
  //   postId: 1,
  //   User: {
  //     id: 'userId',
  //     nickname: 'nickname',
  //     img: 'https://picsum.photos/200/300',
  //   },
  //   Content: 'Post 입니다. ',
  //   CreateAt: new Date(),
  //   Imgs: [
  //     { imageId: 1, link: faker.image.urlLoremFlickr() },
  //     { imageId: 2, link: faker.image.urlLoremFlickr() },
  //     { imageId: 3, link: faker.image.urlLoremFlickr() },
  //     { imageId: 4, link: faker.image.urlLoremFlickr() },
  //   ],
  // };
  if (Math.random() > 0.5) {
    target.Imgs.push({ imageId: 2, link: faker.image.urlLoremFlickr() });
  }
  return (
    <PostArticle post={target}>
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
          <div>
            <PostImages post={target} />
          </div>
        </div>
        <ActionButtons />
      </div>
    </PostArticle>
  );
};

export default Post;
