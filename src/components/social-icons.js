import React from 'react';
import { Link } from 'gatsby';

import icons from '../constants/social-icons';

const SocialIcons = () => {
	const navIcons = icons.map(({ icon, url }) => {
		return (
			<li><Link to={url} key={url}>{icon}</Link></li>
		);
	});

	return (
		<ul>
			{navIcons}
		</ul>
	);
};

export default SocialIcons;
