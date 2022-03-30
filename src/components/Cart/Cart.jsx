// react-boostrap
import { Button, Card } from "react-bootstrap"

// context
import { useCartContext } from "../../context/CartContext"


const Cart = () => {

    const { cartList, limpiarCart} = useCartContext()
    console.log(cartList)

    return (
        <div>
            <div>
                { cartList.map( pro => <li> producto: {pro.nombre} <img src= {pro.foto}  /> precio: ${pro.precio} cantidad: {pro.cantidad} total: ${pro.cantidad * pro.precio} </li> ) }
            </div>

            <Card.Body>
                {/* <Card.Text>{ `Selecciono productos ` }</Card.Text> */}
                {/* <Card.Text>{ `El total a pagar es $` }</Card.Text> */}
                <Button  onClick={ limpiarCart } variant="outline-primary">Limpiar carrito</Button>
                <Button variant="outline-primary">Pagar</Button>
            </Card.Body>

        </div>
    )
}

export default Cart