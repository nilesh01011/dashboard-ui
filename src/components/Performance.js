import React from 'react'
import EnvironImpact from './EnvironImpact'
import Trends from './Trends'

function MainContent() {
    return (
        <>
            <div className='mt-8'>
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