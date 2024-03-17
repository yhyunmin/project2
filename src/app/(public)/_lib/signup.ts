'use server';
import { redirect } from 'next/navigation';

export default async (
  prevState: { message: null | string },
  formData: FormData
) => {
  if (!formData.get('id') || !(formData.get('id') as string)?.trim()) {
    return { message: 'no_id' };
  }
  if (!formData.get('password')) {
    return { message: 'no_password' };
  }
  if (!formData.get('nickname')) {
    return { message: 'no_nickname' };
  }
  if (!formData.get('image')) {
    return { message: 'no_image' };
  }
  let shouldRedirect = false;
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/users}`,
      {
        method: 'post',
        body: formData,
        // credentials: 쿠키
        credentials: 'include',
      }
    );
    console.log(response.status);
    if (response.status === 403) {
      return { message: 'user_exists' };
    }

    console.log(await response.json());
    shouldRedirect = true;
  } catch (err) {
    console.log(err);
    return;
  }
  if (shouldRedirect) {
    redirect('/main');
  }
  return { message: null };
};
