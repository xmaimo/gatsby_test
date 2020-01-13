/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require('dotenv').config({
	path: `.env.${ process.env.NODE_ENV }`,
});


module.exports = {
	/* Your site config here */
	siteMetadata: {
		title: 'Backroads',
		description: 'Explore awesome worldwide tours & discover what makes each of them unique. Forget your daily routine & say yes to adventure',
		author: '@johnDoe',
		twitterUserName: '@XMaimo',
		image: '/defaultBcg.jpeg',
		siteUrl: 'https://xma-gatsby-test.netlify.com'
	},
	plugins: [
		'gatsby-plugin-sass',
		'gatsby-plugin-styled-components',
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		'gatsby-plugin-transition-link',
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: `${ __dirname }/src/images/`,
			},
		},
		{
			resolve: 'gatsby-source-contentful',
			options: {
				spaceId: process.env.CONTENTFUL_ID,
				accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
			},
		}
	]
};
