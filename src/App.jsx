import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './componets/Home'
import Cart from './componets/Cart'
import NavBar from './componets/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
       <NavBar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/cart' element={<Cart />}></Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
