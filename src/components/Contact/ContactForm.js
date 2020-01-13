import React from 'react';

import Title from '../Title';
import styles from '../../css/contact.module.css';

const ContactForm = () => {
	return (
		<section className={styles.contact}>
			<Title title='contact' subTitle='us' />

			<div className={styles.center}>
				<form 
					className={styles.form} 
					action="https://formspree.io/xmaimo77@yahoo.es"
  				method="POST"
				>
					<div>
						<label htmlFor="name">Name</label>
						<input type="text" name='name' id='name' placeholder='john smith' className={styles.formControl}/>
					</div>
					<div>
						<label htmlFor="email">Email</label>
						<input type="text" name='email' id='email' placeholder='johnsmith@yahoo.com' className={styles.formControl}/>
					</div>
					<div>
						<label htmlFor="message">Message</label>
						<textarea name="message" id="message" rows="10" className={styles.formControl} placeholder='hello there...'></textarea>
					</div>
					<div>
						<input type="submit" value='submit here' className={styles.submit} />
					</div>
				</form>
			</div>
		</section>
	);
};

export default ContactForm;
