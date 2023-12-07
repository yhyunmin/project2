'use client';

import styles from './signup.module.css';
import { useRouter } from 'next/navigation';
import { ChangeEventHandler, FormEventHandler, useState } from 'react';

export default function SingupModal() {
  const [id, setId] = useState();
  const [password, setPassword] = useState();
  const [nickname, setNickname] = useState();
  const [image, setImage] = useState();
  const [imageFile, setImageFile] = useState<File>();

  const router = useRouter();

  const onCLickClose = () => {
    router.back();
  };

  const onChangeId = (e): void => {
    setId(e.target.value);
  };
  const onChangePassword = (e): void => {
    setPassword(e.target.value);
  };
  const onChangeNickname = (e): void => {
    setNickname(e.target.value);
  };
  
}
