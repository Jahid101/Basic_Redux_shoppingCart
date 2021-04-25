import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";

const initialState = {
    cart: [],
    products: [
        { name: 'lenovo', id: 1 },
        { name: 'Afsus', id: 2 },
        { name: 'Dell', id: 3 },
        { name: 'HP', id: 4 },
        { name: 'Toshiba', id: 5 }]
}

const cartReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const newItem = {
                productId: action.id,
                name: action.name,
                cartId: state.cart.length + 1
            }
            const newCart = [...state.cart, newItem];
            return { ...state, cart: newCart };

        case REMOVE_FROM_CART:
            const id = action.id;
            const remainingCart = state.cart.filter(item => item.cartId !== id);
            return { ...state, cart: remainingCart }

        default:
            return state;
    }
}

export default cartReducers;
