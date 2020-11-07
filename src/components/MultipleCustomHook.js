import React from 'react'
import { useCounter } from '../hooks/useCounter';
import { useFetch } from '../hooks/useFetch'

export const MultipleCustomHook = () => {

    const { counter, increment } = useCounter(1);

   const { loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
   //console.log(state)
   const { author, quote } = !!data && data[0];

    return (
        <div className="container">
            <h1>BreakingBad Quotes</h1>
            <hr/>
            {loading ? (
                <div className="alert alert-warning text-center" >
                    Loading
                </div>
                ) : (
                    <blockquote className="blockquote text-right" >
                        <p className="mb-0"> { quote } </p>
                        <footer className="blockquote-footer" > {author} </footer>
                    </blockquote>
                )
            }

            <button 
            className="btn btn-primary"
            onClick={ increment }
             >
                Siguiente Frase
            </button>


        </div>
    )
}
