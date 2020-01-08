/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import StyledHero from '../components/StyledHero';

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

class Tours extends Component {
	render() {
		const { fluid }=this.props.data.defaultBcg.childImageSharp;
		
		return (
			<Layout>
				<StyledHero img={fluid}></StyledHero> 
			</Layout>
		);
	}
}

export default Tours;
