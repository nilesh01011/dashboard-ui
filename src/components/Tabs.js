import React, { useEffect, useState } from 'react'
import Performance from './Performance';
import Overview from './Overview'

function Tabs() {
    let type;
    const [isCompany, setIsCompany] = useState(type === "companies");
    const [switchTheme, setSwitchTheme] = useState(false);

    // const switchThemeHandler = () => {
    //     setSwitchTheme(true);
    // }

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
        <>import React, { useEffect, useState } from 'react'
import Performance from './Performance';
import Overview from './Overview'

function Tabs() {
    let type;
    const [isCompany, setIsCompany] = useState(type === "companies");
    const [switchTheme, setSwitchTheme] = useState(false);

    let theme = localStorage.getItem('theme');

    const switchThemeHandler = () => {
        setSwitchTheme(!switchTheme);
        if(theme === 'dark') {
            localStorage.setItem('theme', theme='light');
            document.querySelector('body').style.backgroundColor = "#f4f4f4"
        } else {
            localStorage.setItem('theme', theme="dark");
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
                <div className='flex flex-col mt-4'>
                    <div className='w-full flex items-end justify-end'>
                        <button className={`w-[36px] h-[36px] p-2 rounded-full ${theme === 'light' ? 'bg-white' : 'bg-[#242424]'} shadow-[0_0_8px_0_rgba(0,0,0,0.35)]`} onClick={() => switchThemeHandler()}>
                            {
                                theme === "dark" ?
                                    <img src='./images/darkmoon.svg' alt='moon' /> : <img src='./images/lightmoon.svg' alt='moon' />
                            }
                        </button>
                    </div>
                    <div className=" mb-4">
                        <nav
                            className="w-[46%] border-b border-1 border-gray-200 mr-auto flex flex-row relative"
                            aria-label="Tabs"
                        >
                            {tabs.map((tab, idx) => (
                                <button
                                    key={tab.name}
                                    onClick={() => {
                                        handleNav(tab.name);
                                    }}
                                    className={`${tab.current
                                        ? "border-primary-500 text-primary-600 w-1/2 text-center flex items-center justify-center border-b-2 border-[#FF3E5B]"
                                        : "border-transparent text-gray-500 w-1/2 text-center border-gray-300 whitespace-nowrap py-2 px-1"
                                        }
                                        ${theme === 'dark' ? 'text-white' : 'text-black'}`}
                                >

                                    {tab.name}
                                </button>
                            ))}
                        </nav>
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
            <div className='w-full h-auto xl:px-14 md:px-10 px-4'>
                <div className='flex flex-col mt-4'>
                    <div className='w-full flex items-end justify-end'>
                        <button className={`w-[36px] h-[36px] p-2 rounded-full ${!switchTheme ? 'bg-white' : 'bg-[#242424]'} shadow-[0_0_8px_0_rgba(0,0,0,0.35)]`} onClick={() => setSwitchTheme(!switchTheme)}>
                            {
                                switchTheme ?
                                    <img src='./images/darkmoon.svg' alt='moon' /> : <img src='./images/lightmoon.svg' alt='moon' />
                            }
                        </button>
                    </div>
                    <div className="border-b border-gray-200 mb-4">
                        <nav
                            className=" w-[46%] mr-auto flex flex-row border-b-2 relative"
                            aria-label="Tabs"
                        >
                            {tabs.map((tab, idx) => (
                                <button
                                    key={tab.name}
                                    onClick={() => {
                                        handleNav(tab.name);
                                    }}
                                    className={`${tab.current
                                        ? "border-primary-500 text-primary-600 w-1/2 text-center flex items-center justify-center border-b-2 border-[#FF3E5B]"
                                        : "border-transparent text-gray-500 w-1/2 text-center hover:text-gray-700 border-gray-300 whitespace-nowrap py-2 px-1"
                                        }
                                            `}
                                >

                                    {tab.name}
                                </button>
                            ))}
                        </nav>
                    </div>
                </div>

                <div className='mt-3'>
                    {
                        !isCompany ? (
                            <>
                                <Overview />
                            </>
                        ) : (
                            <>
                                <Performance />
                            </>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Tabs
