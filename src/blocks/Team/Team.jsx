import React from 'react';


import CardMember from './CardMember';

import data_team from '../../helper/data_team';

import styles from './team.module.scss';

const Team = () => {
	const path = '../../../content_images/photos/';
	console.log(data_team);
	return (
		<div className={styles.team}>
			<div className={styles.titleContainer}>

			</div>
			<div className={styles.wrapper}>
				{data_team.map((cardMemberData) => 
					(<CardMember name={cardMemberData.name}
						role={cardMemberData.role}
						imageSrc={`${path}${cardMemberData.imageSrc}`}
						key={cardMemberData.name} />)
				)}

			</div>
		</div>
	);
};

export default Team;