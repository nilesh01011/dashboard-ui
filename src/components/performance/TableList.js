import React, { useEffect, useState } from 'react'
import { tableData } from '../../Data'
import 'react-loading-skeleton/dist/skeleton.css'
import TableSkeletonLoading from '../loadingPerformance/TableSkeletonLoading';

function TableList({ theme }) {

    // eslint-disable-next-line no-unused-vars
    const [items, setItems] = useState(tableData);
    const [limitsData, setLimitsData] = useState(5);
    const [isLoading, setIsLoading] = useState(true);

    const LoadMoreData = () => {
        setLimitsData(showItemsMore => tableData.length + showItemsMore);
    }

    const LessMoreData = () => {
        setLimitsData(5);
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
        }, 1500)
    }, [])

    return (
        <>
            {
                isLoading ? (
                    <TableSkeletonLoading tableList={6} theme={theme} />
                ) : (
                    <div>
                        <div className="w-full lg:overflow-x-hidden overflow-x-scroll no-scrollbar shadow-[0_0_3px_rgba(0,0,0,0.2)] rounded-lg">
                            <div id='overflowScroll' className='w-full h-full'>
                                <table className={`w-full divide-y-[1px] ${theme === 'dark' ? 'divide-[#635D5D]' : 'divide-gray-200'}`}>
                                    <thead className={`w-full ${theme === 'dark' ? 'bg-[#635D5D]' : 'bg-[#F4F4F4]'}`}>
                                        <tr>
                                            {
                                                tableHead.map((ele) => (
                                                    <th
                                                        key={ele.id}
                                                        scope="col"
                                                        className={`${ele.id === 1 ? 'text-left' : 'text-end'}  px-6 py-3 text-[12px] font-bold capitalize ${theme === 'dark' ? 'text-white' : 'text-gray-500'}`}>
                                                        {ele.title}
                                                    </th>
                                                ))
                                            }
                                        </tr>
                                    </thead>
                                    <tbody className={`divide-y-[1px] ${theme === 'dark' ? 'divide-[#635D5D]' : 'divide-gray-200'} w-full ${theme === 'dark' ? 'bg-[#242424]' : 'bg-white'}`}>
                                        {
                                            items.slice(0, limitsData).map((elem) => {
                                                return (
                                                    <tr key={elem.id} >
                                                        <td className={`pl-6 pr-4 py-4 text-[14px] font-medium whitespace-nowrap capitalize ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                                                            {elem.title}
                                                        </td>
                                                        {
                                                            elem.countersData.map((data) => (
                                                                <td key={data.id} className={`px-4 py-4 w-max whitespace-nowrap text-sm ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                                                                    <div className='flex items-baseline w-[139px] leading-4 gap-2 justify-end xl:text-sm text-[12px]'>
                                                                        {data.countsNumber}
                                                                        <img className='h-[11px]' src={data.image} alt='growths-images' />
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
