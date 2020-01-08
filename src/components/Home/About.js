import React from 'react';

import Title from '../Title';
import img from '../../images/defaultBcg.jpeg';
import styles from '../../css/about.module.css';

const About = () => {
	return (
		<section className={styles.about}>
			<Title title='about' subTitle='us' />
			
			<div className={styles.aboutCenter}>
				<article className={styles.aboutImg}>
					<div className={styles.imgContainer}>
						<img src={img} alt="Landscape"/>
					</div>
				</article>

				<article className={styles.aboutInfo}>
					<h4>explore the difference</h4>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi culpa est reiciendis quas nesciunt sint voluptatem cum non harum ullam voluptate excepturi.</p>
					<p>Nesciunt sint voluptatem cum non harum ullam voluptate excepturi vitae unde assumenda consequatur, recusandae beatae maiores veniam.</p>
					<button type='button' className='btn-primary'>read more</button>
				</article>
			</div>
		</section>
	);
};

export default About;
