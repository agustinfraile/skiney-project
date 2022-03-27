import { Card } from "react-bootstrap"
import ItemCount from "../ItemCount/ItemCount"

import './ItemDetail.css'

const ItemDetail = ({ producto }) => {


    return (
        <div className="card-detalle">
            <Card.Img variant="top" src= {producto.foto} />
            <Card.Title>{ producto.nombre }</Card.Title>
            <Card.Text>{ producto.detalle }</Card.Text>

            {/* contador y carrito */}
            <ItemCount initial = {1} stock = {producto.stock}/>
        </div>
    )
}

export default ItemDetail