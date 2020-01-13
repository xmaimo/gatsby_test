/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import styles from '../../css/day.module.css';

function Day({ day, info }) {
	const [ showInfo, setIsOpen ] = useState(false);

	return (
		<article className={styles.day}>
			<h4>
				{day}
				<button 
					className={styles.btn} 
					onClick={() => setIsOpen(showInfo => !showInfo)}
				>
					<FaAngleDown />
				</button>
			</h4>
      
			{ showInfo && <p>{info}</p> }
		</article>
	);
}

export default Day;
