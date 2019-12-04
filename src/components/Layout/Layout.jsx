import React from 'react';
import styles from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends React.Component {
	state = {
		showSideDrawer: false
	};

	closeSideDrawerHandler = () => {
		this.setState({ showSideDrawer: false });
	};

	openSideDrawerHandler = () => {
		this.setState({ showSideDrawer: true });
	};

	render() {
		return (
			<>
				<Toolbar openSideDrawer={this.openSideDrawerHandler} />

				<SideDrawer
					show={this.state.showSideDrawer}
					closeSideDrawer={this.closeSideDrawerHandler}
				/>

				<main className={styles.Content}>{this.props.children}</main>
			</>
		);
	}
}

export default Layout;
