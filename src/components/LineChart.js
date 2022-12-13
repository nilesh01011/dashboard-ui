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
import GraphSkeletonLoading from './GraphSkeletonLoading';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
);

export const options = {
    // responsive: true,

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
                }
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
                }
            },
        }
    }

};

const labels = ['01-01-2018', '01-01-2019', '01-01-2020', '01-01-2021'];

export const data = {
    labels,
    datasets: [
        {
            data: [264, 220, 200, 195],
            borderColor: '#000',
            borderWidth: 2,
        }
    ],
};

function LineChart() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 4000)
    }, [])

    return (
        <>
            {
                isLoading ? (
                    <GraphSkeletonLoading />
                ) : (
                    <div className='h-full w-full bg-white rounded-lg shadow-[0_0_3px_rgba(0,0,0,0.2)]'>
                        <div className='flex md:flex-row flex-col md:items-center justify-between bg-[#F4F4F4] px-4 py-3 mb-2 rounded-[0.5rem_0.5rem_0_0]'>
                            <h1 className='sm:text-lg text-sm font-bold w-full text-[#0B0B0C]'>Emission per Vehicle Manufactured</h1>
                            <div className='flex items-center gap-2'>
                                <span className='w-[26px] h-[3px] bg-black'></span>
                                <p className='sm:text-lg text-sm'>Emission</p>
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