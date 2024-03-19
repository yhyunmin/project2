'use client';

import { useQuery } from '@tanstack/react-query';
import Post from './Post';
import { Post as IPost } from '@/models/Post';
import getPostRecommends from '../../_lib/getPostRecommends';

const PostRecommends = () => {
  const { data } = useQuery<IPost[]>({
    queryKey: ['posts', 'recommends'],
    queryFn: getPostRecommends,
  });
  return data?.map(post => {
    <Post
      key={post.postId}
      post={post}
    />;
  });
};

export default PostRecommends;
