'use client'
import Link from 'next/link'
import React, { useEffect } from 'react'

function layout({children}) {
    // useEffect(()=>{
    //     console.log('logging page view')
    // },[])
  return (
    <section className='py-24 '>
        <div className="container flex">
            <div className="border-r overflow-y-auto border-gray-200 py-6 pr-12 ">
                <nav className="flex flex-1 flex-col gap-y-4">
                    <ul>
                        <li><Link href={'/about'} >About</Link></li>
                        <li><Link href={'/contact'} >Contact</Link></li>
                    </ul>
                </nav>
            </div>
            <main className="ml-12 bg-gray-100 p-6 ">
                {children}
            </main>
        </div>
    </section>
  )
}

export default layout