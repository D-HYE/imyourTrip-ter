import React, { useState } from "react";
import { Link } from "react-router-dom";

import PickAirplane from "./PickAirplane";
import Wishlist from "../user/Wishlist";
import PlanMakerForm, {PlanMakerInfo} from "./PlanMakerForm";
import Barslider from "../../components/Barslider";

import { FillterBox } from "../../components/util";
import {StyledBtn} from "../../styleComponents/ui";
import element from "../../scss/elements.module.scss";
import hyodata from "../../data/hyodata.json"; // JSON 파일을 import로 가져오기

export default function PlanMaker() {
  const [saveFilter, setSaveFilter] = useState(null);
  const [isOneWay, setIsOneWay] = useState(false);
  
  const toggleOneWay = () => {
    setIsOneWay((prev) => !prev);
  };


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
      <div className="container pageBox">
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
        <div className="filter_title d-flex justify-content-between align-items-center">
          <ul className="d-flex align-items-center gap-3">
            <li className="plane_title_all">전체보기</li>
            <li>
              <FillterBox>
                {({ closeDropdown }) => (
                  <>
                    <div className="d-flex flex-column gap-2">
                      <div className="filter_section_title">
                        <span className="title">유형</span>
                      </div>
                      <ul className="d-flex gap-3">
                        {[
                          {
                            label: "왕복",
                            checked: !isOneWay,
                            onChange: toggleOneWay,
                          },
                          {
                            label: "편도",
                            checked: isOneWay,
                            onChange: toggleOneWay,
                          },
                        ].map(({ label, checked, onChange }) => (
                          <li
                            key={label}
                            className="filter_radio d-flex align-items-center gap-1"
                          >
                            <label className={element.checkbox_label}>
                              <input
                                type="checkbox"
                                checked={checked}
                                onChange={onChange}
                              />
                              <span>{label}</span>
                            </label>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="d-flex flex-column gap-2">
                      <div className="filter_section_title">
                        <span className="title">경유</span>
                      </div>
                      <ul className="d-flex gap-3">
                        {["직항", "1회이상 경유"].map((label) => (
                          <li
                            key={label}
                            className="filter_radio d-flex align-items-center gap-1"
                          >
                            <label className={element.checkbox_label}>
                              <input type="checkbox" />
                              <span>{label}</span>
                            </label>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="d-flex flex-column gap-2">
                      <div className="filter_section_title ">
                        <span className="title">시간대</span>
                      </div>
                      {["가는 날", "오는 날"].map((day) => (
                        <div key={day}>
                          <p>{day}</p>
                          <div className="timeTable ">
                            <div
                              id={`sliderbar_${
                                day === "가는 날" ? "go" : "back"
                              }`}
                            ></div>
                            <Barslider></Barslider>
                          </div>
                        </div>
                      ))}
                    </div>
                    <li className="filter_radio d-flex align-items-center gap-1">
                      <label className={element.checkbox_label}>
                        <input type="checkbox" />
                        <span
                          className="text-blue"
                          style={{
                            fontSize: "var(--semismall-text)",
                            fontWeight: "700",
                          }}
                        >
                          찜 모아보기
                        </span>
                      </label>
                    </li>
                    <div className="d-flex justify-content-center">
                      <StyledBtn
                        padding={[0.5, 1]}
                        fontSize="var(--semismall-text)"
                        fontWeight="700"
                        color="var(--trip-yellow)"
                        onClick={closeDropdown}
                      >
                        저장
                      </StyledBtn>
                    </div>
                  </>
                )}
              </FillterBox>
            </li>
          </ul>
          <div className="d-flex gap-2">
            <div className="front_btn">
              <a href="#none">계획짜기</a>
            </div>
          </div>
        </div>
        <PickAirplane hyodata={hyodata} isOneWay={isOneWay} />
      </div>
    </>
  );
}
