import Link from 'next/link';
import cx from 'classnames';
import styles from './Post.module.css';
import { Post } from '@/models/Post';

const PostImages = ({ post }: { post: Post }) => {
  // 없을때
  if (!post.Images) return null;
  //배열이 아닐떄
  if (!post.Images.length) return null;
  if (post.Images.length === 1) {
    return (
      post.Images &&
      post.Images.length > 0 && (
        <Link
          className={cx(styles.postImageSection, styles.oneImage)}
          href={`
        /${post.User.id}/status/${post.postId}/photo/${post.Images[0].imageId}
        `}
          style={{
            backgroundImage: `url(${post.Images[0]?.link})`,
            backgroundSize: 'contain',
          }}>
          <img
            src={post.Images[0]?.link}
            alt=''
          />
        </Link>
      )
    );
  }
  if (post.Images.length === 2) {
    return (
      post.Images &&
      post.Images.length > 0 && (
        <div className={cx(styles.postImageSection, styles.twoImage)}>
          <Link
            href={`
          /${post.User.id}/status/${post.postId}/photo/${post.Images[0].imageId}
          `}
            style={{
              backgroundImage: `url(${post.Images[0]?.link})`,
              backgroundSize: 'cover',
            }}></Link>
          <Link
            href={`
        /${post.User.id}/status/${post.postId}/photo/${post.Images[1].imageId}
        `}
            style={{
              backgroundImage: `url(${post.Images[1]?.link})`,
              backgroundSize: 'cover',
            }}></Link>
        </div>
      )
    );
  }
  if (post.Images.length === 3) {
    return (
      post.Images &&
      post.Images.length > 0 && (
        <div className={cx(styles.postImageSection, styles.threeImage)}>
          <Link
            href={`
          /${post.User.id}/status/${post.postId}/photo/${post.Images[0].imageId}
          `}
            style={{
              backgroundImage: `url(${post.Images[0]?.link})`,
              backgroundSize: 'cover',
            }}></Link>
          <div>
            <Link
              href={`
            /${post.User.id}/status/${post.postId}/photo/${post.Images[1].imageId}
            `}
              style={{
                backgroundImage: `url(${post.Images[1]?.link})`,
                backgroundSize: 'cover',
              }}></Link>
            <Link
              href={`
            /${post.User.id}/status/${post.postId}/photo/${post.Images[2].imageId}
            `}
              style={{
                backgroundImage: `url(${post.Images[2]?.link})`,
                backgroundSize: 'cover',
              }}></Link>
          </div>
        </div>
      )
    );
  }
  if (post.Images.length === 4) {
    return (
      post.Images &&
      post.Images.length > 0 && (
        <div className={cx(styles.postImageSection, styles.fourImage)}>
          <Link
            href={`
          /${post.User.id}/status/${post.postId}/photo/${post.Images[0].imageId}
          `}
            style={{
              backgroundImage: `url(${post.Images[0]?.link})`,
              backgroundSize: 'cover',
            }}></Link>
          <Link
            href={`
        /${post.User.id}/status/${post.postId}/photo/${post.Images[1].imageId}
        `}
            style={{
              backgroundImage: `url(${post.Images[1]?.link})`,
              backgroundSize: 'cover',
            }}></Link>
          <Link
            href={`
        /${post.User.id}/status/${post.postId}/photo/${post.Images[2].imageId}
        `}
            style={{
              backgroundImage: `url(${post.Images[2]?.link})`,
              backgroundSize: 'cover',
            }}></Link>
          <Link
            href={`
        /${post.User.id}/status/${post.postId}/photo/${post.Images[3].imageId}
        `}
            style={{
              backgroundImage: `url(${post.Images[3]?.link})`,
              backgroundSize: 'cover',
            }}></Link>
        </div>
      )
    );
  }
  return null;
};

export default PostImages;
