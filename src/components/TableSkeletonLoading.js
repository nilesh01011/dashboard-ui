import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function TableSkeletonLoading({ tableList }) {

    let tableRow = [];

    for (let i = 0; i < tableList; i++) {
        tableRow.push(
            <div key={[i]} className='flex items-center justify-between gap-4'>
                <p className='w-[67%]'>
                    <Skeleton height={40} />
                </p>
                <div className='flex items-center justify-between gap-2 w-[32%]'>
                    <p className='w-full'>
                        <Skeleton width="100%" height={40} />
                    </p>
                    <p className='w-full'>
                        <Skeleton width="100%" height={40} />
                    </p>
                    <p className='w-full'>
                        <Skeleton width="100%" height={40} />
                    </p>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className='w-full h-[350px] shadow-[0_0_3px_rgba(0,0,0,0.2)] rounded-lg bg-white px-6 py-4'>
                <div className='mb-2'>
                    <Skeleton height={40} />
                </div>
                {tableRow}
            </div>
        </>
    )
}

export default TableSkeletonLoading