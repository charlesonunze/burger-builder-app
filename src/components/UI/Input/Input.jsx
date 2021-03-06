import React from 'react';
import styles from './Input.module.css';

const Input = props => {
	let inputElement = null;

	switch (props.elementType) {
		case 'input':
			inputElement = (
				<input
					onChange={props.handleUserInput}
					className={styles.InputElement}
					{...props.elementConfig}
					value={props.value}
				/>
			);
			break;

		case 'textarea':
			inputElement = (
				<input
					onChange={props.handleUserInput}
					className={styles.InputElement}
					{...props.elementConfig}
					value={props.value}
				/>
			);
			break;

		case 'select':
			inputElement = (
				<select
					onChange={props.handleUserInput}
					className={styles.InputElement}
					{...props.elementConfig}
					value={props.value}
				>
					{props.elementConfig.options.map(opt => (
						<option key={opt.value} value={opt.value}>
							{opt.displayValue}
						</option>
					))}
				</select>
			);
			break;

		default:
			inputElement = (
				<input
					onChange={props.handleUserInput}
					className={styles.InputElement}
					{...props.elementConfig}
					value={props.value}
				/>
			);
			break;
	}

	return (
		<div className={styles.Input}>
			<label htmlFor=''>{props.label}</label>
			{inputElement}
		</div>
	);
};

export default Input;
