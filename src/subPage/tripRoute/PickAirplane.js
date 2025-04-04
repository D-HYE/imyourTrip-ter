import React, { useState, useEffect } from 'react';
import { SquareBtn } from '../../styleComponents/ui';

const PickAirplane = ({ hyodata, isOneWay }) => {
    const airplane = hyodata["airplane"];
    const [selectedAirlines, setSelectedAirlines] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState([]);

    useEffect(() => {
        const airlineKeys = Object.keys(airplane["airways"]);
        const randomAirlines = [];
        const randomProducts = [];

        const roundTripProducts = airplane["flightproduct"].filter(product => product.back);

        for (let i = 0; i < 5; i++) {
            const randomAirlineKey = airlineKeys[Math.floor(Math.random() * airlineKeys.length)];
            randomAirlines.push(airplane["airways"][randomAirlineKey]);

            const productKeys = Object.keys(airplane["flightproduct"]);
            const randomProductKey = productKeys[Math.floor(Math.random() *  roundTripProducts.length)];
            randomProducts.push( roundTripProducts[randomProductKey]);
        }

        setSelectedAirlines(randomAirlines);
        setSelectedProducts(randomProducts);
    }, [airplane]);
const [isHeart, setIsHeart] = useState(false);
const toggleHeart = (index) => {
    setIsHeart((prev) =>({...prev,[index]:!prev[index]}) );}


    return (
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
                    <SquareBtn padding={[1, 2.5]} fontSize="var(--semismall-text)" fontWeight="700" color="var(--trip-yellow)">계획에 담기</SquareBtn>
                </div>
            </div>
            ))}
        </div>
    );
};

export default PickAirplane;
