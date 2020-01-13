import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Title from '../Title';
import Tour from './Tour';
import styles from '../../css/items.module.css';

class TourList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tours: this.props.tours
		};
	}

	render() {
		return (
			<section className={styles.tours}>
				<Title title='our' subTitle='tours' />

				<div className={styles.center}>
					{
						this.state.tours.map(({ node }) => {
							return (
								<Tour key={node.contentful_id} tour={node} />
							);
						})
					}
				</div>
			</section>
		);
	}
}

TourList.propTypes = {
	tours: PropTypes.array
};

export default TourList;
