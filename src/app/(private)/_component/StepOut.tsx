'use client';
import styles from './StepOut.module.css';
export const StepOut = () => {
  const onSendMessage = () => {};

  const user = {
    id: 1,
    image: '',
    name: '김땡땡',
    date: '2024-01-01',
    reason: '병가',
  };
  return (
    <div>
      <div>
        <div className={styles.container}>
          <div className={styles.userLogoSection}>
            <div className={styles.userLogo}>
              <img
                src={user.image}
                alt={user.name}
              />
            </div>
          </div>
          <div className={styles.userInfo}>
            <div className={styles.stepOutName}>{user.name}</div>
            <div className={styles.stepOutDate}>{user.date}</div>
            <div className={styles.steOutReason}>{user.reason}</div>
          </div>
          <div className={styles.sendMessage}>
            <button onClick={onSendMessage}>메시지 보내기 </button>
          </div>
        </div>
      </div>
    </div>
  );
};
