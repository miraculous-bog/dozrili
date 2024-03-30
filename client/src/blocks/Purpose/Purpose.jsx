import React from 'react';

import Oranges from '../../content_images/Oranges.png'

import styles from './purpose.module.scss';

const Values = () => {
	return (
		<div className={styles.purpose}>
			<div className={styles.wrapper}>
				<img className={styles.image} src={Oranges} alt="Oranges" />
				<div className={styles.info}>
					<h5 className={styles.title}><span className={styles.highlight}>Мета спільноти</span> - забезпечити платформу для розвитку як особистісного, так і професійного для молодих людей, задля їх реалізації в Україні та сприяння позитивним змінам в державі.</h5>
					<ul className={styles.list}>
						<li className={styles.item}>Щомісяця проводимо безкоштовні практико-орієнтовані воркшопи для учасників спільноти</li>
						<li className={styles.item}>Щомісяця проводимо безкоштовні практико-орієнтовані воркшопи для учасників спільноти</li>
						<li className={styles.item}>Щомісяця проводимо безкоштовні практико-орієнтовані воркшопи для учасників спільноти</li>
						<li className={styles.item}>Щомісяця проводимо безкоштовні практико-орієнтовані воркшопи для учасників спільноти</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Values;