'use client';
import { useEffect } from 'react';

export const MSWComponent = () => {
  useEffect(() => {
    //브라우저 환경을 보장하는 타입가드
    if (typeof window !== 'undefined') {
      if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
        require('@/mocks/browser');
      }
    }
  }, []);
  return null;
};
