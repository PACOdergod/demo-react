import React from 'react'

export const ShowIncrement = React.memo(({ increment }) => {

    console.log('me volvi a dibujar :0');

    return (
        <button className="btn btn-primary"
        onClick={ ()=>increment(5) }>
            incrementar
        </button>
    )
})