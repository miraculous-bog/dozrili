import React from 'react';
import styles from './navbar.module.scss';
import HomeIcon from '../../../../icons/menu.png';
import { motion } from 'framer-motion';

const NavLinks =() => {
  const animateFrom = {opacity:0,y:-40};
  const animateTo = {opacity:1,y:0};
  return (

    <ul className={styles.list}>
      <motion.li initial={animateFrom} animate={animateTo} className={styles.item}>
        <div className={styles.element}>
          {/* <HomeIcon/> */}
          <p className={styles.text}>місія</p>
        </div>
      </motion.li>
      <motion.li initial={animateFrom} animate={animateTo} className={styles.item}>
        <div className={styles.element}>
          {/* <HomeIcon /> */}
          <p className={styles.text}>команда</p>
        </div>
      </motion.li>
      <motion.li initial={animateFrom} animate={animateTo} className={styles.item}>
        <div className={styles.element}>
          {/* <HomeIcon /> */}
          <p className={styles.text}>проєкти</p>
        </div>
      </motion.li>
      <motion.li initial={animateFrom} animate={animateTo} className={styles.item}>
        <div className={styles.element}>
          {/* <HomeIcon /> */}
          <p className={styles.text}>блог</p>
        </div>
      </motion.li>
    </ul>

  );
};

export default NavLinks;