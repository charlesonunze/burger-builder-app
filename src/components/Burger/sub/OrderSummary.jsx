import React from 'react';
import styles from './OrderSummary.module.css';
import Button from '../../UI/Button/Button';

const OrderSummary = props => {
	const { ingredients, totalPrice } = props;

	const ingredientSummary = Object.keys(ingredients).map(
		(ingredientKey, index) => (
			<li key={index}>
				{ingredientKey}: {ingredients[ingredientKey]}
			</li>
		)
	);

	return (
		<div className={styles.OrderSummary}>
			<h4>Your Order</h4>
			<hr />
			<p>A delicious burger with the following ingredients:</p>
			<ul>{ingredientSummary}</ul>
			<hr />
			<h4>Total Price: {totalPrice.toFixed(2)}</h4>
			<h4>
				<Button btnType='Success' clicked={props.continuePurchase}>
					Continue
				</Button>
				<Button btnType='Danger' clicked={props.cancelPurchase}>
					Cancel
				</Button>
			</h4>
		</div>
	);
};

export default OrderSummary;
