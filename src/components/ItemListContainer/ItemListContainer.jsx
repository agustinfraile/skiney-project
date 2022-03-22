import React from 'react'
import ItemCount from '../ItemCount/ItemCount'


import './ItemListContainer.css'

const ItemListContainer = () => {

    return (
        <>
            <ItemCount initial = {1} stock = {4}/>
        </>
    )   
}

export default ItemListContainer