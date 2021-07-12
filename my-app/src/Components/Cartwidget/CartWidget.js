import React from 'react'
import cart from './carrito.svg'
import './CartWidget.css'

const CartWidget = () => {
    return(
        <div>
            <img src={cart} alt="cart" className="cartwidget"></img>
        </div>
    )
}

export default CartWidget

