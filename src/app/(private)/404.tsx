'use client';

import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Layout from './layout';

const NotFound: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.replace('/');
    }, 5000);
  }, [router]);
  return (
    <Layout>
      <div>
        <h1>존재하지 않는 페이지 혹은 경로입니다.</h1>
        <p>5초 뒤 메인페이지로 이동합니다.</p>
      </div>
    </Layout>
  );
};

export default NotFound;
