import React from "react";
import {
  divisionsData,
  fullYearsOverview,
  plantsData,
  regionsData,
} from "../../Data";
import OverviewBottomSide from "./OverviewBottomSide";
import OverviewBoxs1 from "./OverviewBoxs1";
import OverviewBoxs2 from "./OverviewBoxs2";
import OverviewBoxs3 from "./OverviewBoxs3";
import SelectBox from "../SelectBox";

function Overview({ theme }) {

  return (
    <div className="mt-8">
      <div className="flex flex-col">
        {/* title and selectboxs */}
        <div className="flex xl:items-center items-start xl:gap-0 gap-4 justify-between mb-7 xl:flex-row flex-col">
          {/* titles */}
          <div className="flex items-center gap-2">
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.68954 1.68932V13.0015H10.5765V1.68932H1.68954ZM1.28559 0.0735092C0.616298 0.0735092 0.0737305 0.616077 0.0737305 1.28537V13.4054C0.0737305 14.0747 0.616298 14.6173 1.28559 14.6173H10.9805C11.6497 14.6173 12.1923 14.0747 12.1923 13.4054V1.28537C12.1923 0.616077 11.6497 0.0735092 10.9805 0.0735092H1.28559Z"
                fill={`${theme === 'dark' ? '#fff' : '#0B0B0C'}`}
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.4239 24.3107V12.9985H24.3109V24.3107H15.4239ZM15.02 25.9265C14.3507 25.9265 13.8081 25.3839 13.8081 24.7146V12.5946C13.8081 11.9253 14.3507 11.3827 15.02 11.3827H24.7148C25.3841 11.3827 25.9267 11.9253 25.9267 12.5946V24.7146C25.9267 25.3839 25.3841 25.9265 24.7148 25.9265H15.02Z"
                fill={`${theme === 'dark' ? '#fff' : '#0B0B0C'}`}
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.68954 17.8474V24.3107H10.5765V17.8474H1.68954ZM1.28559 16.2316C0.616298 16.2316 0.0737305 16.7742 0.0737305 17.4435V24.7146C0.0737305 25.3839 0.616298 25.9265 1.28559 25.9265H10.9805C11.6497 25.9265 12.1923 25.3839 12.1923 24.7146V17.4435C12.1923 16.7742 11.6497 16.2316 10.9805 16.2316H1.28559Z"
                fill={`${theme === 'dark' ? '#fff' : '#0B0B0C'}`}
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.4239 8.15257V1.68932H24.3109V8.15257H15.4239ZM15.02 9.76838C14.3507 9.76838 13.8081 9.22581 13.8081 8.55652V1.28537C13.8081 0.616078 14.3507 0.0735111 15.02 0.0735111H24.7148C25.3841 0.0735111 25.9267 0.616078 25.9267 1.28537V8.55652C25.9267 9.22581 25.3841 9.76838 24.7148 9.76838H15.02Z"
                fill={`${theme === 'dark' ? '#fff' : '#0B0B0C'}`}
              />
            </svg>
            <h1 className={`font-bold sm:text-2xl text-lg ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Dashboard</h1>
          </div>

          {/* selectBox */}
          <div className="flex gap-[20px] flex-wrap">
            <SelectBox theme={theme} items={fullYearsOverview} />
            <SelectBox theme={theme} items={divisionsData} />
            <SelectBox theme={theme} items={plantsData} />
            <SelectBox theme={theme} items={regionsData} />
          </div>
        </div>
        {/* overview Boxs */}
        <div className="flex gap-[20px] xl:flex-nowrap flex-wrap">
          <OverviewBoxs1
            theme={theme}
          />
          <OverviewBoxs2 theme={theme} />
          <OverviewBoxs3 theme={theme} />
        </div>
        {/* bottom sides */}
        <div className="mt-[20px] mb-6">
          <OverviewBottomSide theme={theme} />
        </div>
      </div>
    </div>
  );
}

export default Overview;
