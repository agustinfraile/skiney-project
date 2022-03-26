import { Card } from "react-bootstrap"


const ItemDetail = ({ producto }) => {


    return (
        <div>
            <Card.Title>{ producto.nombre }</Card.Title>
            <Card.Text>{ producto.detalle }</Card.Text>
        </div>
    )
}

export default ItemDetail