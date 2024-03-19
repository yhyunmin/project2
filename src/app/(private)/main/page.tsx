import styles from './page.module.css';
import { Tab } from './_component/Tab';
import { Daily } from './_component/Daily';
import { Weekly } from './_component/Weekly';
import { PostTodo } from './_component/PostTodo';
import TabProvider from './_component/TabProvider';
import Post from './_component/Post';
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';
import getPostRecommends from '../_lib/getPostRecommends';
import PostRecommends from './_component/PostRecommends';

// async function getPostRecommend() {
//   // 반복되는 패턴의 형식
//   const res = await fetch('http://localhost:9090/api/postRecommends', {
//     next: {
//       tags: ['post', 'recommends'],
//     },
//   });
//   if (!res.ok) {
//     throw new Error('fetch data error');
//   }
//   return res.json();
// }
// revalidateTag('recommends') => 서버에있는 캐시가 날라가면 새로 업데이트해줌. (지정된 태그만)
// revalidatePath('/main') => 페이지 전체 캐시 새로고침
export default async function Main() {
  //  서버에서 불러온 데이터를 queryClient가 받음. * hydrate
  const queryClient = new QueryClient();
  // queryKey 를 가지고 있는 애는 queryFn을 실행해라
  await queryClient.prefetchQuery({
    queryKey: ['posts', 'recommends'],
    queryFn: getPostRecommends,
  });
  const dehydratedState = dehydrate(queryClient);

  // 나중에 데이터 필요할땐 아래 메소드 형식으로 가져오면 됨.
  // queryClient.getQueryData(['posts', 'recommends'])
  // 수정은 이렇게
  // queryClient.setQueryData(['posts', 'recommends'])

  return (
    <main className={styles.main}>
      <HydrationBoundary state={dehydratedState}>
        <TabProvider>
          <Tab />
          <PostTodo />
          <PostRecommends />
          {/* <Daily />
        <Weekly /> */}
          {/* <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post /> */}
        </TabProvider>
      </HydrationBoundary>
    </main>
  );
}
