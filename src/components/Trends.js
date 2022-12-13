import React from 'react'
import LineChart from './LineChart'
import StackedBar from './StackedBar'

function Trends() {
    return (
        <>
            <div className='flex flex-col'>
                <div className='flex items-center gap-2 mb-6'>
                    <img className='h-[28px]' src='./images/Union.svg' alt='Union-images' />
                    <h1 className='font-bold sm:text-2xl text-lg'>Trends YoY</h1>
                </div>
                <div className='flex lg:flex-row flex-col justify-between gap-5'>
                    <StackedBar />
                    <LineChart />
                </div>
            </div>
        </>
    )
}

export default Trends