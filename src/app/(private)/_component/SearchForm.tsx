import React from 'react';
import styles from './SearchForn.module.css';

const SearchForm = () => {
  return (
    <form
      action=''
      className={styles.search}>
      <input type='search' />
    </form>
  );
};

export default SearchForm;
