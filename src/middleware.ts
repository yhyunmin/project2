import { NextResponse } from 'next/server';
import { auth } from './auth';

// export { auth as middleware } from './auth';

export async function middleware() {
  const session = await auth();
  if (!session) {
    return NextResponse.redirect('http://localhost:3000/login');
  }
}
// 아래 페이지에 접근 할 때 세션이 있는지를 검사함.

// See "Matching Paths" below to learn more

// auth를 적용할 라우트
export const config = {
  matcher: ['/compose/threads', '/main', '/messages', '/explorer', '/search'],
};
