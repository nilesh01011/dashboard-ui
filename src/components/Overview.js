import React from 'react'
import { divisionsData, fullYearsOverview, plantsData, regionsData } from '../Data'
import OverviewBoxs from './OverviewBoxs'
import SelectBox from './SelectBox'

function Overview() {
    return (
        <div className='mt-8'>
            <div className='flex flex-col'>
                {/* title and selectboxs */}
                <div className='flex items-center justify-between mb-6'>
                    {/* titles */}
                    <div className='flex items-center gap-2'>
                        <img className='h-[28px]' src='./images/Dashboard.svg' alt='Union-images' />
                        <h1 className='font-bold sm:text-2xl text-lg'>Dashboard</h1>
                    </div>

                    {/* selectBox */}
                    <div className='flex gap-[20px]'>
                        <SelectBox items={fullYearsOverview} />
                        <SelectBox items={divisionsData} />
                        <SelectBox items={plantsData} />
                        <SelectBox items={regionsData} />
                    </div>

                </div>
                {/* overview Boxs */}
                <div className='flex gap-[20px] mb-6'>
                    <OverviewBoxs title="Total Carbon Footprint" paras="(Scope 1 & Scope 2)" />
                    <OverviewBoxs title="Intensity Metrics" paras="(Scope 1 & Scope 2)" />
                    <OverviewBoxs title='Total Carbon in Energy' />
                </div>
            </div>
        </div>
    )
}

export default Overview
