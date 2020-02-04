import React from 'react';
import { Route } from 'react-router-dom';

import Spinner from '../../components/UI/Spinner/Spinner';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactDetails from './ContactDetails/ContactDetails';

class Checkout extends React.Component {
	state = {
		ingredients: null
	};

	componentDidMount() {
		let query = new URLSearchParams(this.props.location.search);
		let ingredients = {};

		for (let i of query.entries()) {
			ingredients[i[0]] = +i[1];
		}
		this.setState({ ingredients });
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
					component={ContactDetails}
				/>
			</div>
		);

		return <div>{checkoutSummary}</div>;
	}
}

export default Checkout;
