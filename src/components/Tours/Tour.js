/* eslint-disable react/prop-types */
import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { FaMap } from 'react-icons/fa';
import { useStaticQuery, graphql } from 'gatsby';

import Image from 'gatsby-image';
import styles from '../../css/tour.module.css';

const query = graphql`
{
  file(relativePath: {eq: "defaultBcg.jpeg"}) {
    childImageSharp {
      fluid {
				...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`;

function Tour({ tour }) {
	const { name, price, country, days, slug, images } = tour;
	const { file } = useStaticQuery(query);
	const mainImage = images ? images[0].fluid : file.childImageSharp.fluid;

	return (
		<article className={styles.tour}>
			<div className={styles.imgContainer}>

				<Image fluid={mainImage} className={styles.img} alt='single tour' />
				<AniLink fade className={styles.link} to={`/tours/${ slug }`}>details</AniLink>

			</div>

			<div className={styles.footer}>
				<h3>{name}</h3>
				<div className={styles.info}>
					<h4 className={styles.country}>
						<FaMap className={styles.icon}/> 
						{ country }
					</h4>
					<div className={styles.details}>
						<h6>{days} days</h6>
						<h6>price ${price}</h6>
					</div>
				</div>
			</div>
		</article>
	);
}

export default Tour;
