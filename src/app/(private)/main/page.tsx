import styles from './page.module.css';
import { Tab } from './_component/Tab';
import { Daily } from './_component/Daily';
import { Weekly } from './_component/Weekly';
import { TodoForm } from './_component/TodoForm';

export default function Main() {
  return (
    <main className={styles.main}>
      <Tab />
      <TodoForm />
      <Daily />
      <Weekly />
    </main>
  );
}
