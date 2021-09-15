import React, { useCallback } from 'react'
import { Hijo } from './Hijo'
import { useState } from 'react';

import '../style.css'

export const Padre = () => {

    const numeros = [2,4,6,8,10];
    const [valor, setValor] = useState(0);

    // const incrementar = ( num ) => {
    //     setValor( valor + num )
    // }

    const incrementar = useCallback(
        ( num ) => setValor( valor => valor+num ),
        [],
    )

    const reset = useCallback(
        () => setValor( 0 ),
        [],
    )


    return (
        <div>
            <h1>Padre</h1>
            <p> Total: { valor } </p>

            <hr />

            {
                numeros.map( n => (
                    <Hijo 
                        key={ n }
                        numero={ n }
                        incrementar={ incrementar }
                    />
                ))
            }

            <button className="btn btn-outline-primary mt-4"
            onClick={ reset }>
                Reset
            </button>

        </div>
    )
}
