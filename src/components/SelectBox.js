import React, { useState } from 'react';
// import { AiOutlineDown } from 'react-icons/ai'

function SelectBox({ items, theme }) {
    const [isOpen, setIsOpen] = useState(false);
    // const [selectedText, setSelectedText] = useState('');
    const [selected, setSelected] = useState('');

    const selectBoxText = (ele) => {
        setSelected(ele.target.innerHTML);
        setIsOpen(!isOpen);
    }

    return (
        <>
            <div className="flex justify-center">
                {/* <div id='selectedLists' className="w-[182px] flex grow relative overflow-hidden">
                    <select className={`cursor-pointer text-sm form-select grow select-none appearance-none pl-3 py-1.5 font-normal bg-clip-padding bg-no-repeat border text-[#635D5D] ${theme === 'dark' ? 'bg-[#242424] border-[#635D5D]' : 'bg-white border-[#DEDEDE]'} rounded transition ease-in-out m-0
                      focus:outline-none`} onClick={() => setOpen(!open)}>
                        {items.map((ele, id) => (
                            <option key={id} value={ele.name}>{ele.name}</option>
                        ))}
                    </select>
                    <AiOutlineDown id='arrowElement' className={` ${open && "rotate-180 transition-all"} transition-all absolute right-2 top-2 pointer-events-none ${theme === 'dark' ? 'text-white' : 'text-black'}`} size={16} />
                </div> */}

                {/* before:content-[''] before:absolute before:bg-[rgba(0,0,0,0.3)] before:left-0 before:top-0 before:bottom-0 before:right-0 */}
                <div className={`w-[182px] h-[34px] py-1.5 px-3 rounded border-[1px] text-[#635D5D] flex items-center ${theme === 'dark' ? 'border-[#635D5D] bg-[#242424]' : 'border-[#DEDEDE] bg-white'}`}>
                    <div className='w-full h-full'>
                        {/* select fields */}
                        <div onClick={() => setIsOpen(!isOpen)} id='selectField' className='flex items-center justify-between w-full cursor-pointer'>

                            <p className={`text-sm select-none ${theme === 'dark' ? selected && 'text-white' : selected && 'text-[#342C2C]'}`}>
                                {selected ? selected : items[0].name}
                            </p>

                            {/* icons */}
                            <div className={`h-[14px] flex items-center ${isOpen && "rotate-180 transition-all"} transition-all ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 11" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M15.058 0.571661C15.2393 0.741639 15.2485 1.02642 15.0785 1.20773L8.32849 8.40773C8.24342 8.49847 8.12458 8.54995 8.00019 8.54995C7.87581 8.54995 7.75697 8.49847 7.6719 8.40773L0.921904 1.20773C0.751924 1.02641 0.761111 0.741639 0.942422 0.57166C1.12373 0.401682 1.40851 0.410868 1.57849 0.592179L8.00019 7.442L14.4219 0.592179C14.5919 0.410869 14.8767 0.401682 15.058 0.571661Z" fill={`${theme === 'dark' ? '#DEDEDE' : '#635D5D'}`} />
                                </svg>
                            </div>
                        </div>

                        {/* all lists items */}
                        {/* md:h-auto h-[54px] flex items-center z-50 md:relative absolute w-[90%] top-[30%] left-[20px] right-[20px] mx-auto h-max rounded-2xl overflow-hidden */}
                        {
                            isOpen && (
                                <ul id='listsBox' className={`z-20 divide-y-[1px] border-[1px] ${theme === 'dark' ? 'bg-[#0B0B0C] border-[#635D5D] divide-[#635D5D]' : 'bg-white border-[#DEDEDE] divide-[#DEDEDE]'} relative w-[182px] left-[-13px] top-4 rounded transition-all`}>
                                    {items.map((ele, id) => (
                                        <li key={id} onClick={selectBoxText} className={`${theme === 'dark' ? ' hover:bg-[#242424]' : 'hover:bg-[#F4F4F4]'} text-[#635D5D] box-border px-3 pt-[4px] pb-[6px] cursor-pointer text-[14px]`}>{ele.name}</li>
                                    ))}
                                </ul>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default SelectBox
