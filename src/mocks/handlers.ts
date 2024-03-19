import { faker } from '@faker-js/faker';
import { HttpResponse, http } from 'msw';

function generateDate() {
  const lastWeek = new Date(Date.now());
  lastWeek.setDate(lastWeek.getDate() - 7);
  return faker.date.between({
    from: lastWeek,
    to: Date.now(),
  });
}
const User = [
  { id: 'userId1', nickname: 'userNickname1', image: faker.image.avatar() },
  { id: 'userId2', nickname: 'userNickname2', image: faker.image.avatar() },
  { id: 'userId3', nickname: 'userNickname3', image: faker.image.avatar() },
];
export const handlers = [
  http.post('/api/login', () => {
    //로그인시 응답
    // DB에서 데이터 가져오기
    //
    // 응답을 보낼떈 .json
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
    // 보낼 데이터가 없을때
    return new HttpResponse(null, {
      headers: {
        'Set-Cookie': 'connect.sid=;HttpOnly;Path=/;Max-Age=0',
      },
    });
  }),
  // 회원가입
  http.post('/api/users', async () => {
    console.log('회원가입');
    // 이미 회원가입되어있는 상황
    //
    // 텍스트를 보낼때
    return HttpResponse.text(JSON.stringify('user_exists'), {
      status: 403,
    });
    // 성공
    // return HttpResponse.text(JSON.stringify('ok'), {
    //   headers: {
    //     'Set-Cookie': 'connect.sid=;HttpOnly;Path=/;Max-Age=0',
    //   },
    // });
  }),
  http.get('/api/postRecommends', () => {
    return HttpResponse.json([
      {
        postId: 1,
        User: User[0],
        content: `${1} Text content`,
        Images: [
          {
            imageId: 1,
            link: faker.image.urlLoremFlickr(),
          },
        ],
        createAt: generateDate(),
      },
      {
        postId: 2,
        User: User[0],
        content: `${2} Text content`,
        Images: [
          {
            imageId: 1,
            link: faker.image.urlLoremFlickr(),
          },
        ],
        createAt: generateDate(),
      },
      {
        postId: 3,
        User: User[0],
        content: `${3} Text content`,
        Images: [
          {
            imageId: 1,
            link: faker.image.urlLoremFlickr(),
          },
        ],
        createAt: generateDate(),
      },
      {
        postId: 4,
        User: User[0],
        content: `${4} Text content`,
        Images: [
          {
            imageId: 1,
            link: faker.image.urlLoremFlickr(),
          },
        ],
        createAt: generateDate(),
      },
      {
        postId: 5,
        User: User[0],
        content: `${5} Text content`,
        Images: [
          {
            imageId: 1,
            link: faker.image.urlLoremFlickr(),
          },
        ],
        createAt: generateDate(),
      },
      {
        postId: 6,
        User: User[0],
        content: `${6} Text content`,
        Images: [
          {
            imageId: 1,
            link: faker.image.urlLoremFlickr(),
          },
        ],
        createAt: generateDate(),
      },
      {
        postId: 7,
        User: User[0],
        content: `${7} Text content`,
        Images: [
          {
            imageId: 1,
            link: faker.image.urlLoremFlickr(),
          },
        ],
        createAt: generateDate(),
      },
      {
        postId: 8,
        User: User[0],
        content: `${8} Text content`,
        Images: [
          {
            imageId: 1,
            link: faker.image.urlLoremFlickr(),
          },
        ],
        createAt: generateDate(),
      },
    ]);
  }),
];
