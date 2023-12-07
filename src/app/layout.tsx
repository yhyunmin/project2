import { Props } from '@/types';
import styles from '@/app/page.module.css';
export default function RootLayout({ children, modal }: Props) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}