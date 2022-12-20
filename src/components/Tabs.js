import React, { useEffect, useState } from 'react'
import Performance from './performance/Performance';
import Overview from './overview/Overview'

function Tabs() {
    let type;
    const [isCompany, setIsCompany] = useState(type === "companies");
    const [switchTheme, setSwitchTheme] = useState(false);

    let theme = localStorage.getItem('theme');

    const switchThemeHandler = () => {
        setSwitchTheme(!switchTheme);
        if (theme === 'dark') {
            localStorage.setItem('theme', theme = 'light');
            document.querySelector('body').style.backgroundColor = "#f4f4f4"
        } else {
            localStorage.setItem('theme', theme = "dark");
            document.querySelector('body').style.backgroundColor = "#0B0B0C"
        }
    }

    useEffect(() => {
        setIsCompany(type === "companies");
    }, [type]);

    const tabs = [
        { name: "Overview", current: !isCompany },
        { name: "Performance", current: isCompany },
    ];

    const handleNav = (tab) => {
        if (tab === "Performance") {
            setIsCompany(true);
        } else {
            setIsCompany(false);
        }
    };

    return (
        <>
            <div className='w-full h-auto xl:px-14 md:px-10 px-4'>
                <div className='flex flex-col '>
                    <div className="mb-4 mt-6 flex lg:flex-row flex-col border-b-[1px] border-[#635D5D]">
                        {/* nav tabs */}
                        <nav
                            className="lg:w-[85%] md:w-[70%] w-full mr-auto flex flex-row relative lg:order-1 order-2"
                            aria-label="Tabs"
                        >
                            {tabs.map((tab) => (
                                <button
                                    key={tab.name}
                                    onClick={() => {
                                        handleNav(tab.name);
                                    }}
                                    className={` ${tab.current || theme === 'light' ? '' : 'border-[#635D5D]'} ${tab.current
                                        ? "font-[550] w-1/2 text-center flex items-center justify-center border-b-2 border-[#FF3E5B]"
                                        : "text-[#8E8585] font-[550] w-1/2 text-center whitespace-nowrap py-1 px-1 border-b-2"
                                        }
                                        ${theme === 'dark' ? 'text-white' : 'text-black'}`}
                                >

                                    {tab.name}
                                </button>
                            ))}
                        </nav>

                        {/* dark and light mode switch */}
                        <div className='w-full flex items-end justify-end lg:order-2 order-1'>
                            <button className={`w-[36px] h-[36px] p-2 lg:mb-5 mb-3 rounded-full ${theme === 'light' ? 'bg-white' : 'bg-[#242424]'} shadow-[0_0_8px_0_rgba(0,0,0,0.35)]`} onClick={() => switchThemeHandler()}>
                                {
                                    theme === "dark" ?
                                        <img src='./images/darkmoon.svg' alt='moon' /> : <img src='./images/lightmoon.svg' alt='moon' />
                                }
                            </button>
                        </div>
                    </div>
                </div>

                <div className='mt-3'>
                    {
                        !isCompany ? (
                            <>
                                <Overview theme={theme} />
                            </>
                        ) : (
                            <>
                                <Performance theme={theme} />
                            </>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Tabs