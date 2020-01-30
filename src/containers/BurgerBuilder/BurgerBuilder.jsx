import React from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/sub/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/sub/OrderSummary';

import axios from '../../axios-orders';

import Spinner from '../../components/UI/Spinner/Spinner';
import HandleErrors from '../../components/HandleErrors/HandleErrors';

const INGREDIENT_PRICES = {
	meat: 1.5,
	salad: 0.5,
	bacon: 0.4,
	cheese: 0.2
};

class BurgerBuilder extends React.Component {
	state = {
		ingredients: null,
		totalPrice: 4,
		isPurchasable: false,
		isOrdering: false,
		loading: false,
		error: false
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
		// this.setState({ loading: true });

		// const order = {
		// 	ingredients: this.state.ingredients,
		// 	customer: {
		// 		name: 'Charles',
		// 		zip: '4038294'
		// 	},
		// 	burgerPrice: this.state.totalPrice,
		// 	totalPrice: this.state.totalPrice + 5
		// };

		// axios
		// 	.post('/orders.json', order)
		// 	.then(order => {
		// 		this.setState({ loading: false, isOrdering: false });
		// 	})
		// 	.catch(e => {
		// 		this.setState({ loading: false, isOrdering: false });
		// 	});

		let queryString = Object.entries(this.state.ingredients)
			.map(e => `${e[0]}=${e[1]}`)
			.join('&');

		this.props.history.push({
			pathname: '/checkout',
			search: '?' + encodeURI(queryString)
		});
	};

	cancelPurchaseHandler = () => {
		this.closeModalHandler();
	};

	componentDidMount() {
		axios
			.get('/ingredients.json')
			.then(res => {
				this.setState({ ingredients: res.data });
			})
			.catch(e => {
				this.setState({ error: true });
			});
	}

	render() {
		let burger = this.state.error ? (
			<p style={{ textAlign: 'center' }}>Ingredients could not be loaded.</p>
		) : (
			<Spinner />
		);

		let orderSummary = this.state.loading ? <Spinner /> : null;

		if (this.state.ingredients) {
			burger = (
				<>
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

			orderSummary = (
				<OrderSummary
					ingredients={this.state.ingredients}
					totalPrice={this.state.totalPrice}
					continuePurchase={this.continuePurchaseHandler}
					cancelPurchase={this.cancelPurchaseHandler}
				/>
			);
		}

		return (
			<>
				<Modal show={this.state.isOrdering} closeModal={this.closeModalHandler}>
					{orderSummary}
				</Modal>

				{burger}
			</>
		);
	}
}

export default HandleErrors(BurgerBuilder, axios);
