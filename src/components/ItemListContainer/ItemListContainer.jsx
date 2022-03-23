import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import { getFetch } from '../../helpers/getFetch'
import ItemList from '../ItemList/ItemList'


import './ItemListContainer.css'

const ItemListContainer = () => {

    
    // simulacion backend
    
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        // llamada a la api
        getFetch
            .then( (respuesta) => setProductos(respuesta) )
            .catch( error => console.log(error) )
            .finally( () => setLoading(false) )
    }, []);
    

    return (
        <>
            {/* condicional ternario para cuando esta cargando los productos */}
            {   loading ? <Spinner animation="border" role="status"> <span className="visually-hidden">Loading...</span> </Spinner> 
                :
                <ItemList />
            }
        </>
    )   
}

export default ItemListContainer