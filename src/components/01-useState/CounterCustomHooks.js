import React from 'react'
import { useCounter } from '../../hooks/useCounter'

export const CounterCustomHooks = () => {

    const { state, increment, decrement, reset } = useCounter(100); 

    return (
        <>
            <h1>Counter with Hook: { state } </h1>
            <hr/>

            <button onClick={ () => increment(1) } className="btn btn-primary m-2" > +1 </button>
            <button onClick={ reset } className="btn btn-primary m-2" > Reset </button>
            <button onClick={ () => decrement(1) } className="btn btn-danger"> -1 </button>
        </>
    )
}
