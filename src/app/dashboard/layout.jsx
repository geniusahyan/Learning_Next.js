import React from 'react'
import Some from './Some'

function DashLayout({children}) {
  return (
    <>
        <h2>this is DashLayout</h2>
        {children}
        <Some />
    </>
  )
}

export default DashLayout