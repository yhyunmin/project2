import styles from './page.module.css';
import { Tab } from './_component/Tab';
import { Daily } from './_component/Daily';
import { Weekly } from './_component/Weekly';
import { PostTodo } from './_component/PostTodo';
import TabProvider from './_component/TabProvider';

export default function Main() {
  return (
    <main className={styles.main}>
      <TabProvider>
        <Tab />
        <PostTodo />
        <Daily />
        <Weekly />
      </TabProvider>
    </main>
  );
}
