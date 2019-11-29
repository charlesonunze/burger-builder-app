import React from 'react';
import styles from './Burger.module.css';
import Ingredient from './Ingredient';

const Burger = props => {
	return (
		<div className={styles.Burger}>
			<Ingredient type='bread-top'></Ingredient>
			{/*  */}
			<Ingredient type='bread-bottom'></Ingredient>
		</div>
	);
};

export default Burger;
