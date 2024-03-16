import { Props } from '@/types';
import '@/globals.css';
import { MSWComponent } from './_component/MSWComponent';

export const metadata = {
  title: {
    default: '어드민 페이지',
    template: '%s | 어드민 페이지',
  },
  description: '윈드재머 짐 회원관리 페이지 이현민 제작',
  icons: {
    icon: '/favicon.ico',
  },
};
export default function RootLayout({ children, modal }: Props) {
  return (
    <html lang='en'>
      <body>
        <MSWComponent />
        {children}
      </body>
    </html>
  );
}
