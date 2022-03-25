import React from 'react'
import { Card } from 'react-bootstrap'
import ItemListContainer from '../containers/ItemListContainer/ItemListContainer'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'

import './Card.css'

const Cards = () => {
return (
    <div className='card-center'>
        <ItemListContainer/>    
    </div>
)
}

export default Cards