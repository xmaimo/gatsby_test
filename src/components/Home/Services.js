import React from 'react';

import Title from '../Title';
import services from '../../constants/services';
import styles from '../../css/services.module.css';

const Services = () => {
	return (
		<section className={styles.services}>
			<Title title='our' subTitle='services' />

			<div className={styles.center}>
				{
					services.map((service, i) => {
						return (
							<article key={i} className={styles.service}>
								<span>{service.icon}</span>
								<h4>{service.title}</h4>
								<p>{service.text}</p>
							</article>
						);
					})
				}
			</div>
		</section>
	);
};

export default Services;
