import { redirect } from 'next/navigation';
import React from 'react'

export const metadata = {
  title: 'about',
  description: 'about page',
  keywords: ['about', 'page']
}

const fetchgithub = async ()=>{
  const res = await fetch('https://api.github.com/users/geniusahyan')
  return await res.json();
}
async function Page() {
  const fetch = await fetchgithub();
  if (fetch) {
    // redirect('/contact')
  }
  return (
    <div className='text-5xl font-bold text-[#7933d4] ' >About</div>
  )
}

export default Page