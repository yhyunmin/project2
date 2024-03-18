import { redirect } from 'next/navigation';
import Intro from './_component/Intro';
import { auth } from '@/auth';
// "/" router page
export default async function Home() {
  // useSession의 서버버전
  const session = await auth();
  if (session?.user) {
    return redirect('/main');
  }
  return <Intro />;
}
