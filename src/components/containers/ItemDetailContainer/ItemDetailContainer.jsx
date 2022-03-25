import { useEffect, useState } from 'react'
import { Button, Spinner } from 'react-bootstrap'
import { getFetch, getFetchName } from '../../../helpers/getFetch'
import ItemDetail from '../../ItemDetail/ItemDetail'


import './ItemDetailContainer'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({});
    const [loading, setLoading] = useState(true);

    // llamada a la api
    useEffect ( () => {
            getFetchName
            .then(resp => setProducto(resp.find(prod => prod.id === 1)))
            .catch( error => console.log(error) )
            .finally( () => setLoading(false) )
    
        }, [])
    console.log(producto)

    return (
        <>
            {/* condicional ternario para cuando esta cargando los productos */}
            {   loading ? <Spinner animation="border" role="status"> <span className="visually-hidden">Loading...</span> </Spinner> 
                :
                <div>
                    <Button variant="outline-primary">Ver más</Button> 
                    <ItemDetail producto = { producto }/>
                </div>
                    
            }
        </>
    )
}

export default ItemDetailContainer