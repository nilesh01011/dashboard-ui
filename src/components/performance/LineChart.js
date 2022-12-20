import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
} from 'chart.js';
import GraphSkeletonLoading from '../loadingPerformance/GraphSkeletonLoading';
import { lineChartData } from '../../Data';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
);

function LineChart({ theme }) {
    const colors = theme === 'dark' ? '#fff' : '#000';

    const options = {

        layout: {
            padding: {
                left: 20,
                right: 20,
                bottom: 20
            }
        },
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            y: {
                grid: {
                    drawBorder: false, // <-- this removes y-axis line
                    lineWidth: 0
                },
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'tCO2',
                    font: {
                        size: 14
                    },
                    color: colors
                },
                ticks: {
                    color: colors
                },
            },
            x: {
                grid: {
                    drawBorder: false,
                    lineWidth: 0 // <-- this removes vertical lines between bars
                },
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Years',
                    font: {
                        size: 14
                    },
                    color: colors
                },
                ticks: {
                    color: colors
                },
            }
        }

    };

    const labels = lineChartData.map((ele) => ele.date);

    const data = {
        labels,
        datasets: [
            {
                data: lineChartData.map((ele) => ele.number),
                borderColor: colors,
                borderWidth: 2,
            }
        ],
    };

    // ====================================
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
                    <div className={`h-full w-full rounded-lg shadow-[0_0_3px_rgba(0,0,0,0.2)] ${theme === 'dark' ? 'bg-[#242424]' : 'bg-white'}`}>
                        <div className={`flex md:flex-row flex-col md:items-center justify-between ${theme === 'dark' ? 'bg-[#635D5D]' : 'bg-[#F4F4F4]'} px-4 py-3 mb-2 rounded-[0.5rem_0.5rem_0_0]`}>
                            <h1 className={`sm:text-lg text-sm font-bold w-full ${theme === 'dark' ? 'text-white' : 'text-[#0B0B0C]'} `}>Emission per Vehicle Manufactured</h1>
                            <div className='flex items-center gap-2'>
                                <span className={`w-[32px] h-[3px] rounded-sm ${theme === 'dark' ? 'bg-white' : 'bg-black'}`}></span>
                                <p className={`sm:text-lg text-sm ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Emission</p>
                            </div>
                        </div>
                        <Line data={data} options={options}></Line>
                    </div>
                )
            }
        </>
    )
}

export default LineChart
