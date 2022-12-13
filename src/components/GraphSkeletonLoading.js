import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function GraphSkeletonLoading() {
    return (
        <>
            <div className='w-full h-[342px] shadow-[0_0_3px_rgba(0,0,0,0.2)] rounded-lg bg-white p-4 flex flex-col gap-2'>
                <div className='h-[13%] flex items-center justify-between gap-2'>
                    <p className='w-full'>
                        <Skeleton height={40} />
                    </p>
                    <p className='w-full'>
                        <Skeleton height={40} />
                    </p>
                </div>
                <div className='w-full h-[82%]'>
                    <Skeleton width="100%" height="100%" />
                </div>
            </div>
        </>
    )
}

export default GraphSkeletonLoading