'use client';

import { faker } from '@faker-js/faker';
import styles from './messages.module.css';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useRouter } from 'next/router';

dayjs.locale('ko');
dayjs.extend(relativeTime);

export function Room() {
  const router = useRouter();
  const user = {
    id: 'userId',
    nickname: 'userNickname',
    // Join한 Column들은 대문자로옴 ( 다른 db와 합친것들 )
    Messages: [
      {
        roomId: 123,
        content: '안녕하세요',
        createdAt: new Date(),
      },
      {
        content: '하위2',
        createdAt: new Date(),
      },
    ],
  };
  const onClick = () => {
    router.push(`/messages/${user.Messages.at(-1)?.roomId}`);
  };
  return (
    <div className={styles.room}>
      <div className={styles.roomUserImage}>
        <img
          src={faker.image.avatar()}
          alt=''
        />
      </div>
      <div className={styles.roomChatInfo}>
        <div className={styles.roomUserInfo}>
          <b>{user.nickname}</b>
          &nbsp;
          <span>@{user.id}</span>
          &nbsp; . &nbsp;
          <span className={styles.postDate}>
            {dayjs(user.Messages?.at(-1)?.createdAt).fromNow(true)}
          </span>
        </div>
        <div className={styles.roomLastChat}>
          {user.Messages?.at(-1)?.content}
        </div>
      </div>
    </div>
  );
}
