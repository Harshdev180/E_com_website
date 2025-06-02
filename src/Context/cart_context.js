import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/cartReducer';

const CartContext = createContext();

//get the data for localstorage

const getLocalCartData = () => {
    let localCartData = localStorage.getItem("thapaCart");
    if (localCartData == []) {
        return [];
    }
    else {
        return JSON.parse(localCartData);
    }
};


const initialState = {
    // cart: [],
    cart: getLocalCartData(),
    total_item: "",
    total_price: "",
    shipping_fee: 50000,
};

const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const addToCart = (id, color, amount, product) => {
        dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } })
    };

    // increment or decrement the product
    const setDecrement = (id) => {
        dispatch({ type: "SET_DECREMENT", payload: id });
    };


    // increment or decrement the product
    const setIncrement = (id) => {
        dispatch({ type: "SET_INCREMENT", payload: id });
    };


    // to remove the individual item from cart
    const removeItem = (id) => {
        dispatch({ type: "REMOVE_ITEM", payload: id });
    };

    // to clear the Cart
    const clearCart = () => {
        dispatch({ type: "CLEAR_CART" });
    };


    // to add the data in localStorage
    // get vs set

    // set the data for localStorage

    useEffect(() => {
        dispatch({ type: "CART_TOTAL_ITEM" });
        localStorage.setItem("thapaCart", JSON.stringify(state.cart))
    }, [state.cart]);




    return <CartContext.Provider value={{ ...state, addToCart, removeItem, clearCart, setDecrement, setIncrement }}>
        {children}
    </CartContext.Provider>
}


const useCartContext = () => {
    return useContext(CartContext);
}

export { CartProvider, useCartContext };