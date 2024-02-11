'use client';
import styles from './Post.module.css';
import cx from 'classnames';

const ActionButtons = () => {
  const onClickComment = () => {};
  const onClickRepost = () => {};
  const onClickHeart = () => {};
  const commented = false;
  const reposted = true;
  const liked = true;
  return (
    <div className={styles.actionButtons}>
      <div
        className={cx(styles.commentButton, { [styles.commented]: commented })}>
        <button onClick={onClickComment}>말풍선아이콘</button>
        <div className={styles.count}>{0 || ''}</div>
      </div>
      <div className={cx(styles.repostButton, reposted && styles.reposted)}>
        <button onClick={onClickRepost}>리포스트아이콘</button>
        <div className={styles.count}>{1 || ''}</div>
      </div>
      <div className={cx([styles.heartButton, liked && styles.liked])}>
        <button onClick={onClickHeart}>좋아요 아이콘</button>
        <div className={styles.count}>{2 || ''}</div>
      </div>
    </div>
  );
};

export default ActionButtons;
