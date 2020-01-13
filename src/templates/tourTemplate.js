import React from 'react';
import { graphql } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { FaMoneyBillWave, FaMap } from 'react-icons/fa';

import Layout from '../components/layout';
import StyledHero from '../components/StyledHero';
import Day from '../components/SingleTour/Day';
import styles from '../css/template.module.css';
import Seo from '../components/Seo';

function tourTemplate({ data }) {
	const { name, price, country, days, start, journey, description:{ description }, images } = data.contentfulTour;
	const [ mainImage, ...otherImgs ] = images;

	return (
		<Layout>
			<Seo title={name} />
			
			<StyledHero
				img={mainImage.fluid}
			/>
			<section className={styles.template}>
				<div className={styles.center}>
					<div className={styles.images}>
						{
							otherImgs.map(({ fluid }, i) => {
								return (
									<Img classname={styles.image} key={i} fluid={fluid} alt={name} />
								);
							})
						}
					</div>
					<h2>{name}</h2>
					<div className={styles.info}>
						<p>
							<FaMoneyBillWave className={styles.icon}/>
							starting from ${price}
						</p>
						<p>
							<FaMap className={styles.icon} />
							{country}
						</p>
					</div>
					<h4>starts on: {start}</h4>
					<h4>duratiuon: {days}</h4>
					<p className={styles.desc}>{description}</p>
					<h2>daily schedule</h2>
					<div className={styles.journey}>
						{
							journey.map((item, i) => {
								return <Day key={i} day={item.day} info={item.info} />;
							})
						}
					</div>
					<AniLink fade to='tours' className='btn-primary'>back to tours</AniLink>
				</div>
			</section>
		</Layout>
	);
}

tourTemplate.propTypes = {
	data: PropTypes.object,
};

export const query = graphql`
	query ($slug: String!) {
		contentfulTour(slug: {eq: $slug}) {
			id:contentful_id
			name
			price
			country
			days
			start(formatString: "dddd MMMM Do, YYYY")
			journey{
        day
        info
      }
      description {
        description
      }
      images {
        fluid{
          ...GatsbyContentfulFluid
        }
      }
		}
	}
`;

export default tourTemplate;

