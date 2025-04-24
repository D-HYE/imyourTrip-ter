import React, { useState, useRef, forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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

  return (
    <div className={`select_box ${isOpen ? "active" : ""}`}>
      <div className="select_btn d-flex justify-content-between align-items-center gap-1" onClick={toggleDropdown}>
        <div className="selected_val">필터</div>
        <span className={`arrow ${isOpen ? "rotate" : ""}`}></span>
      </div>
      {isOpen && (
        <div className="option_list">
          <div className="filter_section d-flex flex-column gap-3">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

// 상대시간
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
      />
    </div>
  );
}