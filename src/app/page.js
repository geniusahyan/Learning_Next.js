import React from 'react'
const takeTime = async ()=>{
  await new Promise((res)=>{
    setTimeout(res,3000)
  })
}

export default async function page() {
  some
  // await takeTime();
  return (
    <div className='flex justify-center items-center h-screen ' >
      <h1 className='text-5xl text-[#782cdb] '>Hello world!</h1>
    </div>
  )
}
