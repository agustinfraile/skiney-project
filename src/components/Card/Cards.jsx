import React from 'react'
import { Button, Card } from 'react-bootstrap'

import './Card.css'

const Cards = () => {
return (
<div>
    <Card className='card-center' style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </Card.Text>
            <Button href='#cart' variant="primary">Agregar al carrito</Button>
        </Card.Body>
    </Card>
</div>
)
}

export default Cards