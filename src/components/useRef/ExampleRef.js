import React, { useState } from 'react'
import { MultipleCustomHook } from '../exaples/MultipleCustomHook'

import '../style.css'

export const ExampleRef = () => {

    const [show, setShow] = useState(true)

    const handleShow = ()=>{
        setShow( !show )
    }

    return (
        <div>
            <button 
            className="btn btn-primary mb-3" 
            onClick={ handleShow }
            >
                Show/hide
            </button>

            <br/>

            {
                show && <MultipleCustomHook />
            }
        </div>
    )
}
