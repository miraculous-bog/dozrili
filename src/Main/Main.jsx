import React from 'react';

import Banner from '../blocks/Banner';
import Mission from '../blocks/Mission';
import Team from '../blocks/Team/Team';

import styles from './main.module.scss';

const Main = () => {
  return (
    <div className={styles.main}>
		<Banner />
		<Mission />
    <Team />
      {/* <Slider /> */}
      {/* <Tabel /> */}
    </div>
  );
};

export default Main;