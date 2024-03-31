import React from 'react';


import CardMember from './CardMember';

import OrangeSmille from '../../content_images/OrangeSmile.png';

import data_team from '../../helper/data_team';

import styles from './team.module.scss';

const Team = () => {
	const path = 'https://github.com/miraculous-bog/dozrili/blob/main/src/content_images/photos/';
	console.log(data_team);
	return (
		<div className={styles.team} id="team">
			<div className={styles.titleContainer}>
				<div className={styles.images}>
					<img className={`${styles.image} ${styles.topImg}`} src={OrangeSmille} alt="orangeSmille" />
					<img className={`${styles.image} ${styles.bottomImg}`} src={OrangeSmille} alt="orangeSmille" />
				</div>
				<h2 className={styles.title}>команда:</h2>
			</div>
			<div className={styles.wrapper}>
				{data_team.map((cardMemberData) =>
				(<CardMember name={cardMemberData.name}
					role={cardMemberData.role}
					imageSrc={`https://github.com/miraculous-bog/dozrili/blob/main/client/src/content_images/photos/${cardMemberData.imageSrc}?raw=true`}
					key={cardMemberData.name} />)
				)}

			</div>
		</div>
	);
};

export default Team;