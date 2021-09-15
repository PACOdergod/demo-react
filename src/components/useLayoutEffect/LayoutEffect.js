import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'

import './layout.css'

export const LayoutEffect = () => {

    const { counter, increment } = useCounter(1)

    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`)
    const { quote } = !!data && data[0];

    const parrafo = useRef()

    const [boxSize, setBoxSize] = useState({})

    useLayoutEffect(()=>{
        setBoxSize(parrafo.current.getBoundingClientRect())
    },[quote])
    
    return (
        <div>
            <h1>Layuot Effect</h1>
            <hr/>

            <blockquote className="blockquote text-right">
                <p ref={ parrafo }>{ quote }</p>
            </blockquote>

            <pre>{ JSON.stringify(boxSize, null, 4)}</pre>


            <button className="btn btn-primary" onClick={ increment }>
                Siguiente
            </button>

        </div>
    )
}
