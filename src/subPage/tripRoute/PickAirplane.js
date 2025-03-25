import React from 'react';
import { useState, useEffect } from 'react';


const PickAirplane = ({hyodata}) => {
    const airplane = hyodata["airplane"]

    const [selectedAirline, setSelectedAirline] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const [isOneWay, setIsOneWay] = useState(false); // 편도 선택 여부

    useEffect(() => {
        const airlineKeys = Object.keys(airplane["airways"]);
        const randomAirline = airlineKeys[Math.floor(Math.random() * airlineKeys.length)];
        setSelectedAirline(airplane["airways"][randomAirline]);

        const productKeys = Object.keys(airplane["flightproduct"]);
        const randomProduct = productKeys[Math.floor(Math.random() * productKeys.length)];
        setSelectedProduct(airplane["flightproduct"][randomProduct]);
    }, [airplane]);

    // 편도/왕복 선택 버튼 이벤트 핸들러
    const toggleOneWay = () => {
        setIsOneWay((prev) => !prev);
    };

    

    return (
        <div className="plane_list">
            <div className="flight-options">
                <button onClick={toggleOneWay}>{isOneWay ? "왕복 선택" : "편도 선택"}</button>
            </div>
            <div className="plane_left d-flex">
                <ul className="d-flex flex-column" id="airplaneArea">
                {/* 출발편 */}
                <li className="d-flex">
                    <div className="d-flex align-items-center gap-1">
                    <div className="planeLogo">
                        {selectedAirline && <img src={selectedAirline.logo} alt={selectedAirline.name} />}
                    </div>
                    <span>{selectedAirline?.name}</span>
                    </div>
                    <div className="plane_section_time d-flex gap-5">
                    <div className="plane_time d-flex flex-column align-items-end gap-1">
                        <p>{selectedProduct?.go?.depTime}</p>
                        <p className="airport">{selectedProduct?.go?.depLoc}</p>
                    </div>
                    <div className="flight-time d-flex flex-column align-items-center gap-1">
                        <p>소요시간 n시간</p>
                        <div className="arrow-right"></div>
                        <p>직항</p>
                    </div>
                    <div className="plane_time d-flex flex-column align-items-end gap-1">
                        <p>{selectedProduct?.go?.arrTime}</p>
                        <p className="airport">{selectedProduct?.go?.arrLoc}</p>
                    </div>
                    </div>
                </li>

                {/* ✅ 편도가 선택되지 않았을 때만 복귀편을 표시 */}
                {!isOneWay && selectedProduct?.back && (
                    <li className="d-flex">
                    <div className="d-flex align-items-center gap-1">
                        <div className="planeLogo">
                        {selectedAirline && <img src={selectedAirline.logo} alt={selectedAirline.name} />}
                        </div>
                        <span>{selectedAirline?.name}</span>
                    </div>
                    <div className="plane_section_time d-flex gap-5">
                        <div className="plane_time d-flex flex-column align-items-end gap-1">
                        <p>{selectedProduct?.back?.depTime}</p>
                        <p className="airport">{selectedProduct?.back?.depLoc}</p>
                        </div>
                        <div className="flight-time d-flex flex-column align-items-center gap-1">
                        <p>소요시간 n시간</p>
                        <div className="arrow-right"></div>
                        <p>직항</p>
                        </div>
                        <div className="plane_time d-flex flex-column align-items-end gap-1">
                        <p>{selectedProduct?.back?.arrTime}</p>
                        <p className="airport">{selectedProduct?.back?.arrLoc}</p>
                        </div>
                    </div>
                    </li>
                )}
                </ul>
            </div>
            <div className="plane_right">
                <p>금액</p>
                <button><span>계획에 담기</span></button>
            </div>
        </div>
    );
};

export default PickAirplane;