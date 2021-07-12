import CartWidget from "../Cartwidget/CartWidget";
import cart from './carrito.svg'


export const menu = [
    {
        titulo: 'Home',
        url: '#',
        cName: 'nav-links'
    },
    {
        titulo: 'Products',
        url: '#',
        cName: 'nav-links'
    },
    {
        titulo: 'Contact Us',
        url: '#',
        cName: 'nav-links'
    },
    {
        titulo: 'Sing Up',
        url: '#',
        cName: 'nav-links'
    },
    {
        titulo: <img src={cart} alt="cart" className="cartwidget"></img>,
        url: '/cart',
        text: <CartWidget/>
    }

]