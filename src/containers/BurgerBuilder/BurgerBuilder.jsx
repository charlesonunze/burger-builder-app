import React from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/sub/BuildControls';

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
		totalPrice: 4
	};

	addIngredientHandler = type => {
		const ingredients = { ...this.state.ingredients };
		const totalPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
		ingredients[type]++;
		this.setState({ ingredients, totalPrice });
	};

	removeIngredientHandler = type => {
		const ingredients = { ...this.state.ingredients };
		if (ingredients[type] < 1) return;
		const totalPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
		ingredients[type]--;
		this.setState({ ingredients, totalPrice });
	};

	render() {
		return (
			<>
				<Burger ingredients={this.state.ingredients} />

				<BuildControls
					totalPrice={this.state.totalPrice}
					onAdd={this.addIngredientHandler}
					onDelete={this.removeIngredientHandler}
				/>
			</>
		);
	}
}

export default BurgerBuilder;
