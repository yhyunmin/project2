'use client';
import React, { use } from 'react';
import styles from './RightSearchZone.module.css';
import SearchForm from './SearchForm';
const RightSearchZone = () => {
  return (
    <div className={styles.rightSectionDiv}>
      <SearchForm />
    </div>
  );
};

export default RightSearchZone;
