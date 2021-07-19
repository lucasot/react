import React from 'react'

const Promises1 = () => {

    const newPromise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(2);
        },1000);
        setTimeout(()=>{
            reject("Explotoooo!!!");
        },2000);
    });

    const onClickHandler = () => {
        newPromise
            .then((result) =>{
                setTimeout(()=>{
                    console.log(`then numero 1: ${result}`);
                },1000);
                return result +1;
            })
            .then((result) =>{
                setTimeout(()=>{
                    console.log(`then numero 2: ${result}`);
                },2000);
                return result +1;
            })
            .then((result) =>{
                setTimeout(()=>{
                    console.log(`then numero 3: ${result}`);
                },3000);
                return result +1;
            })
            .catch((err)=>{
                console.log (err);
            })
            .finally(()=>{
                console.log('Todo termina al fin SAD FACE')
            })
        };
        return(
            <>
            <h1>Hola</h1>
            <button onClick={onClickHandler}>Promesa num 1 </button>
            </>
        );
    };   

export default Promises1