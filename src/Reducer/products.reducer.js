import {ADD_TO_CART} from '../actions'

const products_reducer = (state, action) => {
	switch (action.type) {
		case ADD_TO_CART:
			return{...state, basket: [...state.basket, action.payload]}

		default:
			throw new Error(`No Matching "${action.type}" - action type`);
			//return state;
	}
	
};

export default products_reducer;
