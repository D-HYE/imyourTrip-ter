import React, { useState, useRef, forwardRef} from "react";
import { useLocation } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ekmodule from "../../src/scss/faq.ek.module.scss";

import { ko } from "date-fns/locale";

//게시판 필터
export function SelectBox({ children }) {
  const [isOpen, setIsOpen] = useState(false); 
  const [selectedValue, setSelectedValue] = useState(children[0].props.children); 
  const selectBoxRef = useRef(null); // 외부 클릭 감지

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (option) => {
    setSelectedValue(option);
    setIsOpen(false);
  };


  return (
    <div className={`select_box ${isOpen ? "active" : ""}`} ref={selectBoxRef}>
      <div className="select_btn d-flex justify-content-between align-items-center gap-1" onClick={toggleDropdown}>
        <div className="selected_val">{selectedValue}</div>
        <span className={`arrow ${isOpen ? "rotate" : ""}`}></span>
      </div>
      {isOpen && (
        <div className="option_list">
          <ul className="d-flex flex-column">
            {React.Children.map(children, (child) =>
              React.cloneElement(child, {
                onClick: (e) => {
                  child.props.onClick?.(e); // 기존 onClick 실행
                  handleOptionClick(child.props.children); // 선택값 갱신
                },
                className: `option ${selectedValue === child.props.children ? "selected" : ""}`,
              })
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

//항공&호텔 필터
export function FillterBox({ children }) {
  const [isOpen, setIsOpen] = useState(false); // 드롭다운 열림 여부
  //const [selectedValue, setSelectedValue] = useState(children[0].props.children); // 첫 번째 옵션 기본 선택
  //const selectBoxRef = useRef(null); // 외부 클릭 감지용

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };
 // const handleOptionClick = (option) => {
    //setSelectedValue(option);
    //setIsOpen(false);
  //};
  const closeDropdown = () => setIsOpen(false);

  return (
    <div className={`select_box ${isOpen ? "active" : ""}`}>
      <div className="select_btn d-flex justify-content-between align-items-center gap-1" onClick={toggleDropdown}>
        <div className="selected_val">필터</div>
        <span className={`arrow ${isOpen ? "rotate" : ""}`}></span>
      </div>
      {isOpen && (
        <div className="option_list">
          <div className="filter_section d-flex flex-column gap-3">
            {typeof children === "function" ? children({closeDropdown}) : children}
          </div>
        </div>
      )}
    </div>
  );
}

// 상대시간
// 더 좋은 플러그인 있을?지도? 
export function RelativeTime(dateString) {
  const now = new Date();
  const date = new Date(dateString);
  const diffInSeconds = Math.floor((now - date) / 1000);

  if (diffInSeconds < 60) return '방금 전';
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}분 전`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}시간 전`;
  if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 86400)}일 전`;
  if (diffInSeconds < 31536000) return `${Math.floor(diffInSeconds / 2592000)}달 전`;
  return `${Math.floor(diffInSeconds / 31536000)}년 전`;

}

// 달력
export function Calendar({onDateChange}){
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  // 초기값, 오늘 내일
  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(tomorrow);

  const onChange = (dates) => {
    const [start, end] = dates || [];
    setStartDate(start);
    setEndDate(end);
    if (onDateChange) {
      onDateChange({
        start: start ? start.toLocaleDateString() : "",
        end: end ? end.toLocaleDateString() : "",
      });
    }
  };

  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <button type="button" onClick={onClick} ref={ref}>
      {value ? value : "날짜 선택"}
    </button>
  ));

  return (
    <div className="calendar">
      <DatePicker
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        customInput={<CustomInput />}
        locale={ko}
        dateFormat="yyyy. MM. dd" 
      />
    </div>
  );
}

//계획짜기 탭메뉴
export function TabMenu({activeTab, setActiveTab}){
  const location = useLocation();
  const Showonly = location.pathname === "/user/mypage";
  const tabs = [
    ...(Showonly ?["전체보기"] : []),
    "항공권",
    "숙박",
    "투어",
    "티켓",
    "트립카",
  ];

  return (
    <div className="tab_content">
      <ul className="d-flex align-items-end m-0 p-0 ">
        {tabs.map((tab) => (
          <li
            key={tab}
            className={`${tab === "트립카" ? "tripcar_tab" : ""} ${
              activeTab === tab ? "tabClick" : ""} d-flex align-items-center justify-content-center`}
            onClick={() => setActiveTab(tab)}
          >
           {tab === "트립카" ? <a href="https://i-web.kr/green18/"><span>{tab}</span></a> : <span>{tab}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}

//FAQ 탭메뉴
export function FaqTabMenu({activeTab, setActiveTab}){
  const tabs = [
    "전체보기",
    "항공권",
    "숙박",
    "티켓",
    "트립카",
    "회원/기타"
  ];

  return (
    <div className={`${ekmodule.faq_tab}`}>
      <ul className={`${ekmodule.faqtabmenu} d-flex align-items-end m-0 p-0 `}>
        {tabs.map((tab) => (
          <li
            key={tab}
            className={`
            ${tab === "트립카" ? ekmodule.faqtripcar : ""}
            ${activeTab === tab ? ekmodule.faqtabClick : ""} 
            d-flex align-items-center justify-content-center`}
            onClick={() => setActiveTab(tab)}
          >
            <span>{tab}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}


// 404 페이지
export function NotFound() {
  return (
      <main className="subMain page_error">
          <div className="container">
                  <div className="bangMark">!</div>
                  <p className="errorNum">404 ERROR</p>
                  <p className="errorDesc">페이지를 찾을 수 없습니다</p>
                      
                  <div className="buttonWrap" >
                      <button onClick={() => window.history.back()} className="button1">이전 페이지</button>
                      <button onClick={() => (window.location.href = "/") } className="button2">메인으로</button>
                      
                  </div>
                  <img src="https://d-hye.github.io/source/img/illustrator/error_bg.svg" alt="404 Error" />
          </div>
      </main>
  );
}

//준비중 페이지
export function CommingSoon({ showHeader = false }) {
  return (
      <div className="commingSoon">
        {showHeader && (
          <div className="filter_title d-flex align-items-center jsutify-content-between" >
              <span className="plane_title_all d-flex align-items-center">전체보기</span>
              <button className="front_btn">
                <a href="#none">계획짜기</a>
              </button>
          </div>
        )}
          <div className="d-flex flex-column justify-content-center align-items-center gap-5 px-2" style={{padding:"5rem 0"}}>
                  <div style={{fontFamily:"var(--theJamsil-extrabold)", color:"var(--trip-blue)", fontSize:"8rem"}}>!</div> 
                  <img style={{maxWidth:"681px"}} src="https://d-hye.github.io/source/img/illustrator/coming_soon.svg" alt="comming_soon" />
                  <p style={{fontFamily:"var(--theJamsil-bold)",fontSize:"var(--main-slide)", color:"var(--trip-blue)"}}>준비중 입니다.</p>
                  {! showHeader &&(
                  <div className="d-flex jsutify-content-center gap-4">
                      <button onClick={() => window.history.back()} 
                      style={{backgroundColor:"var(--trip-blue)", padding:"1rem 69px",borderRadius:"5px", boxShadow:"var(--dropShadow)" }}><span style={{fontFamily:"var(--theJamsil-bold)", fontSize:"var(--big-text)",color:"var(--trip-white)"}} >이전 페이지</span> </button>
                      <button onClick={() => (window.location.href = "/") } style={{backgroundColor:"var(--trip-blue)", padding:"1rem 69px",borderRadius:"5px", boxShadow:"var(--dropShadow)" }}><span style={{fontFamily:"var(--theJamsil-bold)", fontSize:"var(--big-text)",color:"var(--trip-white)"}}>메인으로</span></button>
                  </div>  
                 )}                 
            </div>
        </div>
  );
}
