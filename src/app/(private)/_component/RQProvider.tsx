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
          refetchOnWindowFocus: false,
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
