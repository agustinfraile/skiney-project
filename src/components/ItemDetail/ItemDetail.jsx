import { useState } from "react"

import ItemCount from "../ItemCount/ItemCount"

import { useCartContext } from "../../context/CartContext"

import { Button, Card } from "react-bootstrap"
import './ItemDetail.css'
import { Link } from "react-router-dom"



const ItemDetail = ({ producto }) => {

    const [count, setCount] = useState(null)
    console.log(count)


    const { agregarACart, cartList, isInCart } = useCartContext()


    const onAdd = (cantidad) => {
        // condicional para que no se pueda seguir aumentado cuando llegue al stock
        if(cantidad > 1) {
            console.log(`Seleccionaste ${cantidad} productos`);
        } else {
            console.log(`Seleccionaste ${cantidad} producto`);
        }

        setCount(cantidad)
        agregarACart( { ...producto, cantidad: cantidad } )
    }

    console.log(cartList)

    

    return (
        <div className="card-detalle">
            <Card.Img variant="top" src= {producto.foto} />
            <Card.Title>{ producto.nombre }</Card.Title>
            <Card.Text>{ producto.detalle }</Card.Text>
            <Card.Title>{ `$${producto.precio}` }</Card.Title>


            {
                isInCart(producto.id) ?
                //contador y carrito 
                <Link to={"/cart"}>
                    <Button>Ir al carrito</Button>
                </Link>
                :
                <ItemCount initial = {1} stock = {producto.stock} onAdd = {onAdd} /> 
            }

        </div>
    )
}

export default ItemDetail