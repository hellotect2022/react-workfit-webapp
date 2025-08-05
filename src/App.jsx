import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import Router from './router/Router.jsx'

function App() {
  const [count, setCount] = useState(0)

  // return (
  //   <div>
  //     <LoginPage />
  //   </div>
  // )

  return <RouterProvider router={Router}/>
}

export default App
