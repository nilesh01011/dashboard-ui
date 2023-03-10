import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function GraphSkeletonLoading({ theme }) {
    return (
        <>
            <div className={`w-full h-[342px] shadow-[0_0_3px_rgba(0,0,0,0.2)] rounded-lg ${theme === "light" ? 'bg-white' : 'bg-[#242424]'} p-4 flex flex-col gap-2`}>
                <SkeletonTheme baseColor={`${theme === 'dark' ? '#444' : '#f5f5f5'}`} highlightColor={`${theme === 'dark' ? '#50535a' : '#ebebeb'}`}>
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
                </SkeletonTheme>
            </div>
        </>
    )
}

export default GraphSkeletonLoading
