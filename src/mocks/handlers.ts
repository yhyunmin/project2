import { HttpResponse, http } from 'msw';

export const handlers = [
  http.post('/api/login', () => {
    //로그인시 응답
    // DB에서 데이터 가져오기
    return HttpResponse.json(
      {
        userId: 1,
        nickname: '이현민',
        id: 'smurf',
        image: '/src/assets/logo.png',
      },
      {
        headers: {
          'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/',
        },
      }
    );
  }),
  //로그아웃시 응답
  http.post('/api/logout', () => {
    return new HttpResponse(null, {
      headers: {
        'Set-Cookie': 'connect.sid=;HttpOnly;Path=/;Max-Age=0',
      },
    });
  }),
];
