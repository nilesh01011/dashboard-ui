import React from 'react'
import EnvironImpact from './EnvironImpact'
import Trends from './Trends'

function MainContent() {
    return (
        <>
            <div className='xl:px-14 md:px-10 px-4 mt-8'>
                {/* Trends and charts.JS */}
                <div>
                    <Trends />
                </div>
                {/* EnvironImpact and Tables */}
                <div className='mt-10'>
                    <EnvironImpact />
                </div>
            </div>
        </>
    )
}

export default MainContent