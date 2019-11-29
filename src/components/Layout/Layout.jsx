import React from 'react';

const Layout = props => {
	return (
		<>
			<div>TOOLBAR</div>
			<div>SIDEBAR</div>
			<div>BACKDROP</div>

			<main>{props.children}</main>
		</>
	);
};

export default Layout;
