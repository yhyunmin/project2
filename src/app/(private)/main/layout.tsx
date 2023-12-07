import { Props } from '@/types';

export default async function MainLayout({ children }: Props) {
  return (
    <div>
      main Layout
      {children}
    </div>
  );
}
