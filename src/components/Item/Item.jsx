import { Button, Card } from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount'
import ItemDetailContainer from '../containers/ItemDetailContainer/ItemDetailContainer';

import './Item.css';
import { NavLink } from 'react-router-dom';

const Item = ({prod}) => {
return (
        <>

            {/* datos de la card */}
            <Card.Body className='card_body'>
                <Card.Img  variant="top" src= {prod.foto} />
                
                <Card.Body>
                    <Card.Title>{ prod.nombre }</Card.Title>
                    {/* <Card.Text>{ prod.detalle }</Card.Text> */}

                    {/* <ItemDetailContainer /> */}

                    <NavLink to = { `detalle/${prod.id}` }>
                        <Button variant="outline-primary">Ver producto</Button>
                    </NavLink>

<<<<<<< HEAD
                    <ItemDetailContainer />
                    {/* contador y carrito */}
                </Card.Body>
                <ItemCount initial = {1} stock = {4}/>
        
=======

                </Card.Body>

                {/* contador y carrito */}
                {/* <ItemCount initial = {1} stock = {4}/> */}
                
>>>>>>> rama3
            </Card.Body>
        </>
    )
}

export default Item

