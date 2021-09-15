import React, { useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/procesoPesado'
import { useCounter } from '../../hooks/useCounter'

import '../style.css'

export const MemoHook = () => {

    const { counter, increment } = useCounter( 10 )
    
    const [show, setShow] = useState(true)


    const memoProcess = useMemo(() => procesoPesado(1000), [ counter ])

    return (
        <div>
            <h1>Memo Hook</h1>
            <h3>Counter { counter }</h3>
            <hr></hr>

            <p>{ memoProcess }</p>

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
