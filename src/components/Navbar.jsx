import React from 'react'
import {Link, NavLink, Route, Routes} from "react-router-dom"
export default function Navbar() {
  return (
    <div>
      <nav className='flex gap-8 text-xl items-center justify-center p-4 bg-red-100'>

        <NavLink to="/" style={(e)=>{
          return {
            color: e.isActive? 'red':" " ,
            fontSize: e.isActive? '1.1em' : "",
            fontWeight: e.isActive? 'bold' : ""
          }
        }} > Home </NavLink>



        <NavLink to="/user" style={(e)=>{
          return {
            color: e.isActive? 'red':" ",
            fontSize: e.isActive? '1.1em' : "",
            fontWeight: e.isActive? 'bold' : ""
          }
        }} > User </NavLink>



        <NavLink to="/blog" style={(e)=>{
          return {
            color: e.isActive? 'red':" ",
            fontSize: e.isActive? '1.1em' : "",
            fontWeight: e.isActive? 'bold' : ""
          }
        }} >Blog</NavLink>

      </nav>
    </div>
  )
}
