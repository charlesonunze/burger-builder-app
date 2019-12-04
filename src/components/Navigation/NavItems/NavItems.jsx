import React from 'react';
import styles from './NavItems.module.css';
import NavItem from './NavItem/NavItem';

const NavItems = props => {
	return (
		<ul className={styles.NavItems}>
			<NavItem link='/' active>
				Burger Builder
			</NavItem>

			<NavItem link='/checkout'>Checkout</NavItem>
		</ul>
	);
};

export default NavItems;
