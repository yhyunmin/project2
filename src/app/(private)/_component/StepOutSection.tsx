import styles from './StepOut.module.css';
import { StepOut } from './StepOut';
export const StepOutSection = () => {
  return (
    <div className={styles.stepOutBg}>
      <div className={styles.stepOut}>
        <h3>자리 비움</h3>
        <StepOut />
      </div>
    </div>
  );
};
