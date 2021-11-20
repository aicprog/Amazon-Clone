import React, { createContext, useContext, useReducer, useEffect } from 'react';
import {
	ADD_TO_CART,
	DELETE_FROM_CART,
	TOGGLE_PRODUCT_AMOUNT,
	GET_TOTAL_CART_QUANTITY,
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
	totalCartQuantity: 0, 
	totalAmount: 0,
};

export const ProductsProvider = ({children}) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		dispatch({ type: GET_TOTAL_CART_QUANTITY });
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

	//get total amount
	const getTotalCartQuantity = () =>{
		dispatch({ type: GET_TOTAL_CART_QUANTITY });
	}

	return (
		<ProductsContext.Provider
			value={{
				...state,
				addToCart,
				removeFromCart,
				toggleProductAmount,
				getTotalCartQuantity,
			}}
		>
			{children}
		</ProductsContext.Provider>
	);
};

//export to pull info from the data layer
export const useProductsContext = () => {
	return useContext(ProductsContext);
};

export default ProductsProvider;
