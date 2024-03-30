import React from 'react';

import styles from './joinBtn.module.scss';

const JoinBtn = ({ isWideMode }) => {
  return (
    <div className={styles.button}>
      <p>приєднатися{isWideMode ? null : (<br />)} до спільноти</p>
    </div >
  );
};

export default JoinBtn;