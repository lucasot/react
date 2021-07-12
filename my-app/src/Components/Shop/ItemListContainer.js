import React from 'react'

const ItemListContainer = ({greeting, user}) =>{
    
    return(
        <div className='banner'>
            <h1 className='greeting'>{greeting}</h1>
            <h2 className='user'>{user}</h2>
        </div>
    )
}

export default ItemListContainer