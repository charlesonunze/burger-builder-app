import React from 'react';
import BuildControl from './BuildControl';
import styles from './BuildControls.module.css';

const controls = [
	{ label: 'Salad', type: 'salad' },
	{ label: 'Bacon', type: 'bacon' },
	{ label: 'Cheese', type: 'cheese' },
	{ label: 'Meat', type: 'meat' }
];

const BuildControls = props => {
	const buildControls = controls.map(e => (
		<BuildControl
			label={e.label}
			key={e.type}
			add={() => props.onAdd(e.type)}
			remove={() => props.onDelete(e.type)}
		/>
	));
	return (
		<div className={styles.BuildControls}>
			<h4>Current Price: ${props.totalPrice.toFixed(2)}</h4>
			{buildControls}
		</div>
	);
};

export default BuildControls;
