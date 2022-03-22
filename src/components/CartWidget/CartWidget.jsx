import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './CartWidget.css'


import React from 'react'

const CartWidget = () => {
    return (
        <div className='cartWidget-container'>
            <a href='#cart'>
                <FontAwesomeIcon className='cartWidget-container_before'  icon = {faCartArrowDown} />
            </a>
        </div>
    )
}

export default CartWidget