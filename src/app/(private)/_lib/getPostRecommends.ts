async function getPostRecommends() {
  // 반복되는 패턴의 형식
  const res = await fetch('http://localhost:9090/api/postRecommends', {
    next: {
      tags: ['post', 'recommends'],
    },
  });
  if (!res.ok) {
    throw new Error('fetch data error');
  }
  return res.json();
}

export default getPostRecommends;
