/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import StyledHero from '../components/StyledHero';
import BlogList from '../components/Blog/BlogList';
import Seo from '../components/Seo';

export const query = graphql`
	query {
		blogBcg: file(relativePath: {eq: "blogBcg.jpeg"}) {
			childImageSharp {
				fluid(quality: 90, maxWidth: 4160) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
	}
`;

const Blog = ({ data }) => {
	return (
		<Layout>
			<Seo title='Blog' />
			<StyledHero	img={data.blogBcg.childImageSharp.fluid}></StyledHero>

			<BlogList />
		</Layout>
	);
};

export default Blog;
