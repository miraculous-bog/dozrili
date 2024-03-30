import React, { useState } from 'react';

import styles from './timeline.module.scss';

const Timeline = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	// Assuming there are 5 steps in the timeline, based on the image provided
	const steps = [
		{ time: 'Червень 2022', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
		{ time: 'Липень 2022', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
		{ time: 'Серпень 2022', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
		{ time: 'Вересень 2022', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
		{ time: 'Жовтень 2022', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }
	];


	return (
		<div className={styles.wrapper}>
			<div className={styles.continer}>
				{steps.map((step, index) => (
					<div key={step.time} className={`${styles.item} ${index === activeIndex ? styles.active : ''}`} onClick={() => setActiveIndex(index)}>
						<div className={styles.itemContent}>
							<span className={styles.itemTitle}>{step.time}</span>
							{/* Display more content based on the step, if necessary */}
						</div>
						{index < steps.length - 1 && <div className={styles.line}></div>}
					</div>
				))}
				<div className={styles.info}>
					<h2 className={styles.title}>{steps[activeIndex].time}</h2>
					<p className={styles.text}>{steps[activeIndex].content}</p>
				</div>
			</div>
		</div>
	);
};

export default Timeline