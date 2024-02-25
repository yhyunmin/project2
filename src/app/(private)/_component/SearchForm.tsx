import React from 'react';
import styles from './SearchForm.module.css';

type Props = {
  q?: string;
};

const SearchForm = ({ q }: Props) => {
  return (
    <form
      action=''
      className={styles.search}>
      <input type='search' />
    </form>
  );
};

export default SearchForm;
