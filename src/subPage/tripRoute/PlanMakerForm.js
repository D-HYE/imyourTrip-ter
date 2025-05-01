import React from "react";
import { Link } from "react-router-dom";
import { Calendar } from "../../components/util";

const PlanMakerForm = ({tripDate, setTripDate, count, setCount}) => {
  //여행일
  
  const handleDateChange = ({ start, end }) => {
    setTripDate({ start, end });
  };
  //인원수
  
  const increase = () => setCount((prev) => prev + 1);
  const decrease = () => setCount((prev) => (prev > 1 ? prev - 1 : 1));

  return (
      <div className="plan_form">
        <div className="d-flex justify-content-center gap-4">
          <ul className="formArea d-flex gap-4">
            <li>
              <div className="inputTripSpot">
                <h6 className="inputTit">지역을 선택해주세요</h6>
                <div className="formWrap">
                  <ul>
                    <li>
                      <b>출발</b>
                      <div className="search d-flex">
                        <input type="text" placeholder="도시를 입력하세요" />
                        <button className="icon_box"></button>
                      </div>
                    </li>
                    <li>
                      <b>도착</b>
                      <div className="search d-flex">
                        <input type="text" placeholder="도시를 입력하세요" />
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
                <Calendar onDateChange={handleDateChange} />
              </div>
              <div className="inputHeadCount">
                <h6 className="inputTit">인원을 선택해주세요</h6>
                <div className="d-flex">
                  <button className="icon_box minus" onClick={decrease}>
                    -
                  </button>
                  <div className="count">{count}</div>
                  <button className="icon_box plus" onClick={increase}>
                    +
                  </button>
                </div>
              </div>
            </li>
          </ul>
          <div className="confirmArea">
            <div className="tripSpot">도시명</div>
            <div className="tripDate">
              {tripDate.start} - {tripDate.end}
            </div>
            <div className="headCount">
              인원 <span>{count}</span>명
            </div>
            <button>계획 짜기 시작</button>
          </div>
        </div>
      </div>
  );
};

export const PlanMakerInfo = ({tripDate, count}) => {
    return (
        <div className="plan_info">
                
            <div className="d-flex align-items-center">
                <ul className="d-flex order-1">
                <li>
                    <span>김효정곤듀예요</span>님의 일정
                </li>
                </ul>
                <ul className="d-flex gap-2 order-2">
                <li>인천 - 가오슝</li>
                <li>{tripDate.start} - {tripDate.end}</li>
                <li>인원 {count}명</li>
                </ul>
                <ul className="plan_edit d-flex justify-content-end order-3">
                <li>
                    <Link to="/">수정하기</Link>
                </li>
                </ul>
            </div>
        </div>
    );
};


export default PlanMakerForm;

