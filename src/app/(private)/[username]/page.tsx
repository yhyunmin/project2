import Post from '../main/_component/Post';
import BackButton from './../_component/BackButton';
import styles from './profile.module.css';
export default function Profile() {
  const onFollow = () => {};
  const user = {
    id: '0101월',
    nickname: '뒤로가기',
    image: 'https://picsum.photos/200/300',
  };
  return (
    <main>
      <div>
        <BackButton />
        <h3>{user.nickname}</h3>
      </div>
      <div className={styles.userZone}>
        <div className={styles.userImage}>
          <img
            src={user.image}
            alt={user.id}
          />
        </div>
        <div className={styles.username}>
          <div>{user.nickname}</div>
          <div>@{user.id}</div>
        </div>
        <button className={styles.followButton}>팔로우</button>
      </div>
      <div>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </main>
  );
}
