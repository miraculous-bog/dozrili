import React from 'react';

import styles from './supportBtn.module.scss';

const SupportBtn = ({ isWideMode }) => {
  return (
    <div className={styles.button}>
      <p>&#8372; підтримати {isWideMode ? 'спільноту' : null}</p>
    </div>
  );
};

export default SupportBtn;