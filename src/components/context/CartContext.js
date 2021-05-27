import React, { useState, useEffect, useReducer, useContext } from 'react';
import { CartReducer, sumItems } from './CartReducer';

export const CartContext = React.createContext([]);

const storage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
const initialState = { cartItems: storage, ...sumItems[storage], checkOut: false }

export const CartProvider = (props) => {
    const [state, dispatch] = useReducer(CartReducer, initialState);

    const addProduct = (payload) => {
        dispatch({ type: "ADD_ITEM", payload });
    }

    const increase = (payload) => {
        dispatch({ type: "INCREASE", payload })
    }

    const decrease = (payload) => {
        dispatch({ type: "DECREASE", payload })
    }

    const removeProduct = (payload) => {
        dispatch({ type: "REMOVE_ITEM", payload })
    }

    const contextValue = {
        addProduct,
        increase,
        decrease,
        removeProduct,
        ...state
    }

    return (
        <CartContext.Provider value={contextValue}>
            {props.children}
        </CartContext.Provider>
    );
}


// export const CartProvider = (props) => {
//     const initialState = (JSON.parse(window.localStorage.getItem('cart')) || []);
//     const [cart, setCart] = useState(initialState);

//     useEffect(() => {
//         window.localStorage.setItem('cart', JSON.stringify(cart));
//     }, [cart]);

//     return (
//         <CartContext.Provider value={[cart, setCart]}>
//             {props.children}
//         </CartContext.Provider>
//     );
// }