import React, { useEffect, useState } from 'react'
import BoxLoading1 from '../loadingOverview/BoxLoading1';

function OverviewBoxs2({ theme }) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, [])

    return (
        <>
            {
                isLoading ? (
                    <BoxLoading1 theme={theme} />
                ) : (
                    <div className={`${theme === 'dark' ? 'bg-[#242424]' : 'bg-white'} rounded-lg h-auto w-full shadow-[0_0_3px_rgba(0,0,0,0.2)]`}>
                        <div className={`w-full h-[46px] ${theme === 'dark' ? 'bg-[#635D5D]' : 'bg-[#F4F4F4]'} flex items-center gap-[6px] p-[16px] rounded-[0.5rem_0.5rem_0_0]`}>
                            <h3 className={`${theme === 'dark' ? 'text-white' : 'text-[#635D5D]'} font-[600]`}>Intensity Metrics</h3>
                        </div>
                        <div className='w-full'>
                            {/* box one */}
                            <div className={`w-full h-auto flex flex-col border-b-2 ${theme === 'dark' ? 'border-[#635D5D]' : 'border-[#DEDEDE]'}`}>
                                <div className='p-[16px] pb-0'><span className={`${theme === 'dark' ? 'text-white' : 'text-[#342C2C]'}`}>Per Vehicle Manufactured</span></div>
                                <div className='flex items-center p-[16px] pb-0'>
                                    <div className='w-1/2 px-1 flex items-center'>
                                        {/* icons */}
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" className='md:h-[28px] h-[25px]' width="30" viewBox="0 0 30 28" fill="none">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M14.9942 11.2098C15.0157 11.2112 15.0373 11.2119 15.0592 11.2119H22.2454C23.3148 11.2119 24.0407 10.1248 23.6309 9.13702L21.8165 4.76409C21.6228 4.29736 21.1672 3.99314 20.6619 3.99314H15.0592C15.0373 3.99314 15.0157 3.99384 14.9942 3.99521C14.9728 3.99384 14.9511 3.99314 14.9293 3.99314H9.32653C8.82123 3.99314 8.36563 4.29736 8.17197 4.76409L6.35754 9.13702C5.9477 10.1248 6.6736 11.2119 7.74302 11.2119H14.9293C14.9511 11.2119 14.9728 11.2112 14.9942 11.2098ZM14.9942 5.99106C15.0157 5.99244 15.0373 5.99314 15.0592 5.99314H20.1611L21.4966 9.21189H15.0592C15.0373 9.21189 15.0157 9.21259 14.9942 9.21396C14.9728 9.21259 14.9511 9.21189 14.9293 9.21189H8.49181L9.82734 5.99314H14.9293C14.9511 5.99314 14.9728 5.99244 14.9942 5.99106Z" fill={theme === 'dark' ? 'white' : '#8E8585'} />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M5.81172 13.1097C5.02279 12.9125 4.25856 13.5092 4.25856 14.3224V15.9191C4.25856 16.449 4.59277 16.9214 5.09253 17.0978L8.59215 18.333C9.61337 18.6934 10.5785 17.6731 10.162 16.6735L9.25184 14.489C9.09988 14.1243 8.78446 13.8529 8.40116 13.7571L5.81172 13.1097ZM5.75856 14.6426L7.91553 15.1819L8.56114 16.7313L5.75856 15.7422V14.6426Z" fill={theme === 'dark' ? 'white' : '#8E8585'} />
                                                <path d="M12.9392 14.1743C12.7341 13.6615 12.1521 13.4121 11.6393 13.6172C11.1266 13.8223 10.8771 14.4043 11.0822 14.9171L12.2337 17.7957C12.4388 18.3085 13.0208 18.5579 13.5336 18.3528C14.0464 18.1477 14.2958 17.5657 14.0907 17.053L12.9392 14.1743Z" fill={theme === 'dark' ? 'white' : '#8E8585'} />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M24.1767 13.1097C24.9657 12.9125 25.7299 13.5092 25.7299 14.3224V15.9191C25.7299 16.449 25.3957 16.9214 24.8959 17.0978L21.3963 18.333C20.3751 18.6934 19.4099 17.6731 19.8264 16.6735L20.7366 14.489C20.8886 14.1243 21.204 13.8529 21.5873 13.7571L24.1767 13.1097ZM24.2299 14.6426L22.0729 15.1819L21.4273 16.7313L24.2299 15.7422V14.6426Z" fill={theme === 'dark' ? 'white' : '#8E8585'} />
                                                <path d="M17.0492 14.1743C17.2544 13.6615 17.8363 13.4121 18.3491 13.6172C18.8619 13.8223 19.1113 14.4043 18.9062 14.9171L17.7547 17.7957C17.5496 18.3085 16.9677 18.5579 16.4549 18.3528C15.9421 18.1477 15.6927 17.5657 15.8978 17.053L17.0492 14.1743Z" fill={theme === 'dark' ? 'white' : '#8E8585'} />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M6.92656 23.78V23.9314C6.92656 25.7556 5.44779 27.2344 3.62364 27.2344C1.79949 27.2344 0.320724 25.7556 0.320724 23.9314V14.7881C0.320724 13.8264 0.551908 12.8787 0.99479 12.0251L1.95329 10.1775H1.03286C0.385254 10.1775 -0.0288194 9.48739 0.275936 8.91597L1.00796 7.54342C1.15705 7.26388 1.44807 7.08927 1.76488 7.08927H3.48075L5.84383 2.18133C6.26035 1.31625 7.13537 0.765871 8.096 0.765869H21.8924C22.8531 0.765871 23.7281 1.31625 24.1446 2.18133L26.5086 7.09115V7.08927H28.2357C28.5525 7.08927 28.8436 7.26388 28.9926 7.54342L29.7247 8.91597C30.0294 9.48739 29.6154 10.1775 28.9678 10.1775H28.0352L28.9937 12.0251C29.4365 12.8787 29.6677 13.8264 29.6677 14.7881V23.9314C29.6677 25.7556 28.189 27.2344 26.3648 27.2344C24.5407 27.2344 23.0619 25.7556 23.0619 23.9314V23.78H6.92656ZM8.09601 2.76587C7.90418 2.76587 7.72927 2.87568 7.64583 3.04896L4.30603 9.98548L2.7701 12.9461C2.47485 13.5152 2.32072 14.147 2.32072 14.7881V23.9314C2.32072 24.651 2.90406 25.2344 3.62364 25.2344C4.34322 25.2344 4.92656 24.651 4.92656 23.9314V21.78H25.0619V23.9314C25.0619 24.651 25.6452 25.2344 26.3648 25.2344C27.0844 25.2344 27.6677 24.651 27.6677 23.9314V14.7881C27.6677 14.147 27.5136 13.5152 27.2183 12.9461L25.6824 9.98548L22.3426 3.04896C22.2592 2.87568 22.0843 2.76587 21.8924 2.76587H8.09601ZM2.81989 8.46182H2.07371L1.8907 8.80496H2.65468L2.81989 8.46182ZM27.3338 8.80496L27.1686 8.46182H27.9269L28.1099 8.80496H27.3338Z" fill={theme === 'dark' ? 'white' : '#8E8585'} />
                                            </svg>
                                        </div>
                                        <span className={`${theme === 'dark' ? 'text-white' : 'text-black'} text-sm font-semibold ml-3`}>FY20</span>
                                    </div>
                                    <div className='w-1/2 px-1 flex items-center'>
                                        {/* icons */}
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" className='md:h-[28px] h-[25px]' width="30" viewBox="0 0 30 28" fill="none">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M14.9942 11.2098C15.0157 11.2112 15.0373 11.2119 15.0592 11.2119H22.2454C23.3148 11.2119 24.0407 10.1248 23.6309 9.13702L21.8165 4.76409C21.6228 4.29736 21.1672 3.99314 20.6619 3.99314H15.0592C15.0373 3.99314 15.0157 3.99384 14.9942 3.99521C14.9728 3.99384 14.9511 3.99314 14.9293 3.99314H9.32653C8.82123 3.99314 8.36563 4.29736 8.17197 4.76409L6.35754 9.13702C5.9477 10.1248 6.6736 11.2119 7.74302 11.2119H14.9293C14.9511 11.2119 14.9728 11.2112 14.9942 11.2098ZM14.9942 5.99106C15.0157 5.99244 15.0373 5.99314 15.0592 5.99314H20.1611L21.4966 9.21189H15.0592C15.0373 9.21189 15.0157 9.21259 14.9942 9.21396C14.9728 9.21259 14.9511 9.21189 14.9293 9.21189H8.49181L9.82734 5.99314H14.9293C14.9511 5.99314 14.9728 5.99244 14.9942 5.99106Z" fill='#7EAC55' />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M5.81172 13.1097C5.02279 12.9125 4.25856 13.5092 4.25856 14.3224V15.9191C4.25856 16.449 4.59277 16.9214 5.09253 17.0978L8.59215 18.333C9.61337 18.6934 10.5785 17.6731 10.162 16.6735L9.25184 14.489C9.09988 14.1243 8.78446 13.8529 8.40116 13.7571L5.81172 13.1097ZM5.75856 14.6426L7.91553 15.1819L8.56114 16.7313L5.75856 15.7422V14.6426Z" fill='#7EAC55' />
                                                <path d="M12.9392 14.1743C12.7341 13.6615 12.1521 13.4121 11.6393 13.6172C11.1266 13.8223 10.8771 14.4043 11.0822 14.9171L12.2337 17.7957C12.4388 18.3085 13.0208 18.5579 13.5336 18.3528C14.0464 18.1477 14.2958 17.5657 14.0907 17.053L12.9392 14.1743Z" fill='#7EAC55' />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M24.1767 13.1097C24.9657 12.9125 25.7299 13.5092 25.7299 14.3224V15.9191C25.7299 16.449 25.3957 16.9214 24.8959 17.0978L21.3963 18.333C20.3751 18.6934 19.4099 17.6731 19.8264 16.6735L20.7366 14.489C20.8886 14.1243 21.204 13.8529 21.5873 13.7571L24.1767 13.1097ZM24.2299 14.6426L22.0729 15.1819L21.4273 16.7313L24.2299 15.7422V14.6426Z" fill='#7EAC55' />
                                                <path d="M17.0492 14.1743C17.2544 13.6615 17.8363 13.4121 18.3491 13.6172C18.8619 13.8223 19.1113 14.4043 18.9062 14.9171L17.7547 17.7957C17.5496 18.3085 16.9677 18.5579 16.4549 18.3528C15.9421 18.1477 15.6927 17.5657 15.8978 17.053L17.0492 14.1743Z" fill='#7EAC55' />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M6.92656 23.78V23.9314C6.92656 25.7556 5.44779 27.2344 3.62364 27.2344C1.79949 27.2344 0.320724 25.7556 0.320724 23.9314V14.7881C0.320724 13.8264 0.551908 12.8787 0.99479 12.0251L1.95329 10.1775H1.03286C0.385254 10.1775 -0.0288194 9.48739 0.275936 8.91597L1.00796 7.54342C1.15705 7.26388 1.44807 7.08927 1.76488 7.08927H3.48075L5.84383 2.18133C6.26035 1.31625 7.13537 0.765871 8.096 0.765869H21.8924C22.8531 0.765871 23.7281 1.31625 24.1446 2.18133L26.5086 7.09115V7.08927H28.2357C28.5525 7.08927 28.8436 7.26388 28.9926 7.54342L29.7247 8.91597C30.0294 9.48739 29.6154 10.1775 28.9678 10.1775H28.0352L28.9937 12.0251C29.4365 12.8787 29.6677 13.8264 29.6677 14.7881V23.9314C29.6677 25.7556 28.189 27.2344 26.3648 27.2344C24.5407 27.2344 23.0619 25.7556 23.0619 23.9314V23.78H6.92656ZM8.09601 2.76587C7.90418 2.76587 7.72927 2.87568 7.64583 3.04896L4.30603 9.98548L2.7701 12.9461C2.47485 13.5152 2.32072 14.147 2.32072 14.7881V23.9314C2.32072 24.651 2.90406 25.2344 3.62364 25.2344C4.34322 25.2344 4.92656 24.651 4.92656 23.9314V21.78H25.0619V23.9314C25.0619 24.651 25.6452 25.2344 26.3648 25.2344C27.0844 25.2344 27.6677 24.651 27.6677 23.9314V14.7881C27.6677 14.147 27.5136 13.5152 27.2183 12.9461L25.6824 9.98548L22.3426 3.04896C22.2592 2.87568 22.0843 2.76587 21.8924 2.76587H8.09601ZM2.81989 8.46182H2.07371L1.8907 8.80496H2.65468L2.81989 8.46182ZM27.3338 8.80496L27.1686 8.46182H27.9269L28.1099 8.80496H27.3338Z" fill='#7EAC55' />
                                            </svg>
                                        </div>
                                        <span className={`${theme === 'dark' ? 'text-white' : 'text-black'} text-sm font-semibold ml-3`}>FY21</span>
                                    </div>
                                </div>
                                <div className='flex justify-between items-center p-[16px] pb-[1.2rem]'>
                                    <div className='flex w-full justify-between'>
                                        <div className='w-5/12'>
                                            <h1 className={`text-2xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-[#635D5D]'}`}>1200</h1>
                                            <span className={`text-[10px] ${theme === 'dark' ? 'text-white' : 'text-[#342C2C]'}`}>tCO <sub>2</sub></span>
                                        </div>
                                        <div className='w-1/2 flex items-center gap-3'>
                                            <div>
                                                <h1 className={`text-2xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-[#635D5D]'}`}>1100</h1>
                                                <span className={`text-[10px] ${theme === 'dark' ? 'text-white' : 'text-[#342C2C]'}`}>tCO <sub>2</sub></span>
                                            </div>
                                            <div className='flex'>
                                                {/* icons */}
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 20" fill="none">
                                                    <path d="M10 4.16658V15.8333" stroke="#00A310" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M4.1665 9.99992L9.99984 15.8333L15.8332 9.99992" stroke="#00A310" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                {/* text */}
                                                <span className='text-[#00A310] text-xs'>8.33%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* box two */}
                            <div className={`w-full h-auto flex flex-col border-b-2 ${theme === 'dark' ? 'border-[#635D5D]' : 'border-[#DEDEDE]'}`}>
                                <div className='p-[16px] pb-0'><span className={`${theme === 'dark' ? 'text-white' : 'text-[#342C2C]'}`}>Per ₹1,00,000 Turnover</span></div>
                                <div className='flex items-center p-[16px] pb-0'>
                                    <div className='w-1/2 px-1 flex items-center'>
                                        {/* icons */}
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="40" viewBox="0 0 32 40" fill="none">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M13.0103 9.11897C12.6198 8.72845 12.6198 8.09528 13.0103 7.70476L14.6509 6.06418C7.5521 6.74317 2.00049 12.7232 2.00049 20C2.00049 26.8728 6.95298 32.589 13.4839 33.7744L16.3772 30.8811C16.7678 30.4906 17.4009 30.4906 17.7914 30.8811C18.182 31.2717 18.182 31.9048 17.7914 32.2953L16.0871 33.9997C23.7792 33.9531 30.0005 27.7031 30.0005 20C30.0005 12.7632 24.5097 6.80891 17.4669 6.07585C17.4578 6.08548 17.4485 6.09503 17.439 6.10448L14.4245 9.11897C14.034 9.5095 13.4008 9.5095 13.0103 9.11897ZM16.1733 35.9991C24.9302 35.9064 32.0005 28.7789 32.0005 20C32.0005 11.676 25.6441 4.83672 17.5204 4.07122C17.4947 4.04106 17.4675 4.01168 17.439 3.98316L14.4245 0.968675C14.034 0.57815 13.4008 0.57815 13.0103 0.968675C12.6198 1.3592 12.6198 1.99236 13.0103 2.38289L14.681 4.05359C6.46171 4.72452 0.000488281 11.6077 0.000488281 20C0.000488281 27.8629 5.67239 34.4012 13.148 35.7464C13.2077 35.8426 13.2793 35.9335 13.3627 36.0169L16.3772 39.0314C16.7678 39.422 17.4009 39.422 17.7914 39.0314C18.182 38.6409 18.182 38.0077 17.7914 37.6172L16.1733 35.9991ZM16.0001 19.4489C20.4185 19.4489 24.0003 17.658 24.0003 15.4489C24.0003 13.2397 20.4185 11.4489 16.0001 11.4489C11.5817 11.4489 7.99993 13.2397 7.99993 15.4489C7.99993 17.658 11.5817 19.4489 16.0001 19.4489ZM9.00035 19.4489C9.00035 18.8966 8.55263 18.4489 8.00035 18.4489C7.44806 18.4489 7.00035 18.8966 7.00035 19.4489C7.00035 21.1363 8.34229 22.3948 9.89633 23.1718C11.5102 23.9787 13.6697 24.4489 16.0005 24.4489C18.3313 24.4489 20.4908 23.9787 22.1047 23.1718C23.6587 22.3948 25.0007 21.1363 25.0007 19.4489C25.0007 18.8966 24.553 18.4489 24.0007 18.4489C23.4484 18.4489 23.0007 18.8966 23.0007 19.4489C23.0007 19.9706 22.5517 20.7122 21.2103 21.3829C19.9286 22.0237 18.0881 22.4489 16.0005 22.4489C13.9129 22.4489 12.0724 22.0237 10.7907 21.3829C9.4493 20.7122 9.00035 19.9706 9.00035 19.4489ZM8.00035 23.5514C8.55263 23.5514 9.00035 23.9992 9.00035 24.5514C9.00035 25.0732 9.4493 25.8147 10.7907 26.4854C12.0724 27.1262 13.9129 27.5514 16.0005 27.5514C18.0881 27.5514 19.9286 27.1262 21.2103 26.4854C22.5517 25.8147 23.0007 25.0732 23.0007 24.5514C23.0007 23.9992 23.4484 23.5514 24.0007 23.5514C24.553 23.5514 25.0007 23.9992 25.0007 24.5514C25.0007 26.2389 23.6587 27.4973 22.1047 28.2743C20.4908 29.0812 18.3313 29.5514 16.0005 29.5514C13.6697 29.5514 11.5102 29.0812 9.89633 28.2743C8.34229 27.4973 7.00035 26.2389 7.00035 24.5514C7.00035 23.9992 7.44806 23.5514 8.00035 23.5514Z" fill={`${theme === 'dark' ? '#fff' : '#8E8585'}`} />
                                            </svg>
                                        </div>
                                        <span className={`${theme === 'dark' ? 'text-white' : 'text-black'} text-sm font-semibold ml-3`}>FY20</span>
                                    </div>
                                    <div className='w-1/2 px-1 flex items-center'>
                                        {/* icons */}
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="40" viewBox="0 0 32 40" fill="none">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M13.0103 9.11897C12.6198 8.72845 12.6198 8.09528 13.0103 7.70476L14.6509 6.06418C7.5521 6.74317 2.00049 12.7232 2.00049 20C2.00049 26.8728 6.95298 32.589 13.4839 33.7744L16.3772 30.8811C16.7678 30.4906 17.4009 30.4906 17.7914 30.8811C18.182 31.2717 18.182 31.9048 17.7914 32.2953L16.0871 33.9997C23.7792 33.9531 30.0005 27.7031 30.0005 20C30.0005 12.7632 24.5097 6.80891 17.4669 6.07585C17.4578 6.08548 17.4485 6.09503 17.439 6.10448L14.4245 9.11897C14.034 9.5095 13.4008 9.5095 13.0103 9.11897ZM16.1733 35.9991C24.9302 35.9064 32.0005 28.7789 32.0005 20C32.0005 11.676 25.6441 4.83672 17.5204 4.07122C17.4947 4.04106 17.4675 4.01168 17.439 3.98316L14.4245 0.968675C14.034 0.57815 13.4008 0.57815 13.0103 0.968675C12.6198 1.3592 12.6198 1.99236 13.0103 2.38289L14.681 4.05359C6.46171 4.72452 0.000488281 11.6077 0.000488281 20C0.000488281 27.8629 5.67239 34.4012 13.148 35.7464C13.2077 35.8426 13.2793 35.9335 13.3627 36.0169L16.3772 39.0314C16.7678 39.422 17.4009 39.422 17.7914 39.0314C18.182 38.6409 18.182 38.0077 17.7914 37.6172L16.1733 35.9991ZM16.0001 19.4489C20.4185 19.4489 24.0003 17.658 24.0003 15.4489C24.0003 13.2397 20.4185 11.4489 16.0001 11.4489C11.5817 11.4489 7.99993 13.2397 7.99993 15.4489C7.99993 17.658 11.5817 19.4489 16.0001 19.4489ZM9.00035 19.4489C9.00035 18.8966 8.55263 18.4489 8.00035 18.4489C7.44806 18.4489 7.00035 18.8966 7.00035 19.4489C7.00035 21.1363 8.34229 22.3948 9.89633 23.1718C11.5102 23.9787 13.6697 24.4489 16.0005 24.4489C18.3313 24.4489 20.4908 23.9787 22.1047 23.1718C23.6587 22.3948 25.0007 21.1363 25.0007 19.4489C25.0007 18.8966 24.553 18.4489 24.0007 18.4489C23.4484 18.4489 23.0007 18.8966 23.0007 19.4489C23.0007 19.9706 22.5517 20.7122 21.2103 21.3829C19.9286 22.0237 18.0881 22.4489 16.0005 22.4489C13.9129 22.4489 12.0724 22.0237 10.7907 21.3829C9.4493 20.7122 9.00035 19.9706 9.00035 19.4489ZM8.00035 23.5514C8.55263 23.5514 9.00035 23.9992 9.00035 24.5514C9.00035 25.0732 9.4493 25.8147 10.7907 26.4854C12.0724 27.1262 13.9129 27.5514 16.0005 27.5514C18.0881 27.5514 19.9286 27.1262 21.2103 26.4854C22.5517 25.8147 23.0007 25.0732 23.0007 24.5514C23.0007 23.9992 23.4484 23.5514 24.0007 23.5514C24.553 23.5514 25.0007 23.9992 25.0007 24.5514C25.0007 26.2389 23.6587 27.4973 22.1047 28.2743C20.4908 29.0812 18.3313 29.5514 16.0005 29.5514C13.6697 29.5514 11.5102 29.0812 9.89633 28.2743C8.34229 27.4973 7.00035 26.2389 7.00035 24.5514C7.00035 23.9992 7.44806 23.5514 8.00035 23.5514Z" fill='#7EAC55' />
                                            </svg>
                                        </div>
                                        <span className={`${theme === 'dark' ? 'text-white' : 'text-black'} text-sm font-semibold ml-3`}>FY21</span>
                                    </div>
                                </div>
                                <div className='flex justify-between items-center p-[16px] pb-[1.2rem]'>
                                    <div className='flex w-full justify-between'>
                                        <div className='w-5/12'>
                                            <h1 className={`text-2xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-[#635D5D]'}`}>120</h1>
                                            <span className={`text-[10px] ${theme === 'dark' ? 'text-white' : 'text-[#342C2C]'}`}>(tCO <sub>2</sub>)</span>
                                        </div>
                                        <div className='w-1/2 flex items-center gap-3'>
                                            <div>
                                                <h1 className={`text-2xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-[#635D5D]'}`}>110</h1>
                                                <span className={`text-[10px] ${theme === 'dark' ? 'text-white' : 'text-[#342C2C]'}`}>(tCO <sub>2</sub>)</span>
                                            </div>
                                            <div className='flex'>
                                                {/* icons */}
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 20" fill="none">
                                                    <path d="M10 4.16658V15.8333" stroke="#00A310" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M4.1665 9.99992L9.99984 15.8333L15.8332 9.99992" stroke="#00A310" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                {/* text */}
                                                <span className='text-[#00A310] text-xs'>8.33%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* box three */}
                            <div className={`w-full h-auto flex flex-col`}>
                                <div className='p-[16px] pb-0'><span className={`${theme === 'dark' ? 'text-white' : 'text-[#342C2C]'}`}>Per kWh Electricity</span></div>
                                <div className='flex items-center p-[16px] pb-0'>
                                    <div className='w-1/2 px-1 flex items-center'>
                                        {/* icons */}
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M20.0005 34C27.7325 34 34.0005 27.732 34.0005 20C34.0005 12.268 27.7325 6 20.0005 6C12.2685 6 6.00049 12.268 6.00049 20C6.00049 27.732 12.2685 34 20.0005 34ZM20.0005 36C28.837 36 36.0005 28.8366 36.0005 20C36.0005 11.1634 28.837 4 20.0005 4C11.1639 4 4.00049 11.1634 4.00049 20C4.00049 28.8366 11.1639 36 20.0005 36Z" fill={`${theme === 'dark' ? '#fff' : '#8E8585'}`} />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M23.0013 8.82938C23.4497 9.15186 23.5517 9.77675 23.2292 10.2251L17.0437 18.8248H24.42C25.4161 18.8248 26.0121 19.933 25.4629 20.764L18.7574 30.9104C18.4529 31.3711 17.8326 31.4978 17.3718 31.1933C16.9111 30.8888 16.7844 30.2684 17.0889 29.8077L23.0254 20.8248H15.5803C14.5617 20.8248 13.9708 19.6718 14.5656 18.8449L21.6056 9.05727C21.9281 8.60892 22.553 8.50689 23.0013 8.82938Z" fill={`${theme === 'dark' ? '#fff' : '#8E8585'}`} />
                                            </svg>
                                        </div>
                                        <span className={`${theme === 'dark' ? 'text-white' : 'text-black'} text-sm font-semibold ml-3`}>FY20</span>
                                    </div>
                                    <div className='w-1/2 px-1 flex items-center'>
                                        {/* icons */}
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M20.0005 34C27.7325 34 34.0005 27.732 34.0005 20C34.0005 12.268 27.7325 6 20.0005 6C12.2685 6 6.00049 12.268 6.00049 20C6.00049 27.732 12.2685 34 20.0005 34ZM20.0005 36C28.837 36 36.0005 28.8366 36.0005 20C36.0005 11.1634 28.837 4 20.0005 4C11.1639 4 4.00049 11.1634 4.00049 20C4.00049 28.8366 11.1639 36 20.0005 36Z" fill='#7EAC55' />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M23.0013 8.82938C23.4497 9.15186 23.5517 9.77675 23.2292 10.2251L17.0437 18.8248H24.42C25.4161 18.8248 26.0121 19.933 25.4629 20.764L18.7574 30.9104C18.4529 31.3711 17.8326 31.4978 17.3718 31.1933C16.9111 30.8888 16.7844 30.2684 17.0889 29.8077L23.0254 20.8248H15.5803C14.5617 20.8248 13.9708 19.6718 14.5656 18.8449L21.6056 9.05727C21.9281 8.60892 22.553 8.50689 23.0013 8.82938Z" fill='#7EAC55' />
                                            </svg>
                                        </div>
                                        <span className={`${theme === 'dark' ? 'text-white' : 'text-black'} text-sm font-semibold ml-3`}>FY21</span>
                                    </div>
                                </div>
                                <div className='flex justify-between items-center p-[16px] pb-[1.2rem]'>
                                    <div className='flex w-full justify-between'>
                                        <div className='w-5/12'>
                                            <h1 className={`text-2xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-[#635D5D]'}`}>0.86</h1>
                                            <span className={`text-[10px] ${theme === 'dark' ? 'text-white' : 'text-[#342C2C]'}`}>tCO <sub>2</sub></span>
                                        </div>
                                        <div className='w-1/2 flex items-center gap-3'>
                                            <div>
                                                <h1 className={`text-2xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-[#635D5D]'}`}>0.90</h1>
                                                <span className={`text-[10px] ${theme === 'dark' ? 'text-white' : 'text-[#342C2C]'}`}>tCO <sub>2</sub></span>
                                            </div>
                                            <div className='flex'>
                                                {/* icons */}
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                    <path d="M10 15.8334V4.16675" stroke="#FF3E5B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M4.1665 10.0001L9.99984 4.16675L15.8332 10.0001" stroke="#FF3E5B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                {/* text */}
                                                <span className='text-[#FF3E5B] text-xs'>4.7%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default OverviewBoxs2