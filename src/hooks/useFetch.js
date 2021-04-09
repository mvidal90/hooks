import { useState, useEffect, useRef } from 'react';

export const useFetch = ( url ) => {

    const isMonted = useRef(true);
    const [state, setState] = useState({ data: null, loading: true, error: null});

    useEffect(() => {
        return() =>{
            isMonted.current = false;
        }
    }, [])

    useEffect(() => {
        
        setState({ data:null, loading:true, error:null});

        fetch( url )
            .then( resp => resp.json() )
            .then( data=>{

                if ( isMonted.current){
                    setState({
                        loading: false,
                        error: null,
                        data
                    });
                }
            })
            .catch( () => {
                setState({
                    data: null, 
                    loading: false, 
                    error: 'No se pudo cargar la info'
                })
            })

    }, [url]);

    return state;
}
