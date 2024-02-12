'use client'
import React, { useEffect } from 'react'

const error = ({error, reset}) => {
    useEffect(()=>{
        console.log(error)
    },[error])
  return (
    <div className='flex justify-center flex-col items-center m-auto bg-cyan-300 w-[20rem] rounded-[1rem] h-[5rem] ' >
      <h2>Something went wrong!</h2>
      <button className='bg-red-500 text-white px-6 py-2 '
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}

export default error