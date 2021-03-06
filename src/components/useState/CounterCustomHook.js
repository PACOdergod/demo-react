
import React from 'react'
import { useCounter } from '../../hooks/useCounter'

import './counter.css'

const CounterCustomHook = () => {

    const {state, increment, decrement, reset} = useCounter()

    return (
        <div>
            <h1>Counter with hook: { state }</h1>
            <hr/>

            <button className="btn btn-primary"
            onClick={ ()=> increment(2) }> +2 </button>

            <button className="btn btn-primary"
            onClick={ reset }> Reset </button>

            <button className="btn btn-primary"
            onClick={ ()=> decrement(2) }> -2 </button>
        </div>
    )
}

export default CounterCustomHook
