import React, { createContext, useContext, useReducer, useEffect } from 'react';
import {
	ADD_TO_CART,
	DELETE_FROM_CART,
	TOGGLE_PRODUCT_AMOUNT,
	GET_TOTAL_CART_QUANTITY,
	GET_PRODUCT_SUCCESS,
	GET_PRODUCTS_BEGIN,
	GET_CATEGORY_SUCCESS,
	GET_SEARCH_QUERY,
} from '../actions.js';
import reducer from '../Reducer/products.reducer.js';
import axios from 'axios';

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
	products: [],
	products_loading: false,
	category_items: [],
	cart: getLocalStorage(),
	totalCartQuantity: 0,
	totalAmount: 0,
	search_query: ''
};

const ProductsProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	let baseURL = 'https://fakestoreapi.com/products';

	//fetch all products
	const fetchProducts = async (url = `${baseURL}`) => {
		dispatch({ type: GET_PRODUCTS_BEGIN });
		try {
			const response = await axios.get(url);
			const products = response.data;
			dispatch({ type: GET_PRODUCT_SUCCESS, payload: products });
		} catch (error) {
			console.log(error);
			return error;
		}
	};
	//fetch based on category
	const fetchCategory = async (category = baseURL) => {
		const categoryUrl = `${baseURL}/category/${category}`;
		dispatch({ type: GET_PRODUCTS_BEGIN });
		try {
			const response = await axios.get(categoryUrl);
			const products = response.data;
			dispatch({ type: GET_CATEGORY_SUCCESS, payload: products });
		} catch (error) {
			console.log(error);
			return error;
		}
	};

	//fetch based on search
	const fetchQuery = async() =>{

	}

	useEffect(() => {
		dispatch({ type: GET_TOTAL_CART_QUANTITY });
		localStorage.setItem('cart', JSON.stringify(state.cart));
	}, [state.cart]);

	useEffect(() => {
		fetchProducts();
	}, []);

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
	const getTotalCartQuantity = () => {
		dispatch({ type: GET_TOTAL_CART_QUANTITY });
	};

	return (
		<ProductsContext.Provider
			value={{
				...state,
				addToCart,
				removeFromCart,
				toggleProductAmount,
				getTotalCartQuantity,
				fetchProducts,
				fetchCategory,
				fetchQuery,
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
