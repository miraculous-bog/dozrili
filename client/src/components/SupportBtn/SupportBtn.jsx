import React from 'react';

import { Link } from 'react-router-dom';

import styles from './supportBtn.module.scss';

const SupportBtn = ({ isWideMode }) => {
  return (
    <Link to='https://send.monobank.ua/jar/7C743Le9ff'>
    <div className={styles.button}>
      <p>&#8372; підтримати {isWideMode ? 'спільноту' : null}</p>
    </div>
    </Link>
  );
};

export default SupportBtn;