import React from 'react'
import cart from './canasta.svg'
import './CartWidget.css'

const CartWidget = () => {
    return(
        <div>
            <img src={cart} alt="cart" className="cartwidget"></img>
        </div>
    )
}

export default CartWidget

