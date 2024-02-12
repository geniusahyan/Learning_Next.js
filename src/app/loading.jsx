import React, { Suspense } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function loading() {
  return (
    <Suspense>
        <SkeletonTheme className="w-screen h-[80vh] " baseColor="#1" highlightColor="#10e7ccfff">
        <p>
          <Skeleton width={'10rem'} className=' h-[3rem] '  count={2} />
          <Skeleton width={'15rem'} className=' h-[3rem] '  count={2} />
          <Skeleton width={'20rem'} className=' h-[3rem] '  count={2} />
        </p>
      </SkeletonTheme>
    </Suspense>
  )
}

export default loading