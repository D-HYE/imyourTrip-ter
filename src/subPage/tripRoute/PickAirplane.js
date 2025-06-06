import React, { useState, useEffect } from 'react';
import { StyledBtn } from '../../styleComponents/ui';


const PickAirplane = ({ hyodata, isOneWay }) => {
    const airplane = hyodata["airplane"];
    const [selectedAirlines, setSelectedAirlines] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState([]);

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
        <div className="plane_listbox d-flex flex-column" id="airplaneArea">
            {selectedAirlines.map((selectedAirline, index) => (
            <div className="plane_list d-flex align-items-end justify-content-between" key={index}>
                <ul className="plane_left d-flex justify-content-center flex-column gap-2">
                    <li class="d-flex" style={{ gap : "5rem"}}>
                        <div className="planeLogo_box d-flex flex-column align-items-center gap-2"> 
                            <div className="planeLogo">
                                {selectedAirline && <img src={selectedAirline.logo} alt={selectedAirline.name} />}
                            </div>
                            <span>{selectedAirline?.name}</span>
                        </div>
                        <div className="plane_section_time d-flex justify-content-between align-items-center">
                            <div className="plane_time d-flex flex-column align-items-center gap-1">
                                <p className="airport">{selectedProducts[index]?.go?.depLoc}</p>
                                <p>{selectedProducts[index]?.go?.depTime}</p>
                            </div>
                            <i class="arrow-right"></i>
                            <div className="plane_time d-flex flex-column align-items-center gap-1">
                                <p className="airport">{selectedProducts[index]?.go?.arrLoc}</p>
                                <p>{selectedProducts[index]?.go?.arrTime}</p>
                            </div>
                        </div>
                    </li>
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
                    </li>
                    )}
                </ul>
            
         
                
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
                    <StyledBtn padding={[0.625, 1.5]} fontSize="var(--semismall-text)" fontWeight="700" color="var(--trip-yellow)">계획에 담기</StyledBtn>
                    <div className="share_heart_group d-flex align-items-end justify-content-end gap-1">
                    <button className="share-btn" alt="공유">
                        <span className="share_icon"></span>
                    </button> 
                    <button className="heart-btn" alt="찜" onClick={()=>toggleHeart(index)}>
                        <span className={isHeart[index] ? "heart_icon Heart" : "heart_icon"}></span>
                    </button>
                </div> 
                </div>
            </div>
            ))}
        </div>
    );
};

export default PickAirplane;
