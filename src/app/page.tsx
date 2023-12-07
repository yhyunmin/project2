import Link from 'next/link';
//vanila extract ? 하기 ?
export default function Home() {
  return (
    <main>
      <h1>타이틀</h1>
      <h2>로그인하세요</h2>
      <Link href='/auth/login'>로그인</Link>
      <h2>or</h2>
      <Link href='/auth/login'>계정 만들기</Link>
      {/* 페이지 라우팅 */}
      {/* redirect(); */}
    </main>
  );
}
