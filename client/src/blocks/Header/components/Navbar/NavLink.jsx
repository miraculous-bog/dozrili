import React from 'react';
import styles from './navbar.module.scss';
import HomeIcon from '../../../../icons/menu.png';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NavLinks = () => {
  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };
  return (

    <ul className={styles.list}>
      <motion.li initial={animateFrom} animate={animateTo} className={styles.item}>

        <Link to='/'>
          <div className={styles.element}>
            {/* <HomeIcon/> */}
            <p className={styles.text}>місія</p>
          </div>
        </Link>
      </motion.li>
      <motion.li initial={animateFrom} animate={animateTo} className={styles.item}>
        <Link to='/'>

          <div className={styles.element}>
            {/* <HomeIcon /> */}
            <p className={styles.text}>команда</p>
          </div>
        </Link>

      </motion.li>
      <motion.li initial={animateFrom} animate={animateTo} className={styles.item}>
        <Link to='/'>
          <div className={styles.element}>
            {/* <HomeIcon /> */}
            <p className={styles.text}>проєкти</p>
          </div>
        </Link>

      </motion.li>
      <motion.li initial={animateFrom} animate={animateTo} className={styles.item}>
        <Link to='/blog'>

          <div className={styles.element}>
            {/* <HomeIcon /> */}
            <p className={styles.text}>блог</p>
          </div>
        </Link>

      </motion.li>
    </ul>

  );
};

export default NavLinks;