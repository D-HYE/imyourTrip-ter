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
            <div className="board_list">
                <ul className="live_board">
                    <li>
                        <Link to="#none" className="d-flex justify-content-between align-items-center">
                            <div className="desc_box">
                                <div className="post_info d-flex">
                                    <div className="user_info d-flex align-items-center">
                                        <div className="user_profile"></div>
                                        <div className="user_desc">
                                            <div className="nickname">닉네임닉네임닉네임</div>
                                            <ul className="ratingWrap d-flex">
                                                <li className="rating giveStar"></li>
                                                <li className="rating giveStar"></li>
                                                <li className="rating giveStar"></li>
                                                <li className="rating "></li>
                                                <li className="rating "></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="post_time"><span>00시간</span> 전</div>
                                </div>
                                <div className="desc">
                                    <h5>타이틀 조회수 아이콘이 자꾸 저장이 이상하게 됩니다 요상하다 요상해</h5>
                                    <p>내용은 두 줄만 나옵니다 매우 귀찮기 때문에 ...처리는 나중에 처리하겠습니다 미래의 나에게 넘기기~</p>
                                </div>
                                <div className="response_wrap d-flex justify-content-end">
                                    <div className="d-flex likeCount"><i></i><span>000</span></div>
                                    <div className="d-flex commentCount"><i></i><span>000</span></div>
                                    <div className="d-flex viewCount"><i></i><span>000</span></div>

                                </div>
                            </div>
                            <div className="img_box">

                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="board_pagenation">
                <div className="pagenation_wrap d-flex justify-content-center align-items-center gap-2">
                    <button className="icon_box icon1">이전</button>
                    <ul className="d-flex gap-2">
                        <li className="num active">1</li>
                        <li className="num">2</li>
                        <li className="num">3</li>
                        <li className="num">4</li>
                        <li className="num">5</li>
                    </ul>
                    <button className="icon_box icon2">다음</button>
                </div>
            </div>
        </div>
    );
};

export default ReviewList;