import React from 'react'
import { tableData } from '../Data'

function TableList() {

    const LoadMoreData = (e) => {
        console.log(e)
    }

    return (
        <>
            <div className="w-full lg:overflow-x-hidden overflow-x-scroll shadow-md border border-b-0 border-l-0 border-r-0 border-t-1 border-gray-300 rounded-lg">
                <div className='w-full h-[400px] overflow-y-scroll no-scrollbar'>
                    <table className="w-full divide-y divide-gray-200">
                        <thead className="w-full">
                            <tr>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 "
                                >
                                    Parameters
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                                >
                                    2020
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                                >
                                    2019
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                                >
                                    2018
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white w-full overflow-y-scroll">

                            {
                                tableData.map((elem) => {
                                    return (
                                        <tr key={elem.id} >
                                            <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                                {elem.title}
                                            </td>
                                            {
                                                elem.countersData.map((data) => (
                                                    <td key={data.id} className="px-6 py-4 text-sm text-gray-800">
                                                        <div className='flex items-center gap-2 justify-end'>
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
                <div className='w-full h-[45px] flex items-center justify-center'>
                    <button onClick={(e) => LoadMoreData(e)} className='h-full bg-[#242424] text-white font-bold w-[220px]'>View more</button>
                </div>
            </div>
        </>
    )
}

export default TableList