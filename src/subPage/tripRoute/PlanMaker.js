import React, { useState } from "react";
import { Link } from "react-router-dom";

import PickAirplane from "./PickAirplane";
import Wishlist from "../user/Wishlist";
import PlanMakerForm, {PlanMakerInfo} from "./PlanMakerForm";

import hyodata from "../../data/hyodata.json"; // JSON 파일을 import로 가져오기



export default function PlanMaker() {

  //폼 정보
  const [tripDate, setTripDate] = useState({ start: null, end: null });
  const [count, setCount] = useState(1);

  const [activeTab, setActiveTab] = useState("");
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <>
      <Wishlist
        tripDate={tripDate}
        count={count}
      />
      <div className="container">
        <PlanMakerForm 
          tripDate={tripDate}
          setTripDate={setTripDate}
          count={count}
          setCount={setCount}
        />
        <PlanMakerInfo
          tripDate={tripDate}
          count={count}
        />
        {/* 탭 클릭 > info로 변경, 수정하기 누르면 > form */}
        <div className="tab_content">
          <ul className="d-flex gap-3">
            {[
              "#항공권",
              "#숙소",
              "#투어",
              "#티켓",
              "#랜드마크",
              "#교통패스",
              "#트립카",
            ].map((tab) => (
              <li
                key={tab}
                className={` ${tab === "#트립카" ? "tripcar_tab" : ""} ${
                  activeTab === tab ? "tabClick" : ""
                }`}
                onClick={() => handleTabClick(tab)}
              >
                <Link to="#none">{tab}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* 탭 클릭에 따른 해당 영역 켜짐 */}

        {/* 그 해당 영역 */}
        <PickAirplane hyodata={hyodata}/>
      </div>
    </>
  );
}
