import React from 'react'

function OverviewBoxs({ title, paras }) {
    return (
        <div className='bg-white rounded-lg h-[500px] w-full shadow-[0_0_3px_rgba(0,0,0,0.2)] '>
            <div className='w-full h-[46px] bg-[#F4F4F4] flex items-center gap-[6px] p-[16px]'>
                <h3 className='text-[#635D5D] font-[600]'>{title}</h3>
                <p>{paras}</p>
            </div>
            <div className='p-[16px]'>

            </div>
        </div>
    )
}

export default OverviewBoxs