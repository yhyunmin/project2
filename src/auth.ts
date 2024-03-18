import Naver from '@auth/core/providers/naver';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import kakaoProvider from 'next-auth/providers/kakao';
import { NextResponse } from 'next/server';
export const {
  handlers: { GET, POST },
  auth,
  signIn,
} = NextAuth({
  pages: {
    signIn: '/login',
    newUser: '/singup',
  },
  // callbacks: {
  //   async authorized({ auth }) {
  //     if (!auth) {
  //       return NextResponse.redirect('http://localhost:3000/login');
  //     }
  //   },
  // },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const authResponse = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/login`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              id: credentials.username,
              password: credentials.password,
            }),
          }
        );

        if (!authResponse.ok) {
          return null;
        }

        const user = await authResponse.json();

        return {
          email: user.id,
          name: user.nickname,
          image: user.image,
          ...user,
        };
      },
    }),
    kakaoProvider({}),
    Naver({}),
  ],
});
