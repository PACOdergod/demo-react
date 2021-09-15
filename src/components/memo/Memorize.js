import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'

import '../style.css'
import { Small } from './Small'

export const Memorize = () => {

    const { counter, increment } = useCounter( 10 )
    
    const [show, setShow] = useState(true)

    return (
        <div>
            <h1>Memorize <Small value={ counter }/> </h1>
            <hr></hr>

            <button className="btn btn-primary" onClick={increment}>
                Incrementar
            </button>

            <button className="btn btn-outline-primary ms-3" 
            onClick={()=>{
                setShow(!show)
            }}>
                Show/hide { JSON.stringify(show) }
            </button>
        </div>
    )
}
