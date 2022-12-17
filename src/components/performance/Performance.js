import React from 'react'
import EnvironImpact from './EnvironImpact'
import Trends from './Trends'

function MainContent({theme}) {
    return (
        <>
            <div className='mt-8'>
                {/* Trends and charts.JS */}
                <div>
                    <Trends theme={theme} />
                </div>
                {/* EnvironImpact and Tables */}
                <div className='mt-10'>
                    <EnvironImpact theme={theme} />
                </div>
            </div>
        </>
    )
}

export default MainContent
