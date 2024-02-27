import Main from '@/app/(private)/main/page';
import React from 'react';

type Props = {
  params: {
    username: string;
    id: string;
    photoId: string;
  };
};

const page = ({ params }: Props) => {
  //params : slug 의 값들
  return <Main />;
};

export default page;
