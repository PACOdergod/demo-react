import { useEffect, useRef, useState } from "react"

export const useFetch = ( url ) => {

    const mounted = useRef(true)

    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null
    })

    useEffect(() => {
        return () => {
            mounted.current = false
        }
    }, [])

    useEffect(()=>{

        setState({
            data: null,
            loading: true,
            error: null
        })

        fetch( url ).then( res => res.json()).then( data =>{
            if (mounted.current){
                setState({
                    loading: false,
                    error: null,
                    data: data
                })
            }
        })
    }, [url])

    return state
}
