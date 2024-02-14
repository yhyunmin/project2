import styles from './search.module.css';
import BackButton from './../_component/BackButton';
import SearchForm from '../_component/SearchForm';
import { Tab } from '../main/_component/Tab';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.searchTop}>
        <div className={styles.searchZone}>
          <div className={styles.buttonZone}>
            <BackButton />
          </div>
          <div className={styles.formZone}>
            <SearchForm q={searchParams.q} />
          </div>
        </div>
        <Tab />
      </div>
      <div className={styles.list}>
        <SearchResult searchParams={searchParams} />
      </div>
    </main>
  );
}
