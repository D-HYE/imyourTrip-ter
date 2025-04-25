import React, { useState } from "react";
import { Link } from "react-router-dom";

import PickAirplane from "./PickAirplane";
import Wishlist from "../user/Wishlist";
import PlanMakerForm from "./PlanMakerForm";

import { FillterBox } from "../../components/util";
import element from "../../scss/elements.module.scss";
import hyodata from "../../data/hyodata.json"; // JSON 파일을 import로 가져오기

export default function PlanMaker() {
  const [isOneWay, setIsOneWay] = useState(false);

  const toggleOneWay = () => {
    setIsOneWay((prev) => !prev);
  };

  const [activeTab, setActiveTab] = useState("");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

    return (
        <>
        <Wishlist></Wishlist>
        <div className="container">
            <PlanMakerForm/>
            <div className="plan_info d-flex align-items-center">
            <ul className="d-flex order-1">
                <li>
                <span>김효정곤듀예요</span>님의 일정
                </li>
            </ul>
            <ul className="d-flex gap-2 order-2">
                <li>인천 - 가오슝</li>
                <li>2025.02.18 - 2025.03.18</li>
                <li>인원 2명</li>
            </ul>
            <ul className="plan_edit d-flex justify-content-end order-3">
                <li>
                <Link to="/">수정하기</Link>
                </li>
            </ul>
            </div>
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
                    className={`${tab === "#트립카" ? "tripcar_tab" : ""} ${
                    activeTab === tab ? "tabClick" : ""
                    }`}
                    onClick={() => handleTabClick(tab)}
                >
                    <Link to="#none">{tab}</Link>
                </li>
                ))}
            </ul>
            </div>
            <div className="plane_title d-flex justify-content-between align-items-center">
            <ul className="d-flex align-items-center gap-3">
                <li className="plane_title_all">전체보기</li>
                <li>
                <FillterBox>
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
                        <span className="time_range">00:00 ~ 24:00</span>
                        <div className="timeTable py-2">
                            <div
                            id={`sliderbar_${day === "가는 날" ? "go" : "back"}`}
                            ></div>
                        </div>
                        </div>
                    ))}
                    </div>
                </FillterBox>
                </li>
            </ul>
            <ul className="d-flex gap-2">
                <li className="before_btn">
                <a href="#none">이전</a>
                </li>
                <li className="front_btn">
                <a href="#none">다음</a>
                </li>
            </ul>
            </div>
            <PickAirplane hyodata={hyodata} isOneWay={isOneWay} />
        </div>
        </>
    );
}
