/* eslint-disable react/prop-types */
import React from 'react';
import Img from 'gatsby-image';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import styles from '../../css/blog-card.module.css';

function Blog({ blog }) {
	const { slug, title, image, published } = blog;

	return (
		<article className={styles.blog}>
			<div className={styles.imgContainer}>
				<Img fluid={image.fluid} className={styleMedia.img} alt={title} />
				<AniLink fade className={styles.link} to={`/blog/${ slug }`}>read more</AniLink>

				<h6 className={styles.date}>{published}</h6>
			</div>
			<div className={styles.footer}>
				<h4>{title}</h4>
			</div>
		</article>
	);
}

export default Blog;
