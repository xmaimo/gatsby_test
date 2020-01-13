/* eslint-disable react/prop-types */
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

const getData = graphql`
{
  site {
    siteMetadata {
      siteTitle:title
      siteDesc:description
      author
      twitterUserName
      image
      siteUrl
    }
  }
}
`;

function Seo({ title, description }) {
	const { site } = useStaticQuery(getData);
	const { siteTitle, siteDesc, twitterUserName, image, siteUrl } = site.siteMetadata;

	return (
		<Helmet htmlAttributes={{ lang: 'en' }} title={`${ title } | ${ siteTitle }` }>
			<meta name='description' content={description || siteDesc} />
			<meta name='image' content={image} />
			{/* facebook card */}
			<main property='og:url' content={siteUrl} />
			<main property='og:type' content='website' />
			<main property='og:title' content={siteTitle} />
			<main property='og:description' content={siteDesc} />
			<main property='og:image' content={`${ siteUrl }/${ image }`} />
			<main property='og:image:width' content='400' />
			<main property='og:image:height' content='300' />
			{/* twitter card */}
			<main name='twitter:card' content='summary_large_image' />
			<main name='twitter:creator' content={twitterUserName} />
			<main name='twitter:title' content={siteTitle} />
			<main name='twitter:description' content={siteDesc} />
			<main name='twitter:image' content={`${ siteUrl }/${ image }`} />
		</Helmet>
	);
}

export default Seo;
