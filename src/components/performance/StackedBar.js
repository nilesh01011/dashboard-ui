import React, { useEffect, useState } from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import GraphSkeletonLoading from '../loadingPerformance/GraphSkeletonLoading';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

function StackedBar({ theme }) {
    const colors = theme === 'dark' ? '#fff' : '#000';

    const options = {
        plugins: {
            legend: {
                display: false,
            },
        },
        elements: {
            point: {
                radius: 0
            }
        },
        layout: {
            padding: {
                left: 20,
                right: 20,
                bottom: 20
            }
        },
        locals: 'en-IN',
        scales: {
            y: {
                stacked: true,
                grid: {
                    drawBorder: false, // <-- this removes y-axis line
                    lineWidth: 0,
                },
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'tCO2',
                    color: colors,
                    font: {
                        size: 14
                    }
                },
                ticks: {
                    color: colors
                },
            },
            x: {
                stacked: true,
                grid: {
                    drawBorder: false,
                    lineWidth: 0, // <-- this removes vertical lines between bars
                },
                color: 'red',
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Years',
                    color: colors,
                    font: {
                        size: 14
                    }
                },
                ticks: {
                    color: colors
                }
            }
        },
    };

    const labels = ['2017-18', '2018-19', '2019-20', '2020-21'];

    const data = {
        labels,
        datasets: [
            {
                barThickness: 45,
                maxBarThickness: 45,
                data: ['41777', '45768', '40654', '38144'],
                backgroundColor: '#2F575D',
            },
            {
                type: 'line',
                fill: false,
                data: ['41777', '45768', '40654', '38144'],
                borderColor: theme === 'dark' ? '#fff' : '#DEDEDE',
                borderWidth: 1,
            },
            {
                data: ['226950', '226950', '199768', '175862'],
                backgroundColor: '#529863',
                barThickness: 45,
                maxBarThickness: 45,
            },
            {
                type: 'line',
                fill: false,
                data: ['226950', '226950', '199768', '175862'],
                borderColor: theme === 'dark' ? '#fff' : '#DEDEDE',
                borderWidth: 1,
            },
            {
                data: ['329712', '218795', '584255', '636843'],
                backgroundColor: '#70AD47',
                barThickness: 45,
                maxBarThickness: 45,
                color: colors
            },
            {
                type: 'line',
                fill: false,
                data: ['329712', '218795', '584255', '636843'],
                borderColor: theme === 'dark' ? '#fff' : '#DEDEDE',
                borderWidth: 1,
            },
        ],

    };

    // ===============================================
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, [])

    return (
        <>
            {
                isLoading ? (
                    <GraphSkeletonLoading theme={theme} />
                ) : (
                    <div className={`h-full w-full  rounded-lg shadow-[0_0_3px_rgba(0,0,0,0.2)] ${theme === "dark" ? 'bg-[#242424]' : 'bg-white'}`}>
                        <div className={`h-full flex md:flex-row flex-col md:items-center justify-between ${theme === "dark" ? 'bg-[#635D5D]' : 'bg-[#F4F4F4]'} px-4 py-3 mb-2 rounded-[0.5rem_0.5rem_0_0]`}>
                            <h1 className={`sm:text-lg text-sm font-bold w-full max-w-max ${theme === "dark" ? 'text-white' : 'text-[#0B0B0C]'}`}>Carbon Emission Trend FY21</h1>
                            <div className='flex items-center gap-3'>
                                {/* Scope 1 */}
                                <div className='flex items-center gap-2'>
                                    <span className='w-[5px] p-[5px] bg-[#2F575D]'></span>
                                    <span className={`text-sm ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Scope 1</span>
                                </div>
                                {/* Scope 2 */}
                                <div className='flex items-center gap-2'>
                                    <span className='w-[5px] p-[5px] bg-[#529863]'></span>
                                    <span className={`text-sm ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Scope 2</span>
                                </div>
                                {/* Scope 3 */}
                                <div className='flex items-center gap-2'>
                                    <span className='w-[5px] p-[5px] bg-[#70AD47]'></span>
                                    <span className={`text-sm ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Scope 3</span>
                                </div>
                            </div>
                        </div>
                        <Bar options={options} data={data} />
                    </div>
                )
            }

        </>
    )
}

export default StackedBar
