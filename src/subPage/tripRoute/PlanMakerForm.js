import React, { useState } from 'react';
import {Calendar} from "../../components/util"
// https://reactdatepicker.com/


const PlanMakerForm = () => {
    //여행일
    const [tripDate, setTripDate] = useState({ start: null, end: null });
    const handleDateChange = ({ start, end }) => {
        setTripDate({ start, end });
    };
    //인원수
    const [count, setCount] = useState(0);
    const increase = () => setCount(prev => prev + 1);
    const decrease = () => setCount(prev => (prev > 0 ? prev - 1 : 0));
  
    return (
        <div className="plan_form">
            <div className="d-flex justify-content-center">
                <ul className="formArea d-flex">
                    <li>
                        <div className="inputTripSpot">
                            <h6 className="inputTit">지역을 선택해주세요</h6>
                            <div className="formWrap">
                                <ul>
                                    <li>
                                        <b>출발</b>
                                        <div className="search d-flex">
                                            <input type="text" placeholder='도시를 입력하세요' />
                                            <button className="icon_box"></button>
                                        </div>
                                    </li>
                                    <li>
                                        <b>도착</b>
                                        <div className="search d-flex">
                                            <input type="text" placeholder='도시를 입력하세요' />
                                            <button className="icon_box"></button>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="inputTripDate">
                            <h6 className="inputTit">날짜를 선택해주세요</h6>
                            <Calendar onDateChange={handleDateChange}/>
                        </div>
                        <div className="inputHeadCount">
                            <h6 className="inputTit">인원을 선택해주세요</h6>
                            <div className="d-flex">
                                <button className="icon_box minus" onClick={decrease}>-</button>
                                <div className="count">{count}</div>
                                <button className="icon_box plus" onClick={increase}>+</button>
                            </div>
                        </div>
                    </li>
                </ul>
                <div className="confirmArea">
                    <div className="tripSpot">도시명</div>
                    <div className="tripDate">{tripDate.start}~{tripDate.end}</div>
                    <div className="headCount">인원 <span>00</span>명</div>
                    <button>계획 짜기 시작</button>
                </div>
            </div>
        </div>
    );
};

export default PlanMakerForm;