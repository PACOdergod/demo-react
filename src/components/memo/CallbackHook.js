import React, { useCallback, useState } from 'react'

import '../style.css'
import { ShowIncrement } from './ShowIncrement'

export const CallbackHook = () => {

    const [counter, setCounter] = useState( 10 )

    const increment = useCallback(( num=1 )=>{
        setCounter( c => c + num )
    }, [])

    return (
        <div>
            <h1>useCallback Hook</h1>
            <hr></hr>

            <h2>Counter: { counter }</h2>

            <ShowIncrement increment={ increment }/>
        </div>
    )
}
