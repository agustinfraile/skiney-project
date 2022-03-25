import { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { getFetch } from '../../../helpers/getFetch'
import ItemDetail from '../../ItemDetail/ItemDetail'


import './ItemDetailContainer'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})

    // llamada a la api
    useEffect ( () => {
            getFetch
            .then(resp => setProducto(resp.find(prod => prod.id === 1)))
    
        }, [])
    console.log(producto)

    return (
        <>
            <Button variant="outline-primary">Ver más</Button>   
            <ItemDetail producto = { producto }/>
        </>
    )
}

export default ItemDetailContainer