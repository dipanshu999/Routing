import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function UserDetails() {

    let {name}=useParams();
    let navigate=useNavigate();  

    let handleClick=()=>{
        navigate(-1)
    }

  return (
    <div className='mt-8'>
      <h1 className='text-2xl ml-28' >Hii <span className=' text-[red] font-bold'> {name} </span> how are you</h1>
      <button  onClick={handleClick} className='bg-black text-white p-2 font-semibold text-xl ml-28 mt-4' >GO back</button>
    </div>
  )
}
 