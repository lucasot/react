import React from 'react'
import './Button.css'

const STYLES = [
    'btn--primario',
    'btn--secundario'
]

const TAMANIO = [
    'btn--medio',
    'btn--grande'
]

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonTamanio
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkButtonTamanio = TAMANIO.includes(buttonTamanio) ? buttonTamanio : TAMANIO[0]

    return(
        <button className = {`btn ${checkButtonStyle} ${checkButtonTamanio}`} onClick = {onClick} 
        type={type}>
            {children}
        </button>
    )
}