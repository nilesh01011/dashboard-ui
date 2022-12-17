import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function BottomLoading1({ theme }) {
    return (
        <div className='flex xl:flex-row flex-col justify-between gap-[20px] w-full h-[216px]'>
            <div className={`xl:w-[66%] rounded-lg shadow-[0_0_3px_rgba(0,0,0,0.2)] ${theme === "light" ? 'bg-white' : 'bg-[#242424]'} p-4`}>
                <SkeletonTheme baseColor={`${theme === 'dark' ? '#444' : '#f5f5f5'}`} highlightColor={`${theme === 'dark' ? '#50535a' : '#ebebeb'}`}>
                    <div>
                        <Skeleton height={40} />
                    </div>
                    <div className='mt-3'>
                        <Skeleton height={125} />
                    </div>
                </SkeletonTheme>
            </div>
            <div className={`xl:w-[32.2%] rounded-lg shadow-[0_0_3px_rgba(0,0,0,0.2)] ${theme === "light" ? 'bg-white' : 'bg-[#242424]'} p-4`}>
                <SkeletonTheme baseColor={`${theme === 'dark' ? '#444' : '#f5f5f5'}`} highlightColor={`${theme === 'dark' ? '#50535a' : '#ebebeb'}`}>
                    <div>
                        <Skeleton height={40} />
                    </div>
                    <div className='mt-3'>
                        <Skeleton height={60} count={2} />
                    </div>
                </SkeletonTheme>
            </div>
        </div>
    )
}

export default BottomLoading1