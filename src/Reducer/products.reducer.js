import {
	ADD_TO_CART,
	DELETE_FROM_CART,
	TOGGLE_PRODUCT_AMOUNT,
	GET_TOTAL_CART_QUANTITY,
} from '../actions';

const products_reducer = (state, action) => {
	let tempCart = [];
	switch (action.type) {
		//see if item already exists

		case ADD_TO_CART:
			//check if item already exists
			const newProductQuanitity = parseInt(action.payload.amount);
			const existingCartItem = state.cart.find(
				(cartItem) => cartItem.id === action.payload.id
			);
			//if existing
			if (existingCartItem) {
				tempCart = state.cart.map((product) => {
					if (product.id === existingCartItem.id) {
						// totalItems += newProductQuanitity;
						return {
							...product,
							amount: parseInt(product.amount) + parseInt(newProductQuanitity),
						};
					} else {
						return product;
					}
				});

				return { ...state, cart: tempCart };
			}
			//if there is no existing cart item, then just add item
			return {
				...state,
				cart: [
					...state.cart,
					{ ...action.payload, amount: newProductQuanitity },
				],
			};
		case DELETE_FROM_CART:
			tempCart = state.cart.filter((item) => item.id !== action.payload);
			return { ...state, cart: tempCart };
		case TOGGLE_PRODUCT_AMOUNT:
			let { id, amount } = action.payload;
			tempCart = state.cart.map((product) => {
				if (product.id === id) {
					amount = amount < 1 ? 1 : amount;
					return { ...product, amount: amount };
				} else {
					return product;
				}
			});
			return { ...state, cart: tempCart };
		case GET_TOTAL_CART_QUANTITY:
			const { totalCartQuantity, totalAmount } = state.cart.reduce(
				(total, product) => {
					const { amount, price } = product;
					total.totalCartQuantity += parseInt(amount);
					total.totalAmount += price * amount;
					return total;
				},
				{ totalCartQuantity: 0, totalAmount: 0 }
			);

			return { ...state, totalCartQuantity, totalAmount };

		default:
			throw new Error(`No Matching "${action.type}" - action type`);
		//return state;
	}
};

export default products_reducer;
