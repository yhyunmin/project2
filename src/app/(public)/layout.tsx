import { Props } from '@/types';
export default function Layout({ children, modal }: Props) {
  return (
    <div>
      public 레이아웃
      {children}
      {modal}
    </div>
  );
}
