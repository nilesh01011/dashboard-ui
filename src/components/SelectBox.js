import React, { useState } from 'react';
import { AiOutlineDown } from 'react-icons/ai'

function SelectBox({ items, theme }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="flex justify-center">
                <div id='selectedLists' className="w-[182px] flex grow relative overflow-hidden">
                    <select className={`cursor-pointer text-sm form-select grow select-none appearance-none pl-3 py-1.5 font-normal bg-clip-padding bg-no-repeat border text-[#635D5D] ${theme === 'dark' ? 'bg-[#242424] border-[#635D5D]' : 'bg-white border-[#DEDEDE]'} border-gray-300 rounded transition ease-in-out m-0
                      focus:outline-none`} onClick={() => setOpen(!open)}>
                        {items.map((ele, id) => (
                            <option key={id} value={ele.name}>{ele.name}</option>
                        ))}
                    </select>
                    <AiOutlineDown id='arrowElement' className={` ${open && "rotate-180 transition-all"} transition-all absolute right-2 top-2 pointer-events-none ${theme === 'dark' ? 'text-white' : 'text-black'}`} size={16} />
                </div>
            </div>
        </>
    )
}

export default SelectBox
