import React from 'react';
import useState


const PickAirplane = ({hyodata}) => {
    
    return (
        <div className="plane_list">
                <div className="plane_left d-flex">
                    <ul className="d-flex flex-column" id="airplaneArea">
                        <li className="d-flex">
                            <div className="d-flex align-items-center gap-1">
                                    <div className="planeLogo"></div>
                                    <span></span>                            
                            </div>
                            <div className="plane_section_time d-flex gap-5">
                                <div className="plane_time d-flex flex-column align-items-end gap-1">
                                    <p>오전 06:25</p>
                                    <p className="airport">인천(ICN)</p>
                                </div>
                                <div className="flight-time d-flex flex-column align-items-center gap-1">
                                    <p>소요시간 n시간</p>
                                    <div className ="arrow-right"></div>
                                    <p>직항</p>
                                </div>
                                <div className="plane_time d-flex flex-column align-items-end gap-1">
                                    <p>오전 10:10</p>
                                    <p className="airport">가오슝(KHH)</p>
                                </div>
                            </div>
                        </li>
                        <li className="d-flex">
                            <div className="d-flex align-items-center gap-1">
                                <div className="planeLogo"></div>
                                <span></span>                            
                            </div>
                            <div className="plane_section_time d-flex gap-5">
                                <div className="plane_time d-flex flex-column align-items-end gap-1">
                                    <p>오전 10:10</p>
                                    <p className="airport">가오슝(KHH)</p>
                                </div>
                                <div className="flight-time d-flex flex-column align-items-center gap-1">
                                    <p>소요시간 n시간</p>
                                    <div className ="arrow-right"></div>
                                    <p>직항</p>
                                </div>
                                <div className="plane_time d-flex flex-column align-items-end gap-1">
                                    <p>오전 06:25</p>
                                    <p className="airport">인천(ICN)</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div>
                        <ul>
                            <li></li>
                            <li><img src="" alt="찜"/></li>
                        </ul>
                    </div>
                </div>
                <div className="plane_right">
                    <p>금액</p>
                    <button><span>계획에 담기</span></button>
                </div>
            </div>
    );
};

export default PickAirplane;