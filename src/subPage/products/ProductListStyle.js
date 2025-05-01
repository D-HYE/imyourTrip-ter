import React from 'react';
import { Link } from 'react-router-dom';
import { StyledBtn, ImgBox } from '../../styleComponents/ui';

const DefaultList = () => {
    return (
        <div className="product_item img100 productDefault">
            <div className="info_wrap d-flex align-items-center">
                <ImgBox width="17.5rem" height="300px" borderRadius="20px">
                    <Link to="#none"></Link>
                </ImgBox>
                <div className="info_box d-flex flex-column justify-content-between align-items-end">
                    <Link to="#none" className="">
                        <h5 className="product_tit">타이틀타이틀타이틀타이틀</h5>
                        <p className="product_info">제품에 대한 소개 제품에 대한 소개 제품에 대한 소개 제품에 대한 소개</p>
                        <div className="product_cost d-flex justify-content-between align-items-end">
                            <h6>트립터 특가</h6>
                            <div className="d-flex flex-column align-items-end gap-1">
                                <span>00000원</span>
                                <b>00000원</b>
                            </div>
                        </div>
                    </Link>
                    <div>
                        <StyledBtn padding={[1, 2.5]} fontSize="var(--semismall-text)" fontWeight="700" color="var(--trip-yellow)">계획에 담기</StyledBtn>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const HotelList = () => {
    return (
        <div className="product_item img100 productHotel">
            <div className="info_wrap">
                <ImgBox height="240px" borderRadius="20px">
                    <Link to="#none"></Link>
                </ImgBox>
                <div className="info_box">
                    <Link to="#none">
                        <h5 className="product_tit my-1">타이틀타이틀타이틀타이틀</h5>
                        <div className="d-flex justify-content-between align-items-center">
                            <ul className="product_info">
                                <li><span>무슨 역</span> <i>000m</i></li>
                                <li><span>평점</span> <i>4.6</i></li>
                            </ul>
                            <div className="product_cost d-flex flex-column align-items-end gap-1">
                                <span>00000원</span>
                                <b>00000원</b>
                            </div>
                        </div>
                    </Link>
                    <div>
                        <StyledBtn width="100%" padding={[1, 2.5]} fontSize="var(--medium-text)" fontWeight="700" color="var(--trip-yellow)">계획에 담기</StyledBtn>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const AirplaneList = () => {
    return (
        <div className="product_item img100 productAirplane">
            <div className="plane_list d-flex flex-column">
                <div className="plane_left d-flex align-items-end gap-5">
                    <ul className="d-flex justify-content-end flex-column">
                        <li className="d-flex">
                            <div className="planeLogo_box d-flex align-items-center gap-2"> 
                                <div className="planeLogo">
                                    <ImgBox width="80px" height="80px"></ImgBox>
                                </div>
                                <span>항공사</span>
                            </div>
                            <div className="plane_section_time d-flex justify-content-between gap-5">
                                <div className="plane_time d-flex flex-column align-items-end gap-1">
                                    <p>출발시간</p>
                                    <p className="airport">출발지</p>
                                </div>
                                <div className="flight-time d-flex flex-column align-items-center gap-1 ">
                                    <p>소요시간 n시간</p>
                                    <div className="arrow-right"></div>
                                    <p>직항</p>
                                </div>
                                <div className="plane_time d-flex flex-column align-items-end gap-1">
                                    <p>도착시간</p>
                                    <p className="airport">도착지</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div class="share_heart_group d-flex align-items-end gap-1">
                        <button class="share-btn" alt="공유">
                            <span class="share_icon"></span>
                        </button>
                        <button class="heart-btn" alt="찜">
                            <span class="heart_icon"></span>
                        </button>
                    </div>   
                    <div className="plane_right d-flex flex-column justify-content-end align-items-end gap-3 px-2">
                        <p className="totalPrice"><span>₩10,000</span></p>
                        <StyledBtn padding={[1, 2.5]} fontSize="var(--medium-text)" fontWeight="700" color="var(--trip-yellow)">계획에 담기</StyledBtn>
                    </div>
                </div>

                <div className="plane_left d-flex align-items-end gap-5">
                    <ul className="d-flex justify-content-end flex-column">
                        <li className="d-flex">
                            <div className="planeLogo_box d-flex align-items-center gap-2"> 
                                <div className="planeLogo">
                                    <ImgBox width="80px" height="80px"></ImgBox>
                                </div>
                                <span>항공사</span>
                            </div>
                            <div className="plane_section_time d-flex justify-content-between gap-5">
                                <div className="plane_time d-flex flex-column align-items-end gap-1">
                                    <p>출발시간</p>
                                    <p className="airport">출발지</p>
                                </div>
                                <div className="flight-time d-flex flex-column align-items-center gap-1 ">
                                    <p>소요시간 n시간</p>
                                    <div className="arrow-right"></div>
                                    <p>직항</p>
                                </div>
                                <div className="plane_time d-flex flex-column align-items-end gap-1">
                                    <p>도착시간</p>
                                    <p className="airport">도착지</p>
                                </div>
                            </div>
                        </li>
                        <li className="check d-flex">
                            <div className="planeLogo_box d-flex align-items-center gap-2"> 
                                <div className="planeLogo">
                                    <ImgBox width="80px" height="80px"></ImgBox>
                                </div>
                                <span>항공사</span>
                            </div>
                            <div className="plane_section_time d-flex justify-content-between gap-5">
                                <div className="plane_time d-flex flex-column align-items-end gap-1">
                                    <p>출발시간</p>
                                    <p className="airport">출발지</p>
                                </div>
                                <div className="flight-time d-flex flex-column align-items-center gap-1 ">
                                    <p>소요시간 n시간</p>
                                    <div className="arrow-right"></div>
                                    <p>직항</p>
                                </div>
                                <div className="plane_time d-flex flex-column align-items-end gap-1">
                                    <p>도착시간</p>
                                    <p className="airport">도착지</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div class="share_heart_group d-flex align-items-end gap-1">
                        <button class="share-btn" alt="공유">
                            <span class="share_icon"></span>
                        </button>
                        <button class="heart-btn" alt="찜">
                            <span class="heart_icon"></span>
                        </button>
                    </div>   
                    <div className="plane_right d-flex flex-column justify-content-end align-items-end gap-3 px-2">
                        <p className="totalPrice"><span>₩10,000</span></p>
                        <StyledBtn padding={[1, 2.5]} fontSize="var(--medium-text)" fontWeight="700" color="var(--trip-yellow)">계획에 담기</StyledBtn>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DefaultList;