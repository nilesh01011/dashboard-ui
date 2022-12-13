import React from 'react'
import { divisionsData, plantsData, regionsData } from '../Data';
import SelectBox from './SelectBox'
import TableList from './TableList';

function EnvironImpact() {
    return (
        <>
            <div className='mb-5 xl:w-full w-auto'>
                {/* heading */}
                <div className='flex justify-between w-full gap-4 lg:flex-row flex-col'>
                    {/* title text */}
                    <div className='flex items-center gap-2 whitespace-nowrap'>
                        <img className='h-[28px]' src='./images/Global.svg' alt='Global-images' />
                        <h1 className='font-bold sm:text-2xl text-lg'>Environmental Impact</h1>
                    </div>
                    <div className='flex items-center gap-4 max-h-max flex-wrap'>
                        <SelectBox items={divisionsData} />
                        <SelectBox items={plantsData} />
                        <SelectBox items={regionsData} />
                    </div>
                </div>
                <div className='mt-6'>
                    <TableList />
                </div>
            </div>
        </>
    )
}

export default EnvironImpact