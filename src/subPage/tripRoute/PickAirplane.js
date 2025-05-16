import React, { useState, useEffect } from 'react';
import { FillterBox } from "../../components/util";
import element from "../../scss/elements.module.scss";
import { StyledBtn } from '../../styleComponents/ui';




const PickAirplane = ({ hyodata }) => {
    const airplane = hyodata["airplane"];
    const [selectedAirlines, setSelectedAirlines] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState([]);

    //항공으로 넘어갈 거
    const [isOneWay, setIsOneWay] = useState(false);
    const toggleOneWay = () => {
        setIsOneWay((prev) => !prev);
    };

    useEffect(() => {
        if (!airplane?.airways || !airplane?.flightproduct) return;
    
        const airlineKeys = Object.keys(airplane.airways);
        const roundTripProducts = airplane.flightproduct.filter(product => product.back);
    
        const getRandomItem = (array) => array[Math.floor(Math.random() * array.length)];
    
        const randomAirlines = Array.from({ length: 4 }, () => getRandomItem(airlineKeys))
            .map(key => airplane.airways[key]);
    
        const randomProducts = Array.from({ length: 4 }, () => getRandomItem(roundTripProducts));
    
        setSelectedAirlines(randomAirlines);
        setSelectedProducts(randomProducts);
    }, [airplane]);

const [isHeart, setIsHeart] = useState(false);
const toggleHeart = (index) => {
    setIsHeart((prev) =>({...prev,[index]:!prev[index]}) );}


    return (
<<<<<<< HEAD
        <div className="product_list">
            <div className="plane_title d-flex justify-content-between align-items-center">
                <ul className="d-flex align-items-center gap-3">
                    <li className="plane_title_all">항공권</li>
                    <li>
                        <FillterBox>
                        <div className="d-flex flex-column gap-2">
                            <div className="filter_section_title">
                            <span className="title">유형</span>
=======
        <div className="plane_listbox d-flex flex-column" id="airplaneArea">
            {selectedAirlines.map((selectedAirline, index) => (
            <div className="plane_list d-flex align-items-end justify-content-between" key={index}>
                <ul className="plane_left d-flex justify-content-center flex-column gap-2">
                    <li class="d-flex" style={{ gap : "5rem"}}>
                        <div className="planeLogo_box d-flex flex-column align-items-center gap-2"> 
                            <div className="planeLogo">
                                {selectedAirline && <img src={selectedAirline.logo} alt={selectedAirline.name} />}
>>>>>>> ced69f3466cd8952930b7ea5cc5db7262fa6164b
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
<<<<<<< HEAD
                        <div className="d-flex flex-column gap-2">
                            <div className="filter_section_title">
                            <span className="title">경유</span>
=======
                        <div className="plane_section_time d-flex justify-content-between align-items-center">
                            <div className="plane_time d-flex flex-column align-items-center gap-1">
                                <p className="airport">{selectedProducts[index]?.go?.depLoc}</p>
                                <p>{selectedProducts[index]?.go?.depTime}</p>
                            </div>
                            <i class="arrow-right"></i>
                            <div className="plane_time d-flex flex-column align-items-center gap-1">
                                <p className="airport">{selectedProducts[index]?.go?.arrLoc}</p>
                                <p>{selectedProducts[index]?.go?.arrTime}</p>
>>>>>>> ced69f3466cd8952930b7ea5cc5db7262fa6164b
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
<<<<<<< HEAD
                    </ul>
                <ul className="d-flex gap-2">
                    <li className="front_btn">
                        <a href="#none">계획짜기</a>
=======
                {!isOneWay && selectedProducts[index]?.back && (
                    <li class="d-flex" style={{ gap : "5rem"}}>
                        <div className="planeLogo_box d-flex flex-column align-items-center gap-2">
                            <div className="planeLogo">
                                {selectedAirline && <img src={selectedAirline.logo} alt={selectedAirline.name} />}
                            </div>
                            <span>{selectedAirline?.name}</span>
                        </div>
                        <div className="plane_section_time d-flex justify-content-between align-items-center rel">
                            <div className="plane_time d-flex flex-column align-items-center gap-1">
                                <p className="airport">{selectedProducts[index]?.back?.depLoc}</p>
                                <p>{selectedProducts[index]?.back?.depTime}</p>
                            </div>
                            <i class="arrow-right"></i>
                            <div className="plane_time d-flex flex-column align-items-center gap-1">
                                <p className="airport">{selectedProducts[index]?.back?.arrLoc}</p>
                                <p>{selectedProducts[index]?.back?.arrTime}</p>
                            </div>
                        </div>
>>>>>>> ced69f3466cd8952930b7ea5cc5db7262fa6164b
                    </li>
                </ul>
<<<<<<< HEAD
=======
            
         
                
                 {/* 가격표시 */}
                <div className="plane_right d-flex flex-column justify-content-end align-items-end gap-2">
                    <div className="totalPrice">
                    {isOneWay ? (      
                        <span>₩{parseInt(selectedProducts[index]?.go?.price.replace(',', ''))
                            .toLocaleString()}</span>
                    ) : (
                        <span>
                            ₩{(parseInt(selectedProducts[index]?.go?.price.replace(',', '')) +
                            parseInt(selectedProducts[index]?.back?.price.replace(',', '')))
                            .toLocaleString()}
                        </span>
                    )}
                    </div>
                    <SquareBtn padding={[0.625, 1.5]} fontSize="var(--semismall-text)" fontWeight="700" color="var(--trip-yellow)">계획에 담기</SquareBtn>
                    <div className="share_heart_group d-flex align-items-end justify-content-end gap-1">
                    <button className="share-btn" alt="공유">
                        <span className="share_icon"></span>
                    </button> 
                    <button className="heart-btn" alt="찜" onClick={()=>toggleHeart(index)}>
                        <span className={isHeart[index] ? "heart_icon Heart" : "heart_icon"}></span>
                    </button>
                </div> 
                </div>
>>>>>>> ced69f3466cd8952930b7ea5cc5db7262fa6164b
            </div>
            <div className="plane_list d-flex flex-column" id="airplaneArea">
                {selectedAirlines.map((selectedAirline, index) => (
                <div className="plane_left d-flex align-items-end gap-5" key={index}>
                    <ul className="d-flex justify-content-end flex-column">
                        <li className="d-flex">
                            <div className="planeLogo_box d-flex align-items-center gap-2">
                                <div className="planeLogo">
                                    {selectedAirline && <img src={selectedAirline.logo} alt={selectedAirline.name} />}
                                </div>
                                <span>{selectedAirline?.name}</span>
                            </div>
                            <div className="plane_section_time d-flex justify-content-between gap-5">
                                <div className="plane_time d-flex flex-column align-items-end gap-1">
                                    <p>{selectedProducts[index]?.go?.depTime}</p>
                                    <p className="airport">{selectedProducts[index]?.go?.depLoc}</p>
                                </div>
                                <div className="flight-time d-flex flex-column align-items-center gap-1 ">
                                    <p>소요시간 n시간</p>
                                    <div className="arrow-right"></div>
                                    <p>직항</p>
                                </div>
                                <div className="plane_time d-flex flex-column align-items-end gap-1">
                                    <p>{selectedProducts[index]?.go?.arrTime}</p>
                                    <p className="airport">{selectedProducts[index]?.go?.arrLoc}</p>
                                </div>
                            </div>
                        </li>
                    {!isOneWay && selectedProducts[index]?.back && (
                        <li className="check d-flex">
                            <div className="planeLogo_box d-flex align-items-center gap-2">
                                <div className="planeLogo">
                                    {selectedAirline && <img src={selectedAirline.logo} alt={selectedAirline.name} />}
                                </div>
                                <span>{selectedAirline?.name}</span>
                            </div>
                            <div className="plane_section_time d-flex justify-content-between gap-5">
                                <div className="plane_time d-flex flex-column align-items-end gap-1">
                                    <p>{selectedProducts[index]?.back?.depTime}</p>
                                    <p className="airport">{selectedProducts[index]?.back?.depLoc}</p>
                                </div>
                                <div className="flight-time d-flex flex-column align-items-center gap-1">
                                    <p>소요시간 n시간</p>
                                    <div className="arrow-right"></div>
                                    <p>직항</p>
                                </div>
                                <div className="plane_time d-flex flex-column align-items-end gap-1">
                                    <p>{selectedProducts[index]?.back?.arrTime}</p>
                                    <p className="airport">{selectedProducts[index]?.back?.arrLoc}</p>
                                </div>
                            </div>
                        </li>
                        )}
                    </ul>
                    <div className="share_heart_group d-flex align-items-end gap-1">
                        <button className="share-btn" alt="공유">
                            <span className="share_icon"></span>
                        </button>
                        <button className="heart-btn" alt="찜" onClick={()=>toggleHeart(index)}>
                            <span className={isHeart[index] ? "heart_icon Heart" : "heart_icon"}></span>
                        </button>
                    </div>
                    <div className="plane_right d-flex flex-column justify-content-end align-items-end gap-3 px-2">
                        <p className="totalPrice">
                        {isOneWay ? (
                            <span>₩{parseInt(selectedProducts[index]?.go?.price.replace(',', ''))
                                .toLocaleString()}</span>
                        ) : (
                            <span>
                                ₩{(parseInt(selectedProducts[index]?.go?.price.replace(',', '')) +
                                parseInt(selectedProducts[index]?.back?.price.replace(',', '')))
                                .toLocaleString()}
                            </span>
                        )}
                        </p>
                        <StyledBtn padding={[1, 2.5]} fontSize="var(--semismall-text)" fontWeight="700" color="var(--trip-yellow)">계획에 담기</StyledBtn>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
};

export default PickAirplane;
