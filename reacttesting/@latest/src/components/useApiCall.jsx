import React, { use } from 'react';

const UseApiCall = ({user}) =>{
    const userRes =  use(user)

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