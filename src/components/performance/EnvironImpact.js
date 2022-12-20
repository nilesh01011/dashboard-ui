import React from "react";
import { divisionsData, plantsData, regionsData } from "../../Data";
import SelectBox from "../SelectBox";
import TableList from "./TableList";

function EnvironImpact({ theme }) {
  return (
    <>
      <div className="mb-5 xl:w-full w-auto">
        {/* heading */}
        <div className="flex justify-between w-full gap-4 lg:flex-row flex-col">
          {/* title text */}
          <div className="flex items-center gap-[6px] whitespace-nowrap leading-4">
            <svg className="h-[20px]"
              width="26"
              height="20"
              viewBox="0 0 26 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M29.0959 17.7512L28.8438 17L28.0767 17.1982C25.8182 17.7819 23.1468 18.8039 21.6037 20.8865C20.9121 20.6591 20.1234 20.4709 19.2319 20.3257L18.4236 20.194L18.2614 20.9967C17.9634 22.4714 17.8073 24.6671 18.4265 26.3818C18.7434 27.2593 19.2917 28.0848 20.2008 28.5669C21.1129 29.0507 22.2437 29.1122 23.5675 28.7539C23.7673 28.6998 23.9603 28.6113 24.1346 28.4904C25.5548 28.7141 26.7371 28.5588 27.6796 28.0323C28.8375 27.3854 29.4617 26.2751 29.7591 25.0838C30.3406 22.7543 29.7704 19.7617 29.0959 17.7512ZM25.229 26.8878C25.9442 26.9025 26.4677 26.7608 26.85 26.5473C27.4688 26.2015 27.8835 25.574 28.1087 24.6718C28.4333 23.3714 28.3101 21.6988 27.9877 20.1589L25.4766 24.2447C25.7212 25.1829 25.5546 26.1046 25.229 26.8878ZM24.5154 22.56C24.172 22.2024 23.744 21.8761 23.2258 21.5849C24.008 20.6899 25.1215 20.0283 26.3797 19.5265L24.5154 22.56ZM20.0264 25.804C19.7775 25.1146 19.6887 24.2668 19.7024 23.4191L22.2922 27.2678C21.7068 27.3213 21.293 27.2207 20.9978 27.0642C20.5757 26.8403 20.2506 26.4248 20.0264 25.804ZM23.6553 26.2466L21.1529 22.5277C22.8159 23.0892 23.4989 23.8244 23.7471 24.4253C23.981 24.9917 23.9107 25.6361 23.6553 26.2466Z"
                fill={`${theme === 'dark' ? '#fff' : '#342C2C'}`}
              />
              <circle
                cx="23.5"
                cy="22.5"
                r="9.75"
                stroke={`${theme === 'dark' ? 'white' : 'black'}`}
                strokeWidth="1.5"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.335 25.1414C13.2212 24.7019 13.135 24.2512 13.0786 23.7914H11.249C10.7067 22.0844 10.3683 20.131 10.3082 18.0322H13.9952C14.2166 17.5621 14.4718 17.1111 14.7577 16.6822H10.3082C10.3683 14.5828 10.7069 12.6287 11.2496 10.9213H16.7254V14.4776C17.1481 14.1203 17.5994 13.7958 18.0754 13.508V10.9213H23.5513C23.663 11.2728 23.7661 11.6346 23.8598 12.0061C24.3431 12.0223 24.8182 12.0713 25.2828 12.1507C25.1872 11.731 25.0804 11.3209 24.9629 10.9213H28.543C28.6104 10.9213 28.6755 10.9115 28.7369 10.8931C29.3432 11.954 29.8049 13.1083 30.095 14.3291C30.7002 14.8182 31.25 15.3732 31.7335 15.9832C31.0416 8.67603 24.8886 2.95944 17.4004 2.95944C9.44868 2.95944 3.00256 9.40556 3.00256 17.3572C3.00256 25.3089 9.44868 31.755 17.4004 31.755C17.7584 31.755 18.1135 31.742 18.465 31.7163C17.7356 31.317 17.0589 30.8336 16.4477 30.2793C15.0898 29.9212 13.7274 28.795 12.5883 26.8546C12.2805 26.3302 11.9965 25.7571 11.7411 25.1414H13.335ZM9.83739 23.7914H6.04668C5.07269 22.0764 4.47607 20.119 4.36972 18.0322H8.95771C9.01359 20.095 9.32428 22.0445 9.83739 23.7914ZM6.92786 25.1414H10.2891C10.9782 26.9646 11.9024 28.5057 12.9887 29.6404C10.5499 28.7643 8.44754 27.1826 6.92786 25.1414ZM18.0754 9.57134H23.0591C22.8038 8.95633 22.5201 8.38379 22.2126 7.85989C20.9958 5.78715 19.5242 4.6435 18.0754 4.37268V9.57134ZM21.8121 5.07415C22.8981 6.20842 23.822 7.74886 24.5111 9.57134H27.8716C26.352 7.53103 24.2502 5.94996 21.8121 5.07415ZM16.7254 4.37268V9.57134H11.7418C11.9971 8.95633 12.2808 8.38379 12.5883 7.85989C13.8051 5.78715 15.2766 4.6435 16.7254 4.37268ZM8.95771 16.6822C9.01361 14.6188 9.32449 12.6687 9.83791 10.9213H6.22749C6.16955 10.9213 6.11331 10.914 6.05965 10.9003C5.07799 12.6208 4.47654 14.5862 4.36972 16.6822H8.95771ZM6.92917 9.57134H10.2897C10.9788 7.74885 11.9028 6.2084 12.9887 5.07413C10.5506 5.94993 8.44875 7.53101 6.92917 9.57134Z"
                fill={`${theme === 'dark' ? 'white' : 'black'}`}
              />
            </svg>
            <h1 className={`font-bold text-[20px] ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              Environmental Impact
            </h1>
          </div>
          <div className="flex items-center gap-4 max-h-max flex-wrap">
            <SelectBox theme={theme} items={divisionsData} />
            <SelectBox theme={theme} items={plantsData} />
            <SelectBox theme={theme} items={regionsData} />
          </div>
        </div>
        <div className="mt-6">
          <TableList theme={theme} />
        </div>
      </div>
    </>
  );
}

export default EnvironImpact;