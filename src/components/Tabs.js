import React, { useEffect, useState } from 'react'
import Performance from './Performance';
import Overview from './Overview'

function Tabs() {
    let type;
    const [isCompany, setIsCompany] = useState(type === "companies");

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
                <div>
                    <div className="border-b border-gray-200 mb-4">
                        <nav
                            className=" flex flex-row mt-2"
                            aria-label="Tabs"
                        >
                            {tabs.map((tab) => (
                                <button
                                    data-test-id={`tab-${tab.name}`}
                                    key={tab.name}
                                    onClick={() => {
                                        handleNav(tab.name);
                                    }}
                                    className={`${tab.current ? "border-primary-500 text-primary-600 w-1/2 text-center flex align-center justify-center bg-black text-white p-3" : "p-3 border-transparent text-gray-500 w-1/2 text-center hover:text-gray-700 hover:border-gray-300"
                                        }
                                            `}
                                // aria-current={
                                //     tab.current ? "page" : undefined
                                // }
                                >
                                    {tab.current ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="w-5 h-5 mr-2"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    ) : (
                                        ""
                                    )}

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