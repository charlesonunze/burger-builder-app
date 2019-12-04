import React from 'react';
import styles from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const Toolbar = props => {
	return (
		<header className={styles.Toolbar}>
			<DrawerToggle clicked={props.openSideDrawer} />

			<Logo height='80%' />

			<nav className={styles.DesktopOnly}>
				<NavItems />
			</nav>
		</header>
	);
};

export default Toolbar;
