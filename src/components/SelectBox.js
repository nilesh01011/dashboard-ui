import React, { useState } from 'react';
import { AiOutlineDown } from 'react-icons/ai'

function SelectBox({ items }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="flex justify-center">
                <div id='selectedLists' className="w-[182px] flex grow relative overflow-hidden">
                    <select className="cursor-pointer text-sm form-select grow select-none appearance-none pl-3 py-1.5 font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700
                     focus:bg-white focus:border-indigo-600 focus:outline-none" onClick={() => setOpen(!open)}>
                        {items.map((ele, id) => (
                            <option key={id} value={ele.name}>{ele.name}</option>
                        ))}
                    </select>
                    <AiOutlineDown id='arrowElement' className={` ${open && "rotate-180 transition-all"} transition-all absolute right-2 top-2 pointer-events-none`} size={16} />
                </div>
            </div>
        </>
    )
}

export default SelectBox