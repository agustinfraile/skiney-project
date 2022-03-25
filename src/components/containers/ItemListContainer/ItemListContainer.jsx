import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import { getFetch } from '../../../helpers/getFetch'
import ItemList from '../../ItemList/ItemList'


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
    
<<<<<<< HEAD:src/components/ItemListContainer/ItemListContainer.jsx
    console.log(productos);

=======
    // console.log(productos)
>>>>>>> rama2:src/components/containers/ItemListContainer/ItemListContainer.jsx
    return (
        <>
            {/* condicional ternario para cuando esta cargando los productos */}
            {   loading ? <Spinner animation="border" role="status"> <span className="visually-hidden">Loading...</span> </Spinner> 
                :
                <ItemList productos = { productos } />
            }
        </>
    )   
}

export default ItemListContainer