'use client'
import React, { useEffect } from 'react'

function template({children}) {
    useEffect(()=>{
        console.log('logging page view from template ')
    },[])
  return (
    <div>{children}</div>
  )
}

export default template