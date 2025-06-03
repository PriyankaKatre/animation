'use client'

import React, { useCallback, useState } from 'react';

import PropTypes from 'prop-types';

const Button =React.memo(({clickHandler, label})=>{
    console.log('button re-render')
    return(
        <button className='border-1 px-5 px-2 text-[2rem]'
        onClick={()=>clickHandler()}>{label()}</button>
    )
})

Button.propTypes={    
clickHandler: PropTypes.func.isRequired,
label: PropTypes.string.isRequired,

}

const Counter =({count})=>{
    return(
        <div className='m-5' onClick={()=>clickHandler()}>{count}</div>
    )
}

Counter.propTypes= {
    count: PropTypes.number.isRequired
}

const withHOC = (Counter) =>{
    return(props)=>{
        return (
            <div>
                <h3>Counter from hoc</h3>
                <Counter {...props}/>
            </div>
        )
    }
}


const HOCPatter = withHOC(Counter)

const Container =() => {
    const [counter , setCounter] = useState(0)

    const handleIncrement = useCallback(() =>{
        setCounter((prev) => prev+1)
    },[])

    const handleDecrement = useCallback(() =>{
        setCounter((prev) => prev-1)
    },[])

    return(
        <>
            <h2>Counter Example</h2>
            <div className='flex'>
                {/* //Label is example of rander prop because it randers the element */}
                <Button clickHandler={handleIncrement} label={() =>{
                    return <span>increment</span>
                }}/>
                <HOCPatter count={counter}/>
                 {/* //Label is example of rander prop because it randers the element */}
                <Button clickHandler={handleDecrement} label={() =>{
                    return <span>decrement</span>
                }}/>
            </div>
        </>
    )
}

export default Container




