import React from 'react';
import styles from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';

const SideDrawer = props => {
	const classes = props.show
		? [styles.SideDrawer, styles.Open]
		: [styles.SideDrawer, styles.Close];

	return (
		<>
			<Backdrop show={props.show} clicked={props.closeSideDrawer} />
			<div className={classes.join(' ')}>
				<Logo height='11%' />
				<nav>
					<NavItems />
				</nav>
			</div>
		</>
	);
};

export default SideDrawer;
