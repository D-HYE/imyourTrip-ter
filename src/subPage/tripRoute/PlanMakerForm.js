import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Calendar } from "../../components/util";

const PlanMakerForm = ({tripDate, setTripDate, count, setCount, onSearch, arrivalCity}) => {
  //여행지
  const [depInput, setDepInput] = useState('');
  const [arrInput, setArrInput] = useState('');

  const handleClick = () => {
    onSearch(depInput, arrInput); // 부모로 값 전달
  };
  //여행일
  const handleDateChange = ({ start, end }) => {
    setTripDate({ start, end });
  };
  //인원수
  const increase = () => setCount((prev) => prev + 1);
  const decrease = () => setCount((prev) => (prev > 1 ? prev - 1 : 1));

  return (
      <div className="plan_form d-flex">
          <div className="formArea">
          <ul className="d-flex gap-4" style={{height:"254px", alignItems:"center"}} >
            <li>
              <div className="inputTripSpot d-flex flex-column gap-4">
                <h6 className="inputTit">지역을 선택해주세요</h6>
                <div className="formWrap">
                  <ul className="d-flex flex-column gap-2">
                    <li className="d-flex flex-column gap-1">
                      <b className="text-blue">출발</b>
                      <div className="search d-flex">
                        <input type="text" placeholder="도시를 입력하세요"
                        value={depInput}
                        onChange={(e) => setDepInput(e.target.value)}
                        />
                        <button className="icon_box" onClick={handleClick}></button>
                      </div>
                    </li>
                    <li className="d-flex flex-column gap-1">
                      <b className="text-blue">도착</b>
                      <div className="search d-flex">
                        <input type="text" placeholder="도시를 입력하세요"
                        value={arrInput}
                        onChange={(e) => setArrInput(e.target.value)}/>
                        <button className="icon_box" onClick={handleClick}></button>
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
          </div>
          <div className="confirmArea">
            <div className="tripSpot">{arrivalCity}</div>
            <div className="tripDate">
              {tripDate.start} - {tripDate.end}
            </div>
            <div className="headCount">
              인원 <span>{count}</span>명
            </div>
            <button>계획 짜기 시작</button>
          </div>
      </div>
  );
};

export const PlanMakerInfo = ({tripDate, count, departureCity, arrivalCity}) => {
    return (
        <div className="plan_info d-flex align-items-center">
                  <ul className="plan_info_detail d-flex gap-2 order-2">
                    <li>{departureCity} - {arrivalCity}</li>
                    <li>{tripDate.start} - {tripDate.end}</li>
                    <li>인원 {count}명</li>
                  </ul>
                  <ul className="plan_info_edit d-flex justify-content-end order-3">
                    <li>
                      <Link to="/">수정하기</Link>
                    </li>
                  </ul>
              </div>
    );
};


export default PlanMakerForm;

