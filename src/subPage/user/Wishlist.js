import React, {useState, useEffect} from 'react';
import '../../scss/sub_hyo.scss';


const Wishlist = () => {
    return (
        <div className="wishlist_container d-flex justify-content-end align-items-end">
            <div className="wishlist_quick d-flex justify-content-center align-items-center">
                <button className="wishlist_quickicon" alt="장바구니"></button>
            </div>
            <div id="wishlist_list">
                <div className="wishlist_list">
                    <div className="wishlist_title">
                        <p class="text-blue p-2"><b>효정곤듀에요</b><b>님의 계획 짜기</b></p>
                    </div>
                    <div className="wishlist_user_info d-flex flex-column py-2 gap-3">
                        <div className="wishlist_location p-1 d-flex gap-5">
                            <ul className='d-flex flex-column gap-1'>
                                <li className="small_title">출발지</li>
                                <li className="wishlist-info-item">대한민국 인천</li>
                            </ul>
                            <ul className='d-flex flex-column gap-1'>
                                <li className="small_title">도착지</li>
                                <li className="wishlist-info-item">대만 가오슝</li>
                            </ul>
                        </div>
                        <div className="wishlist_date p-1">
                            <ul className='d-flex flex-column gap-1'>
                                <li className="small_title">여행날짜</li>
                                <li className="wishlist-info-item">2025.02.18 ~ 2025.03.18</li>
                            </ul>
                        </div>
                        <div className="wishlist_people p-1 d-flex justify-content-between align-items-end">
                            <ul className='d-flex flex-column gap-1'>
                                <li className="small_title">인원</li>
                                <li className="wishlist-info-item">2명</li>
                            </ul>
                            <ul>
                                <li><a href="/">수정하기</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="wishlist_items">
                        <div className="wishlist_flight">
                            <ul className='d-flex flex-column gap-3'>
                                <li className='semismall_text'>항공권</li>
                                <li><a className='medium_text' href="/">가오슝가는편항공권</a></li>
                            </ul>
                        </div>                
                        <div className="wishlist_hotel">
                            <ul className='d-flex flex-column gap-3'>
                                <li className='semismall_text'>숙소</li>
                                <li><a className='medium_text' href="/">가오슝숙소</a></li>
                            </ul>
                        </div>                
                        <div className="wishlist_tickets">
                            <ul className='d-flex flex-column gap-3'>
                                <li className='semismall_text'>티켓</li>
                                <li><a className='medium_text' href="/">선택하러 가기</a></li>
                            </ul>
                        </div>                
                    </div>
                    <div className="wishlist_button p-1">
                        <button><span>나의 찜과 함께 계획 짜기</span></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Wishlist;