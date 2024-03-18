'use client';
import { usePathname } from 'next/navigation';
import { Notify } from './Notify';
import styles from './NotifySection.module.css';
import { useSession } from 'next-auth/react';
export const NotifySection = () => {
  const pathname = usePathname();
  const { data } = useSession();
  const onChangeAll = () => {};
  const onChangeFollow = () => {};
  if (!data?.user) {
    return (
      <div>
        <h2>공지사항</h2>
        <Notify />
      </div>
    );
  }
  if (data?.user) {
    if (pathname === '/explorer') {
      return null;
    }
    if (pathname === '/search') {
      return (
        <div>
          <h5 className={styles.filterTitle}>검색 필터</h5>
          <div>
            <div>
              <label htmlFor=''>사용자</label>
              <div className={styles.radio}>
                <div>모든 사용자</div>
                <input
                  type='radio'
                  name='pf'
                  defaultChecked
                  onChange={onChangeAll}
                />
              </div>
              <div className={styles.radio}>
                <div>내가 팔로우하는 사람들</div>
                <input
                  type='radio'
                  name='pf'
                  value='on'
                  onChange={onChangeFollow}
                />
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  return (
    <div>
      <h2>공지사항</h2>
      <Notify />
    </div>
  );
};
