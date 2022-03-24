import React from 'react'
import { Card } from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount'

import './Item.css';

const Item = ({prod}) => {
return (
        <>

                {/* datos de la card */}
            <Card.Body className='card_body'>
                <Card.Img  variant="top" src= {prod.foto} />
                
                <Card.Body>
                    <Card.Title>{ prod.nombre }</Card.Title>
                    <Card.Text>{ prod.detalle }</Card.Text>

                    {/* contador y carrito */}
                    <ItemCount initial = {1} stock = {4}/>
                </Card.Body>
                
            </Card.Body>
        </>
    )
}

export default Item