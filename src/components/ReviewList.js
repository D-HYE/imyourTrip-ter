import React from 'react';
import { Link } from 'react-router-dom';
import SelectBox from "./SelectBox";

const ReviewList = () => {
    return (
        <div className="board_wrap board_findReview">
            <div className="board_filter d-flex justify-content-end align-items-center">
                <SelectBox>
                    <li className="option">최신순</li>
                    <li className="option">조회수순</li>
                    <li className="option">좋아요순</li>
                </SelectBox>
            </div>
            <div className="borad_list">
                <ul className="review_board d-flex justify-content-between flex-wrap">
                    <li>
                        <Link to="/" className="d-flex">
                            <div className="desc_box">
                                <div className="post_info d-flex justify-content-between">
                                    <div className="user_profile"></div>
                                    <div className="user_desc">
                                        <div className="nickname">닉네임</div>
                                        <div className="rate">별</div>
                                    </div>
                                    <div className="post_time"><span>00시간</span>전</div>
                                </div>
                                <div className="desc">
                                    <h5>타이틀</h5>
                                    <p>내용은 두 줄만 나옵니다 매우 귀찮겠지만</p>
                                </div>
                                <div className="response d-flex justify-content-end">
                                    <div className="d-flex">좋아요</div>
                                    <div className="d-flex">댓글</div>
                                    <div className="d-flex">조회수</div>

                                </div>
                            </div>
                            <div className="img_box">

                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ReviewList;