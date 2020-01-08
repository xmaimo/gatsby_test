/* eslint-disable react/prop-types */
import React from 'react';

import Navbar from './Navbar';
import Footer from './Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './layout.scss';

const Layout = (props) => {
	return (
		<main>
			<Navbar />
			
			{ props.children }
			
			<Footer />
		</main>
	);
};

export default Layout;
