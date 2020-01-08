/* eslint-disable react/prop-types */
import React from 'react';

import styles from '../css/banner.module.css';

function Banner(props) {
	return (
		<div className={styles.banner}>
			<h1>{props.title}</h1>
			<p>{props.info}</p>
			{props.children}
		</div>
	);
}

export default Banner;
