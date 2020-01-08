import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import links from '../constants/links';
import socialIcons from '../constants/social-icons';
import styles from '../css/footer.module.css';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.links}>
				{links.map((link, i) => {
					return (
						<AniLink 
							key={i} 
							to={link.path}
							fade
							duration={2}
						>
							{link.text}
						</AniLink>
					);
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
