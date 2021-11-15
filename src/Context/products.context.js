import React, { createContext, useContext, useReducer, useEffect } from 'react';
import {
	ADD_TO_CART,
	DELETE_FROM_CART,
	TOGGLE_PRODUCT_AMOUNT,
} from '../actions.js';
import reducer from '../Reducer/products.reducer.js';

//create context
const ProductsContext = createContext();

//local storage
const getLocalStorage = () => {
	const cart = localStorage.getItem('cart');

	if (cart) {
		return JSON.parse(cart);
	} else {
		return [];
	}
};

//initial state
const initialState = {
	cart: getLocalStorage(),
};

export const ProductsProvider = (props: { children?: React.ReactChild }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(state.cart));
	}, [state.cart]);

	const addToCart = (product) => {
		dispatch({ type: ADD_TO_CART, payload: product });
	};
	const removeFromCart = (id) => {
		dispatch({ type: DELETE_FROM_CART, payload: id });
	};
	const toggleProductAmount = (id, amount) => {
		dispatch({ type: TOGGLE_PRODUCT_AMOUNT, payload: { id, amount } });
	};

	return (
		<ProductsContext.Provider value={{ ...state, addToCart, removeFromCart, toggleProductAmount }}>
			{props.children}
		</ProductsContext.Provider>
	);
};

//export to pull info from the data layer
export const useProductsContext = () => {
	return useContext(ProductsContext);
};

export default ProductsProvider;
