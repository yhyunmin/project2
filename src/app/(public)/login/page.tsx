import LoginModal from '@/app/(public)/_component/LoginModal';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
export default async function Page() {
  const session = await auth();
  if (session?.user) {
    return redirect('/main');
  }
  return <LoginModal />;
}
