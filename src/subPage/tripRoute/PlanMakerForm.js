import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Calendar} from "../../components/util";
import { StyledBtn } from "../../styleComponents/ui";


const PlanMakerForm = ({tripDate, setTripDate, count, setCount, onSearch, arrivalCity , onSubmit}) => {
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

  //폼 완료 여부
  const isFormComplete = depInput && arrInput && tripDate.start && tripDate.end;
  

  return (
      <div className="plan_form d-flex">
          <div className="formArea d-flex flex-column">
          <div style={{margin:"auto 0"}}>
            <ul className="d-flex gap-3 px-2">
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
                          <button className="icon_box icon_search" onClick={handleClick}></button>
                        </div>
                      </li>
                      <li className="d-flex flex-column gap-1">
                        <b className="text-blue">도착</b>
                        <div className="search d-flex">
                          <input type="text" placeholder="도시를 입력하세요"
                          value={arrInput}
                          onChange={(e) => setArrInput(e.target.value)}/>
                          <button className="icon_box icon_search" onClick={handleClick}></button>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="d-flex flex-column justify-content-between">
                <div className="inputTripDate d-flex flex-column gap-2">
                  <h6 className="inputTit">날짜를 선택해주세요</h6>
                  <Calendar onDateChange={handleDateChange} />
                </div>
                <div className="inputHeadCount d-flex flex-column justify-content-between gap-2">
                  <h6 className="inputTit ">인원을 선택해주세요</h6>
                  <div className="d-flex justify-content-between align-items-center gap-2">
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
          </div>
          <div className="confirmArea d-flex flex-column">
            <ul className="d-flex flex-column" style={{gap:"1.25rem", paddingTop:"24px"}}>
            <li className="tripSpot d-flex gap-2 justify-content-center" style={{textAlign: "center"}}>{arrivalCity || "여행지"}</li>
            <li className="rtipDate d-flex flex-column align-items-center gap-2" style={{textAlign: "center"}}>
              <span>{tripDate.start}</span><span>~{tripDate.end}</span>
            </li>
            <li className="headCount d-flex gap-2 justify-content-center" style={{textAlign: "center"}}>
              인원 <span>{count}</span>명
            </li>
            </ul>
            <div className="d-flex justify-content-center">
             <StyledBtn  padding={[0.625, 1.5]} fontSize="var(--semismall-text)" fontWeight="700" color="var(--trip-yellow)" 
             disabled={!isFormComplete} className={!isFormComplete ? "Btn_disabled":""} onClick={() => {onSearch(depInput, arrInput);  onSubmit();}}>계획에 담기</StyledBtn>
            </div>
          </div>
      </div>
  );
};

export const PlanMakerInfo = ({tripDate, count, departureCity, arrivalCity, onEdit}) => {
    return (
        <div className="plan_info d-flex align-items-center">
                  <ul className="plan_info_detail d-flex gap-2 order-2">
                    <li>{departureCity || "출발"} - {arrivalCity || "도착"}</li>
                    <li>{tripDate.start} - {tripDate.end}</li>
                    <li>인원 {count}명</li>
                  </ul>
                  <ul className="plan_info_edit d-flex justify-content-end order-3">
                    <li>
                      <span style={{color:"var(--trip-whithe)"}} onClick={onEdit}>수정하기</span>
                    </li>
                  </ul>
              </div>
    );
};


export default PlanMakerForm;