import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function BoxLoading2({ theme }) {
    return (
        <div className={`w-full h-[605px] shadow-[0_0_3px_rgba(0,0,0,0.2)] rounded-lg ${theme === "light" ? 'bg-white' : 'bg-[#242424]'} p-4 flex flex-col gap-2`}>
            <SkeletonTheme baseColor={`${theme === 'dark' ? '#444' : '#f5f5f5'}`} highlightColor={`${theme === 'dark' ? '#50535a' : '#ebebeb'}`}>
                <div>
                    <Skeleton height={40} />
                </div>
                <div>
                    <Skeleton height={235} />
                    <div className='mt-2 flex flex-col gap-3'>
                        <Skeleton count={7} height={34} />
                    </div>
                </div>
            </SkeletonTheme>
        </div>
    )
}

export default BoxLoading2