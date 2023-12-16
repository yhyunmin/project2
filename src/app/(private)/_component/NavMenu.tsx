'use client';
import Link from 'next/link';
import { useSelectedLayoutSegments } from 'next/navigation';
import React from 'react';
import { styles } from '@/app/page.module.css';

export const NavMenu = () => {
  // segment = useSelectedLayoutSegment();
  const me: {} = {};
  const segments = useSelectedLayoutSegments();
  console.log(segments);
  return (
    <>
      <li>
        <Link href={'/main/'}>
          <div className={styles.navPill}>
            {segments[0] === 'main' ? (
              <>
                <div style={{ fontWeight: 'bold' }}>대시보드</div>
              </>
            ) : (
              <>
                <div>대시보드</div>
              </>
            )}
          </div>
        </Link>
        <Link href={'/explore/'}></Link>
        <Link href={'/messages/'}></Link>
        <Link href={'/main/'}>스케줄</Link>
      </li>
    </>
  );
};
