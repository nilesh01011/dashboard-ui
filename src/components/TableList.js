import React, { useEffect, useState } from 'react'
import { tableData } from '../Data'
import 'react-loading-skeleton/dist/skeleton.css'
import TableSkeletonLoading from './TableSkeletonLoading';

function TableList() {

    // eslint-disable-next-line no-unused-vars
    const [items, setItems] = useState(tableData);
    const [limitsData, setLimitsData] = useState(5);
    const [isLoading, setIsLoading] = useState(true);

    const LoadMoreData = () => {
        setLimitsData(showItemsMore => tableData.length + showItemsMore);
        document.getElementById('overflowScroll').classList.add('overflow-y-scroll');
    }

    const LessMoreData = () => {
        setLimitsData(5);
        document.getElementById('overflowScroll').classList.remove('overflow-y-scroll');
    }

    const tableHead = [
        {
            id: 1,
            title: 'Parameters'
        },
        {
            id: 2,
            title: '2020'
        },
        {
            id: 3,
            title: '2019'
        },
        {
            id: 4,
            title: '2018'
        },
    ]

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 4000)
    }, [])

    return (
        <>
            {
                isLoading ? (
                    <TableSkeletonLoading tableList={6} />
                ) : (
                    <div>
                        <div className="w-full lg:overflow-x-hidden overflow-x-scroll no-scrollbar shadow-[0_0_3px_rgba(0,0,0,0.2)] rounded-lg">
                            <div id='overflowScroll' className='w-full h-[305px]'>
                                <table className="w-full divide-y divide-gray-200">
                                    <thead className="w-full">
                                        <tr>
                                            {
                                                tableHead.map((ele) => (
                                                    <th
                                                        key={ele.id}
                                                        scope="col"
                                                        className={`${ele.id === 1 ? 'text-left' : 'text-end'}  px-6 py-3 text-xs font-bold text-gray-500 capitalize`}>
                                                        {ele.title}
                                                    </th>
                                                ))
                                            }
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 bg-white w-full overflow-y-scroll">
                                        {
                                            items.slice(0, limitsData).map((elem) => {
                                                return (
                                                    <tr key={elem.id} >
                                                        <td className="pl-6 pr-4 py-4 text-sm font-medium text-gray-800 whitespace-nowrap capitalize">
                                                            {elem.title}
                                                        </td>
                                                        {
                                                            elem.countersData.map((data) => (
                                                                <td key={data.id} className="pl-6 pr-4 py-4 text-sm text-gray-800">
                                                                    <div className='flex items-center gap-2 justify-end xl:text-sm text-[12px]'>
                                                                        {data.countsNumber}
                                                                        <img className='h-[9px]' src={data.image} alt='growths' />
                                                                    </div>
                                                                </td>
                                                            ))
                                                        }
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        {
                            limitsData < items.length ? (
                                <div className='w-full h-[45px] flex items-end justify-end'>
                                    <button onClick={LoadMoreData} className='h-full text-[#FF3E5B] font-normal'>View More</button>
                                </div>
                            ) : (
                                <div className='w-full h-[45px] flex items-end justify-end'>
                                    <button onClick={LessMoreData} className='h-full text-[#FF3E5B] font-normal'>Less View</button>
                                </div>
                            )
                        }
                    </div>
                )
            }

        </>
    )
}

export default TableList