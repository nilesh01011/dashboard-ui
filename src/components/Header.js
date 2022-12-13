import React from 'react'

function Header() {
    return (
        <>
            <div className='h-[64px] bg-[#242424] w-full flex justify-between items-center xl:px-14 md:px-10 px-4'>
                {/* left sides */}
                <div>
                    <h1 className='text-white font-bold sm:text-base text-xs'>Carbon Footprint Dashboard</h1>
                </div>
                {/* Company logo */}
                <div className='sm:w-auto w-[100px]'>
                    <img src='./logo.svg' alt='logo-images' />
                </div>
            </div>
        </>
    )
}

export default Header