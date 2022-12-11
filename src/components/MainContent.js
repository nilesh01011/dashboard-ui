import React from 'react'
import EnvironImpact from './EnvironImpact'
import LineChart from './LineChart'
import StackedBar from './StackedBar'

function MainContent() {
    return (
        <>
            <div className='xl:px-14 md:px-10 px-4 mt-8'>
                {/* charts.JS */}
                <div className='flex flex-col'>
                    <div className='flex items-center gap-2 mb-6'>
                        <img className='h-[28px]' src='./images/Union.png' alt='Union-images' />
                        <h1 className='font-bold sm:text-2xl text-lg'>Trends YoY</h1>
                    </div>
                    <div className='flex lg:flex-row flex-col justify-between gap-5 lg:h-[350px]'>
                        <StackedBar />
                        <LineChart />
                    </div>
                </div>
                <div className='mt-8'>
                    <EnvironImpact />
                </div>
            </div>
        </>
    )
}

export default MainContent