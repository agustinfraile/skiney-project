import { useState } from 'react';
import React from 'react';
import { Button, Card } from 'react-bootstrap';

import './ItemCount.css'

const ItemCount = ({initial, stock}) => {

    // destructuring del usestate
    const [count, setCount] = useState(initial);

    // funcion que me permite sumar el stock
    const handleCounterUp = () => {
        if(count > stock) {
            alert('No hay mas stock');
        } else {
            setCount(count+1);
        }
    }

    // funcion que me permite restar el stock
    const handleCounterDown = () => {
        // condicional para que no se pueda seguir restando cuando tenga la cantidad inicial
        if(count <= 1) {
            alert('No se puede seguir restando')
        } else {
            setCount(count-1);
        }
    }
    
    const onAdd = (cantidad) => {
        // condicional para que no se pueda seguir aumentado cuando llegue al stock
        if(cantidad > 1) {
            alert(`Seleccionaste ${cantidad} productos`);
        } else {
            alert(`Seleccionaste ${cantidad} producto`);
        }
    }

    // funcion para mostrar por consola la cantidad de productos que seleccione
    const AgregarCarrito = () => {
        onAdd(count)
    }

    return (
        <>
            <Card.Body className='card-conteneor__count'>
                <Button onClick={ handleCounterDown }>-</Button>
                <label>{ count }</label>
                <Button onClick={ handleCounterUp }>+</Button>
            </Card.Body>
            <Card.Body>
                <Button onClick={ AgregarCarrito } href='#cart' variant="primary">Agregar al carrito</Button>
            </Card.Body>
        </>
    )
}

export default ItemCount