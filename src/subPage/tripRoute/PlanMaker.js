import React,{useState} from "react";
import PickAirplane from "./PickAirplane";

import {FillterBox} from "../../components/SelectBox"
import element from "../../scss/elements.module.scss"
import hyodata from "../../data/hyodata.json"; // JSON 파일을 import로 가져오기

export default function PlanMaker() {
    const [isOneWay, setIsOneWay] = useState(false);

    const toggleOneWay = () => {
        setIsOneWay((prev) => !prev);
    };

    return (
        <div className="container">
            <div className="plan_info d-flex align-items-center">
                <ul className="d-flex order-1">
                    <li><span>김효정곤듀예요</span>님의 일정</li>
                </ul>
                <ul className="d-flex gap-2 order-2">
                    <li>인천 - 가오슝</li>
                    <li>2025.02.18 - 2025.03.18</li>
                    <li>인원 2명</li>
                </ul> 
                <ul className="plan_edit d-flex justify-content-end order-3">
                    <li><a href="/">수정하기</a></li>
                </ul>           
            </div>
            <div className="tab_content">
                <ul className="d-flex gap-3">
                    <li><a href="#none">#항공권</a></li>
                    <li><a href="#none">#숙소</a></li>
                    <li><a href="#none">#투어</a></li>
                    <li><a href="#none">#티켓</a></li>
                    <li><a href="#none">#랜드마크</a></li>
                    <li><a href="#none">#교통패스</a></li>
                    <li className="tripcar_tab"><a href="#none">#트립카</a></li>
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
                                    <li className="filter_radio d-flex align-items-center gap-1">
                                        <label className={element.checkbox_label}>
                                            <input 
                                                type="checkbox" 
                                                checked={!isOneWay} 
                                                onChange={toggleOneWay} 
                                            />
                                            <span>왕복</span>
                                        </label>
                                    </li>
                                    <li className="filter_radio d-flex align-items-center gap-1">
                                        <label className={element.checkbox_label}>
                                            <input 
                                                type="checkbox" 
                                                checked={isOneWay} 
                                                onChange={toggleOneWay} 
                                            />
                                            <span>편도</span>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                            <div className="d-flex flex-column gap-2">
                                <div className="filter_section_title">
                                    <span className="title">경유</span>
                                </div>
                                <ul className="d-flex gap-3">
                                <li className="filter_radio d-flex align-items-center gap-1" >
                                        <label className={element.checkbox_label}>
                                            <input type="checkbox" />
                                            <span>직항</span>
                                        </label>
                                    </li>
                                    <li className="filter_radio d-flex align-items-center gap-1" >
                                        <label className={element.checkbox_label}>
                                            <input type="checkbox" />
                                            <span>1회이상 경유</span>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                            <div className="d-flex flex-column gap-2">
                                <div className="filter_section_title ">
                                    <span className="title">시간대</span>
                                </div>
                                <div>
                                    <p>가는 날</p>
                                    <span className="time_range">00:00 ~ 24:00</span>
                                    <div className="timeTable py-2">
                                        <div id="sliderbar_go"></div>
                                    </div>
                                </div>
                                <div>
                                    <p>오는 날</p>
                                    <span className="time_range">00:00 ~ 24:00</span>
                                    <div className="timeTable py-2">
                                        <div  id="sliderbar_back"></div>
                                    </div>
                                </div>
                            </div>                                
                        </FillterBox>
                    </li>
                </ul>    
                <ul className="d-flex gap-2">    
                    <li className="before_btn"><a href="#none">이전</a></li>
                    <li className="front_btn"><a href="#none">다음</a></li>
                </ul>
            </div>
            <PickAirplane hyodata={hyodata} isOneWay={isOneWay} />
        </div>
    );
}