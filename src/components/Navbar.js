import React, { useState } from 'react';
import { Link } from 'gatsby';
import { FaAlignRight } from 'react-icons/fa';

import links from '../constants/links';
import socialIcons from '../constants/social-icons';
import logo from '../images/logo.svg';

import styles from '../css/navbar.module.css';

const Navbar = () => {
	const [ isOpen, setIsOpen ] = useState(false);
	const toggle = () => setIsOpen(isOpen => !isOpen);

	return (
		<nav className={ styles.navBar }>
			<div className={styles.navCenter}>
				<div className={styles.navHeader}>
					<img src={logo} alt="backroads logo"/>
					<button type='button' className={ styles.logoBtn} onClick={toggle}>
						<FaAlignRight className={ styles.logoIcon }/>
					</button>
				</div>

				<ul className={isOpen ? `${ styles.navLinks } ${ styles.showNav }` : styles.navLinks }>
					{links.map((link, i) => {
						return (
							<li key={i}><Link to={link.path}>{link.text}</Link></li>
						);
					})}
				</ul>

				<div className={styles.navSocialLinks}>
					{socialIcons.map((icon, i) => {
						return (
							<a href={icon.url} key={i} target='_blank' rel='noopener noreferrer'>{icon.icon}</a>
						);
					})}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
