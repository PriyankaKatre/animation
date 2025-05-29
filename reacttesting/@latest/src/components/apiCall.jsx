import React, { use, useEffect, useState } from 'react';

const ApiCall = () =>{
    const [userData, setUserData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const fetchData = async function() {
        try {
            setIsLoading(true)
            const res = await fetch('https://dummyjson.com/users')
            const data = await res.json();
            setUserData(data.users);
            setIsLoading(false)
        }catch(e){
            console.log(e)
            setIsLoading(false)
            setIsError(true)
        }
      
    } 
    useEffect(() =>{
        fetchData()
    },[])
    if(userData && userData.length === 0) {
        return (
            <div>No users found..</div>
        )
     }
     if(isLoading) {
        return(
            <div>Loading...</div>
        )
     }
     if(isError) {
        return(
            <div>No users found..</div>
        )
     }

    return (
        <>
            {
                userData?.map(user =>{
                    return (
                        <div key={user.id}>
                            <div>{user.id}</div>
                            <div>{user.firstName}</div>
                            <div>{user.lastName}</div>
                         </div>
                    )
                })
            }
        </>
    )
}
export default ApiCall