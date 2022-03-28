import { useEffect, useState } from 'react'
import { Button, Spinner } from 'react-bootstrap'
import { getFetchName } from '../../../helpers/getFetch'
import ItemDetail from '../../ItemDetail/ItemDetail'
import { useParams } from "react-router-dom"


import './ItemDetailContainer'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({});
    const [loading, setLoading] = useState(true);

    const { detalleId } = useParams()
    // console.log(detalleId);

    // llamada a la api
    useEffect ( () => {
            getFetchName
            .then(resp => setProducto(resp.find(prod => prod.id === detalleId)))
            .catch( error => console.log(error) )
            .finally( () => setLoading(false) )
    
        }, [])
    // console.log(producto)

    return (
        <>
            {/* condicional ternario para cuando esta cargando los productos */}
            {   loading ? <Spinner animation="border" role="status"> <span className="visually-hidden">Loading...</span> </Spinner> 
                :
                <div>
                    <ItemDetail producto = { producto }/> 
                </div>
                    
            }
        </>
    )
}

export default ItemDetailContainer