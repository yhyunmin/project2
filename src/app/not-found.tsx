'use client';

import { NextPage } from 'next';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useState } from 'react';

const NotFound: NextPage = () => {
  const [time, setTime] = useState(5);
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.replace('/');
    }, 5000);
  }, [router]);

  useEffect(() => {
    if (time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }
  });
  return (
    <div>
      <h1>존재하지 않는 페이지 혹은 경로입니다.</h1>
      <p>{time}초 뒤 메인페이지로 이동합니다.</p>
    </div>
  );
};

export default NotFound;

// 서버 컴포넌트에선 redirect 를 사용
// 클라 컴포넌트에선 useRouter / replace,push 를 사용
// push, replace 차이점
// A->B->C의 라우터 경우
// 뒤로가기했을때 push 는 C에서 뒤로가기하면 B
// replace 는 C에서 뒤로가기하면 A
// push는 뒤로가기 무한반복 일 수 있어서 replace를 사용
