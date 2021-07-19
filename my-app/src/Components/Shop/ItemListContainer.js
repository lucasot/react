import React from 'react'
import ItemCount from '../Counter/ItemCount'
import Item from './Item'
import ItemList from './ItemList'

/*const ItemListContainer = ({greeting, user}) =>{
    
    return(
        <div className='banner'>
            <h1 className='greeting'>{greeting}</h1>
            <h2 className='user'>{user}</h2>
            
        </div>
    )
}*/

const handleCount=(cant)=>{
    alert(`Usted agrego: ${cant}`);
}

function ItemListContainer(){
    return(
        <div>
            <ItemCount stock={99} initial={1} onAdd={handleCount} />
            <Item/>
            <ItemList/>
        </div>
    )
}

export default ItemListContainer