import React, { useEffect, useState } from 'react'
import {
    Chart as ChartJS,
    elements,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2'
import BoxLoading2 from '../loadingOverview/BoxLoading2';
import { doughnutData } from '../../Data';

ChartJS.register(
    elements,
);

function OverviewBoxs3({ theme }) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, [])

    const options = {
        elements: {
            arc: {
                borderWidth: 0
            }
        },
        title: {
            display: false
        },

        plugins: {
            legend: {
                display: false,
            },
        },
        cutout: "70%",
    };

    const data = {
        labels: doughnutData.map((ele) => ele.name),
        datasets: [
            {
                data: doughnutData.map((ele) => ele.data),
                backgroundColor: doughnutData.map((ele) => ele.bgColor),
            }
        ]
    };

    return (
        <>
            {
                isLoading ? (
                    <BoxLoading2 theme={theme} />
                ) : (
                    <div className={`${theme === 'dark' ? 'bg-[#242424]' : 'bg-white'} rounded-lg h-auto w-full shadow-[0_0_3px_rgba(0,0,0,0.2)]`}>
                        <div className={`w-full h-[46px] ${theme === 'dark' ? 'bg-[#635D5D]' : 'bg-[#F4F4F4]'} flex items-center gap-[6px] p-[16px] rounded-[0.5rem_0.5rem_0_0]`}>
                            <h3 className={`${theme === 'dark' ? 'text-white' : 'text-[#635D5D]'} font-[600]`}>Total Carbon in Energy</h3>
                        </div>
                        <div className='p-[16px]'>
                            <div className='h-[225px] w-full flex items-center justify-center my-2 relative'>

                                <div className='flex items-center justify-center absolute top-[28%] z-[1]'>
                                    <div className='flex items-center justify-center flex-col'>
                                        <h1 className={`${theme === 'dark' ? 'text-white' : 'text-black'} font-bold text-2xl`}>14,87,429</h1>
                                        <sup className={`${theme === 'dark' ? 'text-white' : 'text-black'} text-[12px] mt-4 mb-3`}>(kgCO2e)</sup>
                                        <div className='flex items-center'>
                                            {/* icons */}
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path d="M10 4.16658V15.8333" stroke="#00A310" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M4.1665 9.99992L9.99984 15.8333L15.8332 9.99992" stroke="#00A310" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            {/* text */}
                                            <span className='text-[#00A310] text-[18px]'>5.26%</span>
                                        </div>
                                        <div>
                                            <span className={`${theme === 'dark' ? 'text-white' : 'text-black'} text-[12px]`}>Since FY20</span>
                                        </div>
                                    </div>
                                </div>

                                <Doughnut data={data} options={options} className='z-10' />
                            </div>

                            <div className='w-full pt-4 flex flex-col gap-[16px]'>
                                {
                                    doughnutData.map((ele) => {
                                        return (
                                            <div key={ele.id} className='flex items-center justify-between'>
                                                <div className='flex items-center gap-3'>
                                                    <span className={`w-[20px] h-[20px] rounded-full`} style={{ backgroundColor: `${ele.bgColor}` }}></span>
                                                    <p className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>{ele.name}</p>
                                                </div>
                                                <div>
                                                    <span className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>{ele.data}%</span>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default OverviewBoxs3