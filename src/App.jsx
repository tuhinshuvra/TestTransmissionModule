import './App.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Routes/Router'

function App() {
  return (
    <div className=' container'>
      <RouterProvider router={Router}></RouterProvider>
    </div>
  )
}

export default App
