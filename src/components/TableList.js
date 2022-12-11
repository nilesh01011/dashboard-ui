import React from 'react'
// import { tableData } from '../Data'

function TableList() {
    return (
        <>
            <div className="w-full lg:overflow-x-hidden overflow-x-scroll shadow-md border border-b-0 border-l-0 border-r-0 border-t-1 border-gray-300 rounded-lg">
                <table className="w-full divide-y divide-gray-200">
                    <thead className="w-full">
                        <tr>
                            <th
                                scope="col"
                                className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
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
                    <tbody className="divide-y divide-gray-200 bg-white">
                        <tr>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                Direct (Scope 1) GHG emission (metric tons Co2e)
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800">
                                <div className='flex items-center gap-2 justify-end'>
                                    147,224
                                    <img className='h-[9px]' src='./images/Polygon1.png' alt='growths' />
                                </div>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800">
                                <div className='flex items-center gap-2 justify-end'>
                                    157,322
                                    <img className='h-[9px]' src='./images/Polygon2.png' alt='decreased' />
                                </div>
                            </td>
                            <td className="px-6 py-4 text-sm">
                                <div className='flex items-center gap-2 justify-end'>
                                    156,001
                                    <img className='h-[9px]' src='./images/Polygon1.png' alt='growths' />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                Direct (Scope 1) GHG emission (metric tons Co2e per thousand pounds of product produced)
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800">
                                <div className='flex items-center gap-2 justify-end'>
                                    0.069
                                    <img className='h-[9px]' src='./images/Polygon1.png' alt='growths' />
                                </div>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800">
                                <div className='flex items-center gap-2 justify-end'>
                                    0.074
                                    <img className='h-[9px]' src='./images/Polygon2.png' alt='decreased' />
                                </div>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800">
                                <div className='flex items-center gap-2 justify-end'>
                                    0.072
                                    <img className='h-[9px]' src='./images/Polygon1.png' alt='growths' />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                Indirect (Scope 1) GHG emission (metric tons Co2e)
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800">
                                <div className='flex items-center gap-2 justify-end'>
                                    143,616
                                    <img className='h-[9px]' src='./images/Polygon1.png' alt='growths' />
                                </div>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800">
                                <div className='flex items-center gap-2 justify-end'>
                                    215,638
                                    <img className='h-[9px]' src='./images/Polygon1.png' alt='growths' />
                                </div>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800">
                                <div className='flex items-center gap-2 justify-end'>
                                    225,606
                                    <img className='h-[9px]' src='./images/Polygon1.png' alt='growths' />
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                Indirect (Scope 1) GHG emission (metric tons Co2e per thousand pounds of product produced)
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800">
                                <div className='flex items-center gap-2 justify-end'>
                                    5,762,404
                                    <img className='h-[9px]' src='./images/Polygon2.png' alt='growths' />
                                </div>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800">
                                <div className='flex items-center gap-2 justify-end'>
                                    6,288,344
                                    <img className='h-[9px]' src='./images/Polygon1.png' alt='growths' />
                                </div>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800">
                                <div className='flex items-center gap-2 justify-end'>
                                    0.072
                                    <img className='h-[9px]' src='./images/Polygon2.png' alt='growths' />
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                NOx emission (metric tons)
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800">
                                <div className='flex items-center gap-2 justify-end'>
                                    5,762,404
                                    <img className='h-[9px]' src='./images/Polygon2.png' alt='growths' />
                                </div>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800">
                                <div className='flex items-center gap-2 justify-end'>
                                    6,288,344
                                    <img className='h-[9px]' src='./images/Polygon1.png' alt='growths' />
                                </div>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800">
                                <div className='flex items-center gap-2 justify-end'>
                                    0.072
                                    <img className='h-[9px]' src='./images/Polygon2.png' alt='growths' />
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                NOx emission (metric tons)
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800">
                                <div className='flex items-center gap-2 justify-end'>
                                    5,762,404
                                    <img className='h-[9px]' src='./images/Polygon2.png' alt='growths' />
                                </div>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800">
                                <div className='flex items-center gap-2 justify-end'>
                                    6,288,344
                                    <img className='h-[9px]' src='./images/Polygon1.png' alt='growths' />
                                </div>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800">
                                <div className='flex items-center gap-2 justify-end'>
                                    0.072
                                    <img className='h-[9px]' src='./images/Polygon2.png' alt='growths' />
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                NOx emission (metric tons)
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800">
                                <div className='flex items-center gap-2 justify-end'>
                                    5,762,404
                                    <img className='h-[9px]' src='./images/Polygon2.png' alt='growths' />
                                </div>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800">
                                <div className='flex items-center gap-2 justify-end'>
                                    6,288,344
                                    <img className='h-[9px]' src='./images/Polygon1.png' alt='growths' />
                                </div>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800">
                                <div className='flex items-center gap-2 justify-end'>
                                    0.072
                                    <img className='h-[9px]' src='./images/Polygon2.png' alt='growths' />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default TableList