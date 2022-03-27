import React from 'react'
import logo  from '../../../assets/images/LOGO FINAL FONDO TRANSPARENTE.png'

import './Logo.css'

const Logo = () => {
    return (
        <div className='logo-container'> 
            <img className='logo-container__img' src={logo} alt="logo skiney" />
        </div>
    )
}

export default Logo