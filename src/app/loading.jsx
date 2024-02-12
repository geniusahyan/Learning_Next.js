import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function loading() {
  return (
    <SkeletonTheme className="w-screen h-[80vh] " baseColor="#0e7cc1" highlightColor="#fff">
      <p>
        <Skeleton width={'10rem'} className=' h-[3rem] '  count={2} />
        <Skeleton width={'15rem'} className=' h-[3rem] '  count={2} />
        <Skeleton width={'20rem'} className=' h-[3rem] '  count={2} />
      </p>
  </SkeletonTheme>
  )
}

export default loading