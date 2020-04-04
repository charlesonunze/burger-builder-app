import React from 'react';
import styles from './Spinner.module.css';

const Spinner = props => {
	return (
		<div style={{ textAlign: 'center' }}>
			<div className={styles.Spinner}>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};

export default Spinner;
