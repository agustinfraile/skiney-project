import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './CartWidget.css'


import React from 'react'
import { Nav } from 'react-bootstrap';

const CartWidget = () => {
    return (
        <div className='cartWidget-container'>
            <Nav.Link href='#cart'>
                <FontAwesomeIcon  className='cartWidget-container_before'  icon = {faCartArrowDown} />
            </Nav.Link>
        </div>
    )
}

export default CartWidget