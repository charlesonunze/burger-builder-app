import React from 'react';
import styles from './ContactDetails.module.css';
import Button from '../../../components/UI/Button/Button';
import Input from '../../../components/UI/Input/Input';

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
		formIsValid: false
	};

	render() {
		const { name, email, street, zipCode, deliveryMethod } = this.state.orderForm;

		return (
			<div className={styles.ContactData}>
				<h4>Enter your contact details</h4>

				<Input
					elementType={name.elementType}
					elementConfig={name.elementConfig}
					value={name.value}
				/>
				<Input
					elementType={email.elementType}
					elementConfig={email.elementConfig}
					value={email.value}
				/>
				<Input
					elementType={street.elementType}
					elementConfig={street.elementConfig}
					value={street.value}
				/>
				<Input
					elementType={zipCode.elementType}
					elementConfig={zipCode.elementConfig}
					value={zipCode.value}
				/>
				<Input
					elementType={deliveryMethod.elementType}
					elementConfig={deliveryMethod.elementConfig}
					value={deliveryMethod.value}
				/>

				<Button btnType='Success' clicked={this.props.continuePurchase}>
					Complete Order
				</Button>
			</div>
		);
	}
}

export default ContactDetails;
