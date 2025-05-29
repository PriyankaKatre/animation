import React, { Suspense, useState } from 'react'
import Counter from './components/counter'
import UseApiCall from './components/useApiCall'
import ApiCall from './components/apiCall'


function App() {
  const [count, setCount] = useState(0)
  const [user, setUser] = useState([])
   const fetchData = async function() {
      const res = await fetch('https://dummyjson.com/users')
      const data = await res.json();
      return data;
    } 

    const userData = fetchData()

  return (
    <>
     <Counter />
     <ApiCall />
     <Suspense fallback={<p>waiting for message...</p>}>
      <UseApiCall user={userData}/>
     </Suspense>     
    </>
  )
}

export default App
