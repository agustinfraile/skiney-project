import { Button, Card } from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount'
import ItemDetailContainer from '../containers/ItemDetailContainer/ItemDetailContainer';

import './Item.css';
import { NavLink } from 'react-router-dom';

const Item = ({prod}) => {
return (
        <>
            <Card.Body className='card_body'>

                {/* datos de la card */}
                <Card.Img variant="top" src= {prod.foto} />

                <Card.Body>
                    <Card.Title>{ prod.nombre }</Card.Title>
                    {/* <Card.Text>{ prod.detalle }</Card.Text> */}

                    {/* <ItemDetailContainer /> */}

                    <NavLink to = { `detalle/${prod.id}` }>
                        <Button variant="outline-primary">Ver producto</Button>
                    </NavLink>


                </Card.Body>

                {/* contador y carrito */}
                {/* <ItemCount initial = {1} stock = {4}/> */}
                
            </Card.Body>
        </>
    )
}

export default Item