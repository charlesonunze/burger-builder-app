import React from 'react';
import styles from './Burger.module.css';
import Ingredient from './sub/Ingredient';

const Burger = props => {
	let ingredients = Object.keys(props.ingredients)
		.map(igKey =>
			[...Array(props.ingredients[igKey])].map((_, i) => (
				<Ingredient key={igKey + i} type={igKey} />
			))
		)
		.reduce((arr, el) => arr.concat(el), []);

	if (ingredients.length === 0) {
		ingredients = <p>Please start adding ingredients!</p>;
	}

	return (
		<div className={styles.Burger}>
			<Ingredient type='bread-top' />
			{ingredients}
			<Ingredient type='bread-bottom' />
		</div>
	);
};

export default Burger;
