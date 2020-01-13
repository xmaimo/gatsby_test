import React from 'react';
import Blog from './Blog';
import { useStaticQuery, graphql } from 'gatsby';

import Title from '../Title';
import styles from '../../css/blog.module.css';

const getPosts = graphql`
  {
    posts: allContentfulPost(sort: {fields: createdAt, order: DESC}) {
      edges {
        node {
          published(formatString: "D MMMM, YYYY")
          createdAt(formatString:"LLLL")
          title
          slug
          id: contentful_id
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`;

function BlogList() {
	const { posts } = useStaticQuery(getPosts);
  
	return (
		<section className={styles.blog}>
			<Title title='our' subTitle='blogs' />
			<div className={styles.center}>
				{posts.edges.map(({ node }) => {
					return <Blog key={node.id} blog={node} />;
				})}
			</div>
		</section>
	);
}

export default BlogList;
