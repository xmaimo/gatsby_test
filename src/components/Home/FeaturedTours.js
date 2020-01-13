import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import Title from '../Title';
import Tour from '../Tours/Tour';
import styles from '../../css/items.module.css';

export const query = graphql`
  {
    featuredTours: allContentfulTour(filter:{featured:{eq:true}}) {
      edges {
        node {
          name
          price
          slug
          country
          contentful_id
          days
          images {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
	}
`;

function FeaturedTours() {
	const { featuredTours } = useStaticQuery(query);
  
	return (
		<section className={styles.tours}>
			<Title title='featured' subTitle='tours' />
			
			<div className={styles.center}>
				{ 
					featuredTours.edges.map(({ node }) => {
						return (
							<Tour key={node.contentful_id} tour={node} />
						);
					})
				}
			</div>
      
			<AniLink fade to='/tours' className='btn-primary'>all tours</AniLink>
		</section>
	);
}

export default FeaturedTours;
