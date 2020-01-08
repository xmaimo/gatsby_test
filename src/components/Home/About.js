import React from 'react';
import{ useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Title from '../Title';
import styles from '../../css/about.module.css';

const getAboutImg = graphql`
	query aboutImage {
		aboutImage: file(relativePath: {eq: "defaultBcg.jpeg"}) {
			childImageSharp {
				fluid(maxWidth: 600) {
					...GatsbyImageSharpFluid_tracedSVG
				}
			}
		}
	}
`;

const About = () => {
	const { aboutImage } = useStaticQuery(getAboutImg);

	return (
		<section className={styles.about}>
			<Title title='about' subTitle='us' />
			
			<div className={styles.aboutCenter}>
				<article className={styles.aboutImg}>
					<div className={styles.imgContainer}>
						<Img fluid={aboutImage.childImageSharp.fluid} alt='Awesome landscape'/>
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
