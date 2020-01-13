/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react';
import { graphql } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';
import styles from '../css/single-blog.module.css';
import Seo from '../components/Seo';

function blogTemplate({ data }) {
	const { title, published, text:{ json } } = data.post;
  
	const options = {
		renderNode: {
			'embedded-asset-block': ({ data }) => {
				return (
					<div className='rich'>
						<h3>this is awesome image</h3>
						<img src={data.target.fields.file['en-US'].url} width='400' alt=""/>
						<p>images provided by john doe</p>
					</div>
				);
			},
			'embedded-entry-block':({ data }) => {
				const { title, image, text } = data.target.fields;
        
				return (
					<div>
						<h1>{title['en-US']}</h1>
						<img src={image['en-US'].fields.file['en-US'].url} width='400' alt={title} />
						{documentToReactComponents(text['en-US'])}
					</div>
				);
			}
		}
	};
  
	return (
		<Layout>
			<Seo title={title} />

			<section className={styles.blog}>
				<div className={styles.center}>
					<h1>{title}</h1>
					<h4>published at: {published}</h4>

					<article className={styles.post}>
						{documentToReactComponents(json, options)}
					</article>

					<AniLink fade to='/blog' className='btn-primary'>all posts</AniLink>
				</div>
			</section>
		</Layout>
	);
}

export const query = graphql`
  query ($slug: String!) {
    post: contentfulPost(slug: {eq: $slug}) {
      title
      published(formatString: "DD, MMMM YYYY")
      text {
        json
      }
    }
  }
`;

blogTemplate.propTypes = {
	post: PropTypes.object
};

export default blogTemplate;
