import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function About() {
  const navigate=useNavigate();

  let goBack=()=>{
    navigate(-1);
  }
  return (  
    <div>
      <ul className='text-2xl text-center font-semibold list-none mt-8 mx-auto flex flex-col gap-2 w-[15%] '>
      <li className='bg-red-500 text-white p-2 rounded-md'>
          <Link to='/user/john'>John</Link>
      </li>

        <li className='bg-red-500 text-white p-2 rounded-md'>
          <Link to='/user/alexis'>Alexis</Link>
        </li>

        <li className='bg-red-500 text-white p-2 rounded-md'>
          <Link to='/user/bella'>Bella</Link>
        </li>

        <li className='bg-red-500 text-white p-2 rounded-md'>
          <Link to='/user/miguel'>Miguel</Link>
        </li>

      </ul>

      <button onClick={goBack} className='bg-black text-white p-1 rounded-md mx-auto mt-4 block' >Go back</button>
    </div>
  )
}
