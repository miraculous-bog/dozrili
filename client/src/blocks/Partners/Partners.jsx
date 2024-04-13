import React from 'react';

import PartnerOrangeGreat from '../../content_images/partner_Orange_Great.svg';
import PartnerUal from '../../content_images/partner_ual.svg';
import PartnerOfficeDii from '../../content_images/partner_office_dii.svg';
import PartnerPramyemoRazom from '../../content_images/partner_pramyemo_razom.svg';
import PartnerGapYear from '../../content_images/partner_gap_year.svg';
import PartnerTeploSerdni from '../../content_images/partner_teplo_serdni.svg';
import PartnerMcv from '../../content_images/partner_mcv.svg';
import PartnerKaritas from '../../content_images/partner_karitas.svg';

import styles from './partners.module.scss';

const Partners = () => {

	return (
		<div className={styles.partners}>
			<h2 className={styles.title}>партнери:</h2>
			<div className={styles.conteiner}>
				<img className={styles.partner} src={PartnerOrangeGreat} alt="PartnerOrangeGreat" />
				<img className={styles.partner} src={PartnerUal} alt="PartnerUal" />
				<img className={styles.partner} src={PartnerOfficeDii} alt="PartnerOfficeDii" />
				<img className={styles.partner} src={PartnerPramyemoRazom} alt="PartnerPramyemoRazom" />
				<img className={styles.partner} src={PartnerGapYear} alt="PartnerGapYear" />
				<img className={styles.partner} src={PartnerTeploSerdni} alt="PartnerTeploSerdni" />
				<img className={styles.partner} src={PartnerMcv} alt="PartnerMcv" />
				<img className={styles.partner} src={PartnerKaritas} alt="PartnerKaritas" />
			</div>
		</div>
	);
};

export default Partners;