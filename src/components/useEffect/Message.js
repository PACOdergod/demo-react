import React, { useEffect } from 'react'

export const Message = () => {

    useEffect(() => {

        const mouseMove = (e)=>{
            // const coors = { x: e.x, y: e.y }
            // console.log(coors);
            console.log('se movio');
        }

        window.addEventListener('mousemove', mouseMove )

        return () => {
            console.log('Componente desmontado');
            window.removeEventListener('mousemove', mouseMove )
        }
    }, [])

    return (
        <div>
            <h1>Soy genial</h1>
        </div>
    )
}
