/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import StyledHero from '../components/StyledHero';
import Tours from '../components/Tours/Tours';
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

class tours extends Component {
	render() {
		const { fluid }=this.props.data.defaultBcg.childImageSharp;
		
		return (
			<Layout>
				<Seo title='Tours' />
				<StyledHero img={fluid}></StyledHero> 

				<Tours />
			</Layout>
		);
	}
}

export default tours;
