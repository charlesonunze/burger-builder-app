import React from 'react';
import { Route } from 'react-router-dom';

import Spinner from '../../components/UI/Spinner/Spinner';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactDetails from './ContactDetails/ContactDetails';

class Checkout extends React.Component {
	state = {
		ingredients: null,
		price: 0
	};

	componentDidMount() {
		let query = new URLSearchParams(this.props.location.search);
		let ingredients = {};
		let price = 0;

		for (let i of query.entries()) {
			if (i[0] === 'price') {
				price += +i[1];
				continue;
			} else {
				ingredients[i[0]] = +i[1];
			}
		}

		this.setState({ ingredients, price });
	}

	continuePurchaseHandler = () => {
		this.props.history.replace('/checkout/contact-details');
	};

	cancelPurchaseHandler = () => {
		this.props.history.goBack();
	};

	render() {
		let checkoutSummary = !this.state.ingredients ? (
			<Spinner />
		) : (
			<div>
				<CheckoutSummary
					ingredients={this.state.ingredients}
					continuePurchase={this.continuePurchaseHandler}
					cancelPurchase={this.cancelPurchaseHandler}
				/>

				<Route
					path={this.props.match.url + '/contact-details'}
					render={props => (
						<ContactDetails
							price={this.state.price}
							ingredients={this.state.ingredients}
							{...props}
						/>
					)}
				/>
			</div>
		);

		return <div>{checkoutSummary}</div>;
	}
}

export default Checkout;
