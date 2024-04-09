import React from 'react';
import { Link } from 'react-router-dom';
import styles from './joinBtn.module.scss';

const JoinBtn = ({ isWideMode }) => {
  return (
    <Link to="https://t.me/dozrili_bot?start=w19479776">
      <div className={styles.button}>
        <p>приєднатися{isWideMode ? null : (<br />)} до спільноти</p>
      </div >
    </Link>
  );
};

export default JoinBtn;