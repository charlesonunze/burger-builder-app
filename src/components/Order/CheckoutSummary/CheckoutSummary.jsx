import React from 'react';
import styles from './CheckoutSummary.module.css';
import Button from '../../UI/Button/Button';
import Burger from '../../Burger/Burger';

const CheckoutSummary = props => {
	return (
		<div className={styles.CheckoutSummary}>
			<h1>We hope it tastes well!</h1>

			<div style={{ width: '100%', margin: 'auto' }}>
				<Burger ingredients={props.ingredients} />
			</div>

			<Button btnType='Success' clicked={props.continuePurchase}>
				Continue
			</Button>

			<Button btnType='Danger' clicked={props.cancelPurchase}>
				Cancel
			</Button>
		</div>
	);
};

export default CheckoutSummary;
