/* eslint-disable react/prop-types */
import React from 'react';

function SimpleHero(props) {
	return (
		<header className='defaultHero'>
			{ props.children }
		</header>
	);
}

export default SimpleHero;
