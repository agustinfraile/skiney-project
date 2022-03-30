// react-router-dom
import { NavLink } from 'react-router-dom';

// react-bootstrap 
import { Button, Card } from 'react-bootstrap'

// estilos
import './Item.css';

const Item = ({prod}) => {
return (
        <>
            <Card.Body className='card_body'>

                {/* datos de la card */}
                <Card.Img variant="top" src= {prod.foto} />

                <Card.Body>
                    <Card.Title>{ prod.nombre }</Card.Title>

                    <Card.Text>
                        ${ prod.precio }
                    </Card.Text>

                    <NavLink to = { `detalle/${prod.id}` }>
                        <Button variant="outline-primary">Ver producto</Button>
                    </NavLink>

                </Card.Body>
                
            </Card.Body>
        </>
    )
}

export default Item