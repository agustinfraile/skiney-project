import { useState } from 'react';
import React from 'react'
import { Button, Card } from 'react-bootstrap'

const ItemCount = () => {

    // destructuring del usestate
    const [count, setCount] = useState(1);

    let contador = 0;

    // funcion que me permite sumar 
    const handleCounterUp = () => {
        setCount(count+1);
    }

    // funcion que me permite restar
    const handleCounterDown = () => {
        setCount(count-1);
    }



    return (
    <div>
        <Card.Body>
            <Button href='#cart' variant="primary">Agregar al carrito</Button>
        </Card.Body>
        <Card.Body>
            <Button onClick={ handleCounterDown }>-</Button>
            <label>{ count }</label>
            <Button onClick={ handleCounterUp }>+</Button>
        </Card.Body>

    </div>
)
}

export default ItemCount