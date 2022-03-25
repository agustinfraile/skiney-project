import React from 'react'
import { Card } from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

import './Item.css';

const Item = ({prod}) => {
return (
        <>
            <Card.Body className='card_body'>

                {/* datos de la card */}
                <Card.Img variant="top" src= {prod.foto} />
                <Card.Body>
                    <Card.Title>{ prod.nombre }</Card.Title>
                    <Card.Text>{ prod.detalle }</Card.Text>
                    <ItemDetailContainer />
                </Card.Body>

                {/* contador y carrito */}
                <ItemCount initial = {1} stock = {4}/>
                
            </Card.Body>
        </>
    )
}

export default Item