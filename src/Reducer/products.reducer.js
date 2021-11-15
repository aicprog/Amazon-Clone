import {ADD_TO_CART, DELETE_FROM_CART} from '../actions'

const products_reducer = (state, action) => {
	switch (action.type) {
		case ADD_TO_CART:
			return { ...state, cart: [...state.cart, action.payload] };
		case DELETE_FROM_CART:
			const tempCart = state.cart.filter((item) => item.id !== action.payload);
			return { ...state, cart: tempCart };

		default:
			throw new Error(`No Matching "${action.type}" - action type`);
		//return state;
	}
	
};

export default products_reducer;
