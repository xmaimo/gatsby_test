/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import Layout from '../components/Layout';
import StyledHero from '../components/StyledHero';
import Banner from '../components/Banner';
import AboutModule from '../components/Home/About';
import ServiceModule from '../components/Home/Services';
import FeaturedTours from '../components/Home/FeaturedTours';
import Seo from '../components/Seo';

export const query = graphql`
	query {
		defaultBcg: file(relativePath: {eq: "defaultBcg.jpeg"}) {
			childImageSharp {
				fluid(quality: 90, maxWidth: 4160) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
	}
`;

const Home = ({ data }) => {
	return (
		<Layout>
			<Seo title='Home' />

			<StyledHero 
				home='true'
				img={data.defaultBcg.childImageSharp.fluid}
			>
				<Banner title='continue exploring' info='Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, dolorum!'>
					<AniLink fade to='/tours-page' className='btn-white'>explore tours</AniLink>
				</Banner>
			</StyledHero> 

			<AboutModule />
			<ServiceModule />
			<FeaturedTours />
		</Layout>
	);
};

export default Home;
