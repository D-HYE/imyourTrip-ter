import React from 'react';
import { Link } from 'react-router-dom';

import BoardComment from './BoardComment';

import { StyledBtn } from '../styleComponents/ui';

const BoardView = ({postData}) => {
    return (
        <div className="post_area img100 pageBox">
            <div className="post_info">
                <h5 className="post_tit">{postData.postTit}</h5>
                <ul className="d-flex justify-content-between py-1">
                    <li>{postData.userInfo?.userNickname} &#40;{postData.userInfo?.userID}&#41;</li>
                    <li className="d-flex">
                        <div className="post_time">{new Date(postData.postedAt).toLocaleString('ko-KR')}</div>
                        <div className="post_view">조회 <span>{postData.views}</span></div>
                    </li>
                </ul>
            </div>
            <div className="post_content">
                <div className="trip_info">
                    <ul className="d-flex">
                        <li className="trip_spot d-flex align-items-center gap-1">
                            <b>여행지</b>
                            <span>{postData.tripSpot}</span>
                        </li>
                        <li className="tirp_date d-flex align-items-center gap-1">
                            <b>여행날짜</b>
                            <span>{postData.tripDate}</span>
                        </li>
                    </ul>
                </div>
                <div className="dsec_box">
                    {postData.src && <img src={`${postData.src}`} alt={`${postData.tripSpot}`}></img>}
                    <p>{postData.postCont}</p>
                </div>
                <div className="user_info d-flex flex-column align-items-end">
                    <div className="d-flex gap-1">
                        <div className="user_profile"></div>
                        <div className="user_desc">
                            <div className="nickname">{postData.userInfo?.userNickname}</div>
                            <ul className="verification d-flex flex-column gap-1">
                                <li>본인 인증 <span>완료</span></li>
                                <li className="checked">장소 인증 <span>완료</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="user_plus">
                        <Link to="/"><span>{postData.userInfo?.userNickname}</span>님의 게시글 더 보기&gt;</Link>   
                    </div>
                </div>
            </div>
            <BoardComment/>
            <div className="board_btn d-flex justify-content-center gap-2">
                <StyledBtn background="var(--trip-gray1)">목록으로</StyledBtn>
                <StyledBtn color="var(--trip-blue)" background="var(--trip-skyblue)" fontWeight="700">수정하기</StyledBtn>
            </div>
        </div>
    );
};

export default BoardView;