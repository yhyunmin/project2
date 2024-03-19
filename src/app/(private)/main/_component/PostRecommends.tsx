'use client';

import { useQuery } from '@tanstack/react-query';
import Post from './Post';
import { Post as IPost } from '@/models/Post';
import getPostRecommends from '../../_lib/getPostRecommends';

const PostRecommends = () => {
  const { data } = useQuery<IPost[]>({
    queryKey: ['posts', 'recommends'],
    queryFn: getPostRecommends,
    // staleTime:0 // fresh -> stale 타임
    staleTime: 60000, // 1분 동안 fresh 상태
    // cache Time => gcTime 가비지 콜렉터 타임
    // inActive에서 GC타임이 돌아가고 GC타임 이후 캐시 삭제.
    gcTime: 30000,
    // staleTime은 gcTime보다 짧아야한다.(gcTime은 반대로 길어야함)
  });

  return data?.map(post => {
    return (
      <Post
        key={post.postId}
        post={post}
      />
    );
  });
};

export default PostRecommends;
