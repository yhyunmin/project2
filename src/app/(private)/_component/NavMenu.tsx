'use client';
import Link from 'next/link';
import { useSelectedLayoutSegments } from 'next/navigation';
import React from 'react';
import styles from './NavMenu.module.css';
import { Icon } from '@iconify/react';

export const NavMenu = () => {
  // segment = useSelectedLayoutSegment();
  const me: {} = {};
  const segments = useSelectedLayoutSegments();
  return (
    <>
      <li>
        <Link href={'/main'}>
          <div className={styles.navPill}>
            {segments[0] === 'main' ? (
              <>
                <div style={{fontWeight:'bold'}}>
                  <Icon icon='streamline:blank-calendar-solid' />
                  <Icon icon='streamline:blank-calendar' />
                  대시보드
                </div>
              </>
            ) : (
              <>
                <div>
                  <Icon icon='streamline:blank-calendar' />
                  대시보드
                </div>
              </>
            )}
          </div>
        </Link>
      </li>
      <li>
        <Link href={'/explorer'}>
          <div className={styles.navPill}>
            {segments[0] === 'main' ? (
              <>
                <div style={{fontWeight:'bold'}}>
                <Icon icon='streamline:user-multiple-group' />
                <Icon icon='streamline:user-multiple-group-solid' />
                  회원관리(탐색하기)
                  </div>
              </>
            ) : (
              <>
                <div>
                <Icon icon='streamline:user-multiple-group' />
                  회원관리(탐색하기)
                  </div>
              </>
            )}
          </div>
        </Link>
      </li>
      <li>
        <Link href={'/messages'}>
          <div className={styles.navPill}>
            {segments[0] === 'main' ? (
              <>
                <div style={{fontWeight:'bold'}}>
                <Icon icon='streamline:mail-send-envelope' />
                <Icon icon='streamline:mail-send-envelope-solid' />
                  메세지(메세지)
                  </div>
              </>
            ) : (
              <>
                <div >
                <Icon icon='streamline:mail-send-envelope' />
                  메세지(메세지)
                  </div>
              </>
            )}
          </div>
        </Link>
      </li>
      <li>
        <Link href={'/profile'}>
          <div className={styles.navPill}>
            {segments[0] === 'main' ? (
              <>
                <div style={{fontWeight:'bold'}}>
                <Icon icon='streamline:user-circle-single-solid' />
                <Icon icon='streamline:user-circle-single' />
                  프로필
                  </div>
              </>
            ) : (
              <>
                <div>
                <Icon icon='streamline:user-circle-single' />
                  프로필
                  </div>
              </>
            )}
          </div>
        </Link>
      </li>
      <li className={styles.box}>
        <div></div>
      </li>
    </>
  );
};
