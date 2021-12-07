import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ProductsProvider  from './Context/products.context';
import { UserProvider } from './Context/user.context';

ReactDOM.render(
	<UserProvider>
		<ProductsProvider>
			<App />
		</ProductsProvider>
	</UserProvider>,
	document.getElementById('root')
);
