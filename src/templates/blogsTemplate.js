/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react';
import { graphql } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import Title from '../components/Title';
import Layout from '../components/layout';
import Blog from '../components/Blog/Blog';
import styles from '../css/blog.module.css';
import Seo from '../components/Seo';

function blogsTemplate(props) {
	const { data } = props;
	const { currentPage, numPages } = props.pageContext;
	const isFirst = currentPage === 1;
	const isLast = currentPage === numPages;
	const prevPage = currentPage - 1 === 1 ? '/blogs' : `/blogs/${ currentPage - 1 }`;
	const nextPage = `/blogs/${ currentPage + 1 }`;
	return (
		<Layout>
			<Seo title='Blogs' />
			<section className={styles.blog}>
				<Title title='latest' subTitle='posts' />
        
				<div className={styles.center}>
					{
						data.posts.edges.map(({ node }) => {
							return <Blog key={node.id} blog={node} />;
						})
					}
				</div>

				<div className={styles.links}>
					{ !isFirst 
              && <AniLink fade to={prevPage} className={styles.link}>Prev</AniLink>
					}
					{
						Array.from({ length: numPages }, (_, i) => {
							return (
								<AniLink 
									key={i} 
									fade 
									to={`/blogs/${ i === 0 ? '' : i + 1 }`} 
									className={ 
										i+1 === currentPage 
											? `${ styles.link } ${ styles.active }` 
											: styles.link
									}>
									{i+1}
								</AniLink>
							);
						})
					}
					{ !isLast 
              && <AniLink fade to={nextPage} className={styles.link}>Next</AniLink>
					}
				</div>
			</section>
		</Layout>
	);
}

export const query = graphql`
  query getPosts($skip: Int!, $limit: Int!) {
    posts: allContentfulPost(skip: $skip, limit: $limit, sort: {fields: published, order: DESC}) {
      edges {
        node {
          slug
          title
          id: contentful_id
          published(formatString: "Do MMMM YYYY")
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

export default blogsTemplate;
