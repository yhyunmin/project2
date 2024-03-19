'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
type Props = {
  children?: React.ReactNode;
};
const RQProvider = ({ children }: Props) => {
  const [client] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          // 탭 전환시 새로고침
          refetchOnWindowFocus: false,
          // 재 연결시 새로고침
          refetchOnReconnect: false,
          // 컴포넌트가 재 마운트 시 (컴포넌트 렌더링 시 )
          refetchOnMount: true,
          // 데이터 전송 실패시 재시도
          retry: false,
        },
      },
    })
  );

  return (
    <QueryClientProvider client={client}>
      {children}
      <ReactQueryDevtools
        initialIsOpen={process.env.NEXT_PUBLIC_MODE === 'local'}
      />
    </QueryClientProvider>
  );
};

export default RQProvider;
