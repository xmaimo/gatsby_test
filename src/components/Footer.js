import React from 'react';
import { Link } from 'gatsby';

import links from '../constants/links';
import socialIcons from '../constants/social-icons';
import styles from '../css/footer.module.css';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.links}>
				{links.map((link, i) => {
					return <Link key={i} to={link.path}>{link.text}</Link>;
				})}

			</div>
			<div className={styles.icons}>
				{socialIcons.map((icon, i) => {
					return (
						<a href={icon.url} key={i} target='_blank' rel='noopener noreferrer'>{icon.icon}</a>
					);
				})}
			</div>
			<div className={styles.copyright}>
				copyright &copy; backroads travel company { new Date().getFullYear() } all rights reserved
			</div>
		</footer>
	);
};

export default Footer;
