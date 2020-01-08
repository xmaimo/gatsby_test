import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import SimpleHero from '../components/SimpleHero';
import Banner from '../components/Banner';
import AboutModule from '../components/Home/About';
import ServiceModule from '../components/Home/Services';

const Home = () => {
	return (
		<Layout>
			<SimpleHero>
				<Banner title='continue exploring' info='Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, dolorum!'>
					<Link to='/tours' className='btn-white'>explore tours</Link>
				</Banner>
			</SimpleHero> 

			<AboutModule />
			<ServiceModule />
		</Layout>
	);
};

export default Home;
