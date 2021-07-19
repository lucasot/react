import React, {useState} from 'react'
import image from './carmelook.jpeg'
import './ItemCount.css'

function ItemCount({initial, stock, onAdd}) {
    const [cantidad, setCantidad] = useState(1)
    const handdleAdd=()=>{
        if(cantidad<stock){
            setCantidad(cantidad+1)
        }
    }
    const handdleRemove=()=>{
        if(cantidad>initial){
            setCantidad(cantidad-1)
        }
    }
    const handdleOnAdd=()=>{
        onAdd(cantidad)
        console.log();
    }
    return (
        <>
            <div className="card text-center w-25">
                <div className="card-header"> 
                    <h4>Collares</h4>
                </div>
                <div>
                <img src={image} alt="carmelo" className="collar"></img>
                </div>
                <div className="card-body"> 
                    <button className="w-25" onClick={handdleRemove}>-</button>
                    <label className="alert alert-white">{cantidad}</label>
                    <button className="w-25" onClick={handdleAdd}>+</button>
                    <div>
                    <button className="btn btn-primary btn-block" onClick={handdleOnAdd}>Add to Cart</button>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default ItemCount
