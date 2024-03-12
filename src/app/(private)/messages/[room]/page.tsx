import { faker } from '@faker-js/faker';
import styles from './chatRoom.module.css';
import Link from 'next/link';
export default function ChatRoom() {
  const user = {
    id: 'userId',
    nickname: 'userNickname',
    image: faker.image.avatar(),
  };
  const messages = [
    {
      messageId: 1,
      roomId: 123,
      id: 'me',
      content: '하이',
      createdAt: new Date(),
    },
    {
      messageId: 2,
      roomId: 123,
      id: 'you',
      content: '바이2',
      createdAt: new Date(),
    },
  ];
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <Link
          href={user.nickname}
          className={styles.userInfo}>
          <img
            src={user.image}
            alt={user.id}
          />
          <div>@{user.id}</div>
        </Link>
        <div className={styles.list}>
          {messages.map(m => {
            if (m.id === 'me') {
              return (
                <div
                  key={m.messageId}
                  className={styles.myMessage}>
                  {m.content}
                </div>
              );
            }
            return (
              <div
                key={m.messageId}
                className={styles.yourMessage}>
                {m.content}
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
