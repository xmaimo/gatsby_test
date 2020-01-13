import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import Layout from '../components/Layout';
import Banner from '../components/Banner';
import styles from '../css/error.module.css';
import Seo from '../components/Seo';

const ErrorPage = () => {
	return (
		<Layout>
			<Seo title='Error | 404' />
			<header className={styles.error}>
				<Banner title="oops it's a dead end">
					<AniLink fade to='/' className='btn-white'>back to home page </AniLink>
				</Banner>
			</header>
		</Layout>
	);
};

export default ErrorPage;
