import React, { use } from 'react';

const UseApiCall = ({user}) =>{
    const userRes =  use(user)
    console.log('response', userRes.users)

    return (
        <>
            {
                userRes.users.map(user =>{
                    return (
                        <>
                            <div>{user.id}</div>
                            <div>{user.firstName}</div>
                            <div>{user.lastName}</div>
                         </>
                    )
                })
            }
        </>
    )
}
export default UseApiCall