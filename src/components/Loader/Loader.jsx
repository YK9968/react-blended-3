import { ClimbingBoxLoader } from 'react-spinners';

import styles from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={styles.backdrop}>
      <ClimbingBoxLoader color="#36bed6" />
    </div>
  );
};
