import Link from 'next/link';
import cx from 'classnames';
import styles from './Post.module.css';
type Props = {
  postId: number;
  Content: string;
  User: {
    id: string;
    nickname: string;
    img: string;
  };

  CreateAt: Date;
  Imgs: any[];
};

const PostImages = ({ post }: { post: Props }) => {
  // 없을때
  if (!post.Imgs) return null;
  //배열이 아닐떄
  if (!post.Imgs.length) return null;
  if (post.Imgs.length === 1) {
    return (
      post.Imgs &&
      post.Imgs.length > 0 && (
        <Link
          className={cx(styles.postImageSection, styles.oneImage)}
          href={`
        /${post.User.id}/status/${post.postId}/photo/${post.Imgs[0].imageId}
        `}
          style={{
            backgroundImage: `url(${post.Imgs[0]?.link})`,
            backgroundSize: 'contain',
          }}>
          <img
            src={post.Imgs[0]?.link}
            alt=''
          />
        </Link>
      )
    );
  }
  if (post.Imgs.length === 2) {
    return (
      post.Imgs &&
      post.Imgs.length > 0 && (
        <div className={cx(styles.postImageSection, styles.twoImage)}>
          <Link
            href={`
          /${post.User.id}/status/${post.postId}/photo/${post.Imgs[0].imageId}
          `}
            style={{
              backgroundImage: `url(${post.Imgs[0]?.link})`,
              backgroundSize: 'cover',
            }}></Link>
          <Link
            href={`
        /${post.User.id}/status/${post.postId}/photo/${post.Imgs[1].imageId}
        `}
            style={{
              backgroundImage: `url(${post.Imgs[1]?.link})`,
              backgroundSize: 'cover',
            }}></Link>
        </div>
      )
    );
  }
  if (post.Imgs.length === 3) {
    return (
      post.Imgs &&
      post.Imgs.length > 0 && (
        <div className={cx(styles.postImageSection, styles.threeImage)}>
          <Link
            href={`
          /${post.User.id}/status/${post.postId}/photo/${post.Imgs[0].imageId}
          `}
            style={{
              backgroundImage: `url(${post.Imgs[0]?.link})`,
              backgroundSize: 'cover',
            }}></Link>
          <div>
            <Link
              href={`
            /${post.User.id}/status/${post.postId}/photo/${post.Imgs[1].imageId}
            `}
              style={{
                backgroundImage: `url(${post.Imgs[1]?.link})`,
                backgroundSize: 'cover',
              }}></Link>
            <Link
              href={`
            /${post.User.id}/status/${post.postId}/photo/${post.Imgs[2].imageId}
            `}
              style={{
                backgroundImage: `url(${post.Imgs[2]?.link})`,
                backgroundSize: 'cover',
              }}></Link>
          </div>
        </div>
      )
    );
  }
  if (post.Imgs.length === 4) {
    return (
      post.Imgs &&
      post.Imgs.length > 0 && (
        <div className={cx(styles.postImageSection, styles.fourImage)}>
          <Link
            href={`
          /${post.User.id}/status/${post.postId}/photo/${post.Imgs[0].imageId}
          `}
            style={{
              backgroundImage: `url(${post.Imgs[0]?.link})`,
              backgroundSize: 'cover',
            }}></Link>
          <Link
            href={`
        /${post.User.id}/status/${post.postId}/photo/${post.Imgs[1].imageId}
        `}
            style={{
              backgroundImage: `url(${post.Imgs[1]?.link})`,
              backgroundSize: 'cover',
            }}></Link>
          <Link
            href={`
        /${post.User.id}/status/${post.postId}/photo/${post.Imgs[2].imageId}
        `}
            style={{
              backgroundImage: `url(${post.Imgs[2]?.link})`,
              backgroundSize: 'cover',
            }}></Link>
          <Link
            href={`
        /${post.User.id}/status/${post.postId}/photo/${post.Imgs[3].imageId}
        `}
            style={{
              backgroundImage: `url(${post.Imgs[3]?.link})`,
              backgroundSize: 'cover',
            }}></Link>
        </div>
      )
    );
  }
  return null;
};

export default PostImages;
