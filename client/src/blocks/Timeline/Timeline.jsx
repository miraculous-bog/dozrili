import React, { useState } from 'react';

import styles from './timeline.module.scss';

const Timeline = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	// Assuming there are 5 steps in the timeline, based on the image provided
	const steps = [
		{ time: 'липень 2022го', content: 'запустили програму підтримки та розвитку волонтерів за підтримки Європейського Союзу в рамках Стипендіальної програми для лідерів громадянського суспільства країн Східного партнерства.' },
		{ time: 'вересень-листопад 2022го', content: '16 дозрілих менторів та менторок провели 109 локальних воркшопів для 200+ волонтерів з різних куточків України (11 міст, 4 онлайн групи)' },
		{ time: 'грудень 2022го ', content: 'випустили Методичку для менторів та менторок, які працюють над викликом вигорання волонтерів' },
		{ time: 'квітень-червень 2023го', content: 'реалізували серію онлайн воркшопів для 60+ учасників та учасниць та випустили спецепізоди в партнерстві з подкастом про усвідомленість Gap_Year в рамках Стипендіальної програми “Офіс Дій”' },
		{ time: 'серпень 2023го', content: 'провели дводенний тренінг-відновлення для 19-ти волонтерів з 6-ти громад Волинської області в рамках проєкту Карітас України "Долаючи розломи: розбудова потенціалу постраждалих спільнот щодо чутливості до конфліктів" за підтримки UHF' },
		{ time: '23 жовтня 2023го', content: 'заснували ГО “ДОЗРІЛІ” завдяки підтримці в рамках проєкту “Зміцнення громадянського активізму серед молоді”, що реалізується ГО «Фонд «Професійний розвиток Харкова»» за щирої підтримки Національного фонду демократії (National Endowment for Democracy)' },
		{ time: 'березень 2024го', content: 'реалізували менторську програму “Без Надриву” у 6-ти громадах Волинської області.' },
		{ time: 'зараз', content: 'ДОЗРІЛІ це потужна команда, що має досвід 40+ років в громадському секторі та спеціалізується на розвитку активної молоді, молодіжних спільнот та посиленні їх впливу на становлення демократичної України.' },
	];


	return (
		<div className={styles.wrapper}>
			<div className={styles.center}>
			<div className={styles.container}>
				{steps.map((step, index) => (
					<div key={step.time} className={`${styles.item} ${index === activeIndex ? styles.active : ''}`} onClick={() => setActiveIndex(index)}>
						<div className={styles.itemContent}>
						</div>
						{index < steps.length - 1 && <div className={styles.line}></div>}
					</div>
				))}
			</div>
			<div className={styles.info}>
				<h2 className={styles.title}>{steps[activeIndex].time}</h2>
				<p className={styles.text}>{steps[activeIndex].content}</p>
			</div>
			</div>
		</div>
	);
};

export default Timeline