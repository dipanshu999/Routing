import { useState } from 'react'
import {Link, Route, Routes} from "react-router-dom"
import Blog from './components/Blog'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import UserDetails from './components/UserDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>      

      <Routes> 
        <Route path="/" element={<Home/>} />
        <Route path="/user/" element={<About/> } />
        <Route path="/user/:name" element={<UserDetails/> } />
        <Route path="/blog" element={<Blog/>} />
      </Routes>
    </>
  )
}

export default App
