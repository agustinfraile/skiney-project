import { Button, Card } from "react-bootstrap"

const Cart = () => {
    return (
        <div>
            <Card.Body>
                <Card.Text>{ `Selecciono productos ` }</Card.Text>
                <Card.Text>{ `El total a pagar es $` }</Card.Text>
                <Button variant="outline-primary">Pagar</Button>
            </Card.Body>
        </div>
    )
}

export default Cart