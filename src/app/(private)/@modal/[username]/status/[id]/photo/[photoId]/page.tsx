import ActionButtons from '@/app/(private)/main/_component/ActionButtons';
import style from './photoModal.module.css';
import { faker } from '@faker-js/faker';
import CommentForm from '@/app/(private)/[username]/status/[id]/_component/CommentForm';
import Post from '@/app/(private)/main/_component/Post';
import PhotoModalCloseButton from './_component/PhotoModalCloseButton';

export default function Default() {
  const photo = {
    imageId: 1,
    link: faker.image.urlLoremFlickr(),
    Post: {
      content: faker.lorem.text(),
    },
  };
  return (
    <div className={style.container}>
      <PhotoModalCloseButton />
      <div className={style.imageZone}>
        <img
          src={photo.link}
          alt={photo.Post?.content}
        />
        <div
          className={style.image}
          style={{ backgroundImage: `url(${photo.link})` }}
        />
        <div className={style.buttonZone}>
          <div className={style.buttonInner}>
            <ActionButtons white />
          </div>
        </div>
      </div>
      <div className={style.commentZone}>
        <Post noImage />
        <CommentForm />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}
