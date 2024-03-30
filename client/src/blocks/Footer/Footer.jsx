import React from 'react';
import { ReactComponent as PhoneIcon } from '../../icons/phone.svg'; // Змініть шлях до вашого SVG файлу
import { ReactComponent as EmailIcon } from '../../icons/email.svg'; // Змініть шлях до вашого SVG файлу
import { ReactComponent as InstagramIcon } from '../../icons/location.svg';
import Logo from '../Header/components/Logo/Logo';

import styles from './footer.module.scss';

const Partners = () => {

	return (
		<div className={styles.footer}>
			<Logo />
			<div className={styles.wrapper}>
				<div className={styles.data}>
					<h3 className={styles.title}>Громадська організація «ДОЗРІЛІ»</h3>
					<ul className={styles.contactInfo}>
						<li>Код ЄДРПОУ 45229751 </li>
						<li>IBAN:UA373052990000026005030817335</li>
						<li>в АТ КБ «ПРИВАТБАНК»</li>
						<li>МФО 305299</li>
					</ul>
				</div>
				<div className={styles.contacts}>
					<h3 className={styles.title}>Контакти</h3>
					<ul className={styles.contactList}>
						<a href="tel:+380501504129" className={styles.contactItem}>
							<PhoneIcon className={styles.icon} />
							<span>050-150-41-29</span>
						</a>
						<a href="mailto:dozril.ngo@gmail.com" className={styles.contactItem}>
							<EmailIcon className={styles.icon} />
							<span>dozril.ngo@gmail.com</span>
						</a>
						<a href="https://www.instagram.com" className={styles.contactItem}>
							<InstagramIcon className={styles.icon} />
							<span>Instagram</span>
						</a>
					</ul>
				</div>
			</div>
			<p className={styles.address}>43025, Україна, Волинська обл., м. Луцьк, вул. Градний Узвіз, 5</p>
		</div>
	);
};

export default Partners;