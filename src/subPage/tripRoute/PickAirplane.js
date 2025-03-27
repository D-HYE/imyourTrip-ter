import React, { useState, useEffect } from 'react';

const PickAirplane = ({ hyodata, isOneWay }) => {
    const airplane = hyodata["airplane"];
    const [selectedAirlines, setSelectedAirlines] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState([]);

    useEffect(() => {
        const airlineKeys = Object.keys(airplane["airways"]);
        const randomAirlines = [];
        const randomProducts = [];

        // 랜덤으로 4개의 항공사 선택
        for (let i = 0; i < 4; i++) {
            const randomAirlineKey = airlineKeys[Math.floor(Math.random() * airlineKeys.length)];
            randomAirlines.push(airplane["airways"][randomAirlineKey]);

            const productKeys = Object.keys(airplane["flightproduct"]);
            const randomProductKey = productKeys[Math.floor(Math.random() * productKeys.length)];
            randomProducts.push(airplane["flightproduct"][randomProductKey]);
        }

        setSelectedAirlines(randomAirlines);
        setSelectedProducts(randomProducts);
    }, [airplane]);

    return (
        <div className="plane_list">
            <div className="plane_left d-flex">
                <ul className="d-flex flex-column" id="airplaneArea">
                    {/* 4개의 항공편을 순차적으로 렌더링 */}
                    {selectedAirlines.map((selectedAirline, index) => (

                        <li key={index} className="d-flex">
                            <div className="d-flex align-items-center gap-1">
                                <div className="planeLogo">
                                    {selectedAirline && <img src={selectedAirline.logo} alt={selectedAirline.name} />}
                                </div>
                                <span>{selectedAirline?.name}</span>
                            </div>
                            <div className="plane_section_time d-flex gap-5">
                                <div className="plane_time d-flex flex-column align-items-end gap-1">
                                    <p>{selectedProducts[index]?.go?.depTime}</p>
                                    <p className="airport">{selectedProducts[index]?.go?.depLoc}</p>
                                </div>
                                <div className="flight-time d-flex flex-column align-items-center gap-1">
                                    <p>소요시간 n시간</p>
                                    <div className="arrow-right"></div>
                                    <p>직항</p>
                                </div>
                                <div className="plane_time d-flex flex-column align-items-end gap-1">
                                    <p>{selectedProducts[index]?.go?.arrTime}</p>
                                    <p className="airport">{selectedProducts[index]?.go?.arrLoc}</p>
                                </div>
                            </div>
                            {!isOneWay && selectedProducts[index]?.back && (
                                <li className="check d-flex">
                                    <div className="d-flex align-items-center gap-1">
                                        <div className="planeLogo">
                                            {selectedAirline && <img src={selectedAirline.logo} alt={selectedAirline.name} />}
                                        </div>
                                        <span>{selectedAirline?.name}</span>
                                    </div>
                                    <div className="plane_section_time d-flex gap-5">
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
                        </li>
                    ))}
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
