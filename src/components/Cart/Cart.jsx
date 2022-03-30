// react-boostrap
import { Button, Card } from "react-bootstrap"

// context
import { useCartContext } from "../../context/CartContext"


const Cart = () => {

    const { cartList } = useCartContext()
    console.log(cartList)

    return (
        <div>
            <Card.Body>
                <Card.Text>{ `Selecciono productos ` }</Card.Text>
                <Card.Text>{ `El total a pagar es $` }</Card.Text>
                <Button variant="outline-primary">Pagar</Button>
            </Card.Body>

            <div>
                
                {/* { cartList.map( pro => <li> {pro.nombre} </li> ) } */}
            </div>
        </div>
    )
}

export default Cart