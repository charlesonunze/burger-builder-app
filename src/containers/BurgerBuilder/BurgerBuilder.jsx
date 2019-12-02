import React from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/sub/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/sub/OrderSummary';

const INGREDIENT_PRICES = {
	meat: 1.5,
	salad: 0.5,
	bacon: 0.4,
	cheese: 0.2
};

class BurgerBuilder extends React.Component {
	state = {
		ingredients: {
			salad: 0,
			bacon: 0,
			cheese: 0,
			meat: 0
		},
		totalPrice: 4,
		isPurchasable: false,
		isOrdering: false
	};

	addIngredientHandler = type => {
		const ingredients = { ...this.state.ingredients };
		const totalPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
		ingredients[type]++;
		this.updatePurchaseState({ ingredients, totalPrice });
	};

	removeIngredientHandler = type => {
		const ingredients = { ...this.state.ingredients };
		if (ingredients[type] < 1) return;
		const totalPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
		ingredients[type]--;
		this.updatePurchaseState({ ingredients, totalPrice });
	};

	updatePurchaseState = state => {
		const { ingredients } = state;
		const sum = Object.values(ingredients).reduce((sum, el) => sum + el, 0);
		this.setState({ ...state, isPurchasable: sum > 0 });
	};

	updateOrderState = () => {
		this.setState({ isOrdering: true });
	};

	closeModalHandler = () => {
		this.setState({ isOrdering: false });
	};

	continuePurchaseHandler = () => {
		alert('continue...');
	};

	cancelPurchaseHandler = () => {
		this.closeModalHandler();
	};

	render() {
		return (
			<>
				<Modal show={this.state.isOrdering} closeModal={this.closeModalHandler}>
					<OrderSummary
						ingredients={this.state.ingredients}
						totalPrice={this.state.totalPrice}
						continuePurchase={this.continuePurchaseHandler}
						cancelPurchase={this.cancelPurchaseHandler}
					/>
				</Modal>

				<Burger ingredients={this.state.ingredients} />

				<BuildControls
					totalPrice={this.state.totalPrice}
					onAdd={this.addIngredientHandler}
					onDelete={this.removeIngredientHandler}
					isPurchasable={this.state.isPurchasable}
					updateOrderState={this.updateOrderState}
				/>
			</>
		);
	}
}

export default BurgerBuilder;
