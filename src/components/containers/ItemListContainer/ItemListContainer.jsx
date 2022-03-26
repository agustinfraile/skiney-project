import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { getFetch } from '../../../helpers/getFetch'
import ItemCount from '../../ItemCount/ItemCount'
import ItemList from '../../ItemList/ItemList'


import './ItemListContainer.css'

const ItemListContainer = () => {

    
    // simulacion backend
    
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    
    const { categoriaId } = useParams()
    // console.log(categoriaId)

    useEffect(() => {
        if (categoriaId) {
            // llamada a la api
            getFetch
            .then( (respuesta) => setProductos(respuesta.filter( product => product.categoria === categoriaId )) )
            .catch( error => console.log(error) )
            .finally( () => setLoading(false) )
            
        } else {
            
            // llamada a la api
            getFetch
                .then( (respuesta) => setProductos(respuesta) )
                .catch( error => console.log(error) )
                .finally( () => setLoading(false) )
        }
    }, [categoriaId]);
    

    // console.log(productos)
    return (
        <>
            {/* condicional ternario para cuando esta cargando los productos */}
            {   loading ? <Spinner animation="border" role="status"> <span className="visually-hidden">Loading...</span> </Spinner> 
                :
                <ItemList productos = { productos } />
            }
            {/* contador y carrito */}
            {/* <ItemCount initial = {1} stock = {4}/> */}
        </>
    )   
}

export default ItemListContainer