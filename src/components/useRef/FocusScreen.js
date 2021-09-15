import React, { useRef } from 'react'
import '../style.css'

export const FocusScreen = () => {

    const inputRef = useRef()

    const handleClick = ()=>{
        document.querySelector('input').select()
    }


    return (
        <div>
            <h1>Foscus</h1>
            <hr></hr>

            <input
                ref={ inputRef }
                placeholder="Nombre"
                className="form-controll"
            />

            <br/>

            <button 
                className="btn btn-outline-primary mt-5"
                onClick={ handleClick }
            >
                Focus
            </button>
        </div>
    )
}
