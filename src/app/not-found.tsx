import { NextPage } from 'next';
import Link from 'next/link';

const NotFound: NextPage = () => {
  return (
    <div>
      <h1>존재하지 않는 페이지 혹은 경로입니다.</h1>
      <p>다른 페이지로 가실까요 ?</p>
      <Link href='/search'>검색하러가기</Link>
    </div>
  );
};

export default NotFound;
