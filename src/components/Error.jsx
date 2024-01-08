import React from 'react'
import transition from '../Transition';
import { Link } from 'react-router-dom';
const Error = () => {
  return (
    <div className='h-screen bg-black w-full flex flex-col gap-2 justify-center items-center'>
      <h1 className='text-red-800 border-2 bg-red-400 border-red-600 rounded-lg text-3xl py-2 px-3'>Page not found 404</h1>
      <Link to='/Bireysel-Silahlanma' className='text-red-800 border-2 border-red-600 rounded-lg text-3xl py-1 px-3 hover:text-green-400 hover:border-green-300 duration-300'>Go Back</Link>
    </div>
  )
}

export default transition(Error);