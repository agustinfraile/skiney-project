import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext); 

function CartContextProvider( {children} ) {
    
    const [cartList, setCartList] = useState([])
    
    // funcion para agregar al carrito el producto seleccionado
    const agregarACart = (item) => {
        setCartList( [...cartList, item] )
    }   

    // funcion para limpiar toda la seccion de cart
    const limpiarCart = () => {
        setCartList( [] )
    }

    // funcion para determinar si el producto esta repetido
    const isInCart = (id) => {
        return cartList.some( (prod) => prod.id === id )
    }
    // const isInCart = (item) => {
    //     return cartList.find(manga => manga.id === item.id) === undefined;
    // }

    return (
        <CartContext.Provider value={{
            cartList,

            agregarACart,
            limpiarCart,
            isInCart
        }}>

            {children}
        
        </CartContext.Provider>
    )
}

export default CartContextProvider