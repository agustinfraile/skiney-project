import React from 'react'
import { productos } from '../../helpers/getFetch'
import Item from '../Item/Item'

const ItemList = () => {
    return (
        productos.map( ( prod, index ) => <Item key = { index } prod = { prod } />)
    )
}

export default ItemList