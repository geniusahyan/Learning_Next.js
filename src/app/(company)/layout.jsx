'use client'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'

function layout({children}) {
    // useEffect(()=>{
    //     console.log('logging page view')
    // },[])

    const searchParams = useSearchParams();

    const updateSorting = (sortOrder)=>{
        const params = new URLSearchParams(searchParams.toString())
        params.set('sort', sortOrder);
        window.history.pushState(null, '', `?${params.toString()}`)
    }
    const pathname = usePathname();

    const switchLocale = (locale)=>{
        const newPath = `/${locale}${pathname}`;
        window.history.replaceState(null, '', newPath);
    }

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
        <footer className="border-t border-gray-200 py-6">
            {/* <button className='bg-blue-400 p-2 mr-2 ' onClick={()=>updateSorting('something')} >sort ascending</button>
            <button className='bg-red-400 p-2 ml-2 ' onClick={()=>updateSorting('desc')} >sort descending</button> */}
            <button className='bg-blue-400 p-2 mr-2 ' onClick={()=>switchLocale('en')} >English</button>
            <button className='bg-red-400 p-2 ml-2 ' onClick={()=>switchLocale('fr')} >French</button>
        </footer>
    </section>
  )
}

export default layout