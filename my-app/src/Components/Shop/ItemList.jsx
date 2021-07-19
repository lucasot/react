import React, { useState} from 'react';

const Promises2 =() =>{
    const [valueForm, setValueForm] = useState();

    const multiplicador = async (valor) => {
        if (valor > 2000){
            return Promise.reject('demasiado alto!!!');
        }
        let nuevoValor = valor * valor;
        console.log (nuevoValor);
        return nuevoValor;
    };

    const handleClick = async (valor) =>{
        try {
            const result1 = await multiplicador(valor);
            const result2 = await multiplicador(result1);
            const result3 = await multiplicador(result2);
            console.log(`El valor final es: ${result3}`);
        } catch(err){
            console.log(`Mostrar error: ${err}`);
        }
        finally{
            console.log('Todo tiene un final TODO TERMINA SAD FACE')
        }
    };
    return (
        <>
            <form>
                <input
                placeholder="Escriba aqui"
                onChange={(e)=>{
                    setValueForm(e.target.value);
                }}
                ></input>
                <button
                type="submit"
                onClick={(e) => {
                e.preventDefault();
                handleClick(valueForm);
                }}
                >
                    Promesa num 2
                </button>
            </form>
        </>
    );
};

export default Promises2
