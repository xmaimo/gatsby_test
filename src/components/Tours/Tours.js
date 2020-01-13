import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import TourList from './TourList';

export const getTours = graphql`
  {
    tours: allContentfulTour {
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
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`;

function Tours() {
	const { tours } = useStaticQuery(getTours);

	return (
		<TourList tours={tours.edges} />
	);
}

export default Tours;
