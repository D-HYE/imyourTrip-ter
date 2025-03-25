import React, { useState, useRef} from "react";

function SelectBox({ children }) {
  const [isOpen, setIsOpen] = useState(false); // 드롭다운 열림 여부
  const [selectedValue, setSelectedValue] = useState(children[0].props.children); // 첫 번째 옵션 기본 선택
  const selectBoxRef = useRef(null); // 외부 클릭 감지용

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
                onClick: () => handleOptionClick(child.props.children),
                className: `option ${selectedValue === child.props.children ? "selected" : ""}`,
              })
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SelectBox;
