'use client'

import { createContext, use, useContext } from "react";

const GrandParentContext = createContext(null);

const GrandParent =() =>{
    let name= 'pannalal'
    return (
        <GrandParentContext.Provider value='abc'>
            Hi, I am grand Parent
            <Parent />
        </GrandParentContext.Provider>
    )
}

const Parent =() =>{
    return (
        <>
            Hi, I am Parent
            <Child />
        </>
    )
}

const Child =() =>{
    const name = use(GrandParentContext)
    return (
        <>Hi, I am Child my grand parent name is {name}</>
    )
}




const ProviderContextPattern = () =>{
    return (
        <>
        <GrandParent />
        </>
    )
}

export default ProviderContextPattern