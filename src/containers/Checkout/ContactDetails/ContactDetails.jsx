import React from 'react';
import styles from './ContactDetails.module.css';
import Button from '../../../components/UI/Button/Button';
import Input from '../../../components/UI/Input/Input';

import axios from '../../../axios-orders';

class ContactDetails extends React.Component {
	state = {
		orderForm: {
			name: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Your Name'
				},
				value: '',
				validation: {
					required: true
				},
				valid: false,
				touched: false
			},
			email: {
				elementType: 'input',
				elementConfig: {
					type: 'email',
					placeholder: 'Your E-Mail'
				},
				value: '',
				validation: {
					required: true,
					isEmail: true
				},
				valid: false,
				touched: false
			},
			street: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Street'
				},
				value: '',
				validation: {
					required: true
				},
				valid: false,
				touched: false
			},
			zipCode: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'ZIP Code'
				},
				value: '',
				validation: {
					required: true,
					minLength: 5,
					maxLength: 5,
					isNumeric: true
				},
				valid: false,
				touched: false
			},
			deliveryMethod: {
				elementType: 'select',
				elementConfig: {
					options: [
						{ value: 'fastest', displayValue: 'Fastest' },
						{ value: 'cheapest', displayValue: 'Cheapest' }
					]
				},
				value: 'fastest',
				validation: {},
				valid: true
			}
		},
		formIsValid: false,
		loading: false
	};

	submitFormHandler = event => {
		event.preventDefault();

		const formData = {};

		for (let formElementIdentifier in this.state.orderForm) {
			formData[formElementIdentifier] = this.state.orderForm[
				formElementIdentifier
			].value;
		}

		const order = {
			ingredients: this.props.ingredients,
			price: this.props.price.toFixed(2),
			orderData: formData,
			userId: this.props.userId
		};

		axios
			.post('/orders.json', order)
			.then(order => {
				this.setState({ loading: false });
				this.props.history.push('/');
			})
			.catch(e => {
				this.setState({ loading: false });
			});
	};

	handleInputChange = (event, inputId) => {
		let orderForm = { ...this.state.orderForm };
		orderForm[inputId].value = event.target.value;
		this.setState({ orderForm });
	};

	render() {
		const orderForm = { ...this.state.orderForm };
		const contactForm = Object.keys(this.state.orderForm).map(key => (
			<Input
				key={key}
				elementType={orderForm[key].elementType}
				elementConfig={orderForm[key].elementConfig}
				value={orderForm[key].value}
				handleUserInput={event => this.handleInputChange(event, key)}
			/>
		));

		return (
			<div className={styles.ContactData}>
				<h4>Enter your contact details</h4>

				<form onSubmit={this.submitFormHandler}>
					{contactForm}
					<Button btnType='Success'>Complete Order</Button>
				</form>
			</div>
		);
	}
}

export default ContactDetails;
