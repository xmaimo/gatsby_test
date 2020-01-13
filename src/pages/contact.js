/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import ContactForm from '../components/Contact/ContactForm';
import StyledHero from '../components/StyledHero';
import Seo from '../components/Seo';

export const query = graphql`
	query {
		contactBcg: file(relativePath: {eq: "connectBcg.jpeg"}) {
			childImageSharp {
				fluid(quality: 90, maxWidth: 4160) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
	}
`;

const Contact = ({ data }) => {
	return (
		<Layout>
			<Seo title='Contact Page' />
			<StyledHero img={data.contactBcg.childImageSharp.fluid}></StyledHero> 
			
			<ContactForm />
		</Layout>
	);
};

export default Contact;
