import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext); 

function CartContextProvider( {children} ) {
    
    const [cartList, setCartList] = useState([])
    
    const agregarACart = (item) => {
        setCartList( [...cartList, item] )
    }

    return (
        <CartContext.Provider value={{
            cartList,
            agregarACart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider