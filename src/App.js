import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/BurgerBuilder/Checkout';

function App() {
	return (
		<div>
			<Layout>
				<Switch>
					<Route path='/' component={BurgerBuilder} exact />
					<Route path='/checkout' component={Checkout} exact />
				</Switch>
			</Layout>
		</div>
	);
}

export default App;
