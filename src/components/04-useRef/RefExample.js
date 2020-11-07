import React, { useState } from 'react'
import { MultipleCustomHook } from '../MultipleCustomHook';

export const RefExample = () => {

    const [ show, setShow ] = useState(false);

    return (
        <div>
            <h1>Ejemplo de uso de useRef</h1>
            <hr/>
            { show && <MultipleCustomHook /> }
        <button 
        className="btn btn-info"
        onClick={ () => {
            setShow( !show );
        }}
        >Mostrar/Ocultar</button>    

        </div>
    )
}
