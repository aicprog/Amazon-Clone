import React, { createContext, useContext, useReducer } from 'react';
import { ADD_TO_CART } from '../actions.js';
import reducer from '../Reducer/products.reducer.js';

//create context
const ProductsContext = createContext();

//initial state
const initialState = {
	basket: [],
};

export const ProductsProvider = (props: { children?: React.ReactChild }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const addToCart = (product) => {
		dispatch({ type: ADD_TO_CART, payload: product });
	};

	return (
		<ProductsContext.Provider value={{ ...state, addToCart }}>
			{props.children}
		</ProductsContext.Provider>
	);
};

//export to pull info from the data layer
export const useProductsContext = () => {
	return useContext(ProductsContext);
};

export default ProductsProvider;
