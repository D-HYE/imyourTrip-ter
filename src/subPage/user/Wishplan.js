import React from 'react';

const Wishplan = () => {
    return (
        <div className="wishlist_user_info d-flex flex-column py-2 gap-3">
            <div className="wishlist_location p-1 d-flex gap-5">
                <ul className="d-flex flex-column gap-1" style={{ width: "50%" }}>
                    <li className="small_title">출발지</li>
                    <li className="wishlist-info-item">인천</li>
                </ul>
                <ul className="d-flex flex-column gap-1" style={{ width: "50%" }}>
                    <li className="small_title">도착지</li>
                    <li className="wishlist-info-item">가오슝</li>
                </ul>
            </div>
            <div className="wishlist_date p-1">
                <ul className="d-flex flex-column gap-1">
                    <li className="small_title">여행날짜</li>
                    <li className="wishlist-info-item">2025.02.18 ~ 2025.03.18</li>
                </ul>
            </div>
            <div className="wishlist_people p-1 d-flex justify-content-between align-items-end">
                <ul className="d-flex flex-column gap-1">
                    <li className="small_title">인원</li>
                    <li className="wishlist-info-item">2명</li>
                </ul>
                <ul>
                    <li><a href="/">수정하기</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Wishplan;