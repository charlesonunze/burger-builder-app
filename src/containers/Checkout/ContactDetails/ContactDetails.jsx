import React from 'react';
import styles from './ContactDetails.module.css';
import Button from '../../../components/UI/Button/Button';

class ContactDetails extends React.Component {
	state = {};
	render() {
		return (
			<div className={styles.ContactData}>
				<h4>Enter your contact details</h4>

				<input type='text' name='name' placeholder='Your Name' />
				<input type='text' name='email' placeholder='Your Mail' />
				<input type='text' name='street' placeholder='Street' />
				<input type='text' name='postal' placeholder='Postal Code' />

				<Button btnType='Success' clicked={this.props.continuePurchase}>
					Complete Order
				</Button>
			</div>
		);
	}
}

export default ContactDetails;
