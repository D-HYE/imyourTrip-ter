import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImgBox } from '../styleComponents/ui';
import { SelectBox, RelativeTime } from './util';



const ReviewList = ({ review }) => {
    const [sortedData, setSortedData] = useState([]);
    useEffect(() => {
        if (review && review.length > 0) {
            const sorted = [...review].sort((a, b) => new Date(b.postedAt) - new Date(a.postedAt));
            setSortedData(sorted);
        }
    }, [review]);

    const handleSort = (sortType) => {
        let sorted = [];
        switch (sortType) {
            case "latest":
              sorted = [...review].sort((a, b) => new Date(b.postedAt) - new Date(a.postedAt));
              break;
            case "views":
              sorted = [...review].sort((a, b) => b.views - a.views);
              break;
            case "likes":
              sorted = [...review].sort((a, b) => b.likes - a.likes);
              break;
            default:
              sorted = [...review];
          }
          setSortedData(sorted);
    };

    return (
        <div className="board_area container_m">
            <div className="board_filter d-flex justify-content-end align-items-center">
                <SelectBox>
                    <li onClick={() => handleSort("latest")}>최신순</li>
                    <li onClick={() => handleSort("views")}>조회수순</li>
                    <li onClick={() => handleSort("likes")}>좋아요순</li>
                </SelectBox>
            </div>
            <div className="board_list">
                <ul className="live_board">
                    {sortedData.map((data) => (
                        <li key={data.idx}>
                            <Link to={`${data.href}`} className="d-flex justify-content-between align-items-center">
                                <div className="desc_box">
                                    <div className="post_info d-flex">
                                        <div className="user_info d-flex align-items-center">
                                            <div className="user_profile"></div>
                                            <div className="user_desc">
                                                <div className="nickname">{data.nickname}</div>
                                                <div className="ratingWrap d-flex align-items-center">
                                                    {[...Array(5)].map((_, i) => (
                                                        <div className={`rating ${i < data.rating ? "giveStar" : ""}`} key={i}></div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="post_time"><span>{RelativeTime(data.postedAt)}</span></div>
                                    </div>
                                    <div className="desc">
                                        <h5>{data.title}</h5>
                                        <p>{data.content}</p>
                                    </div>
                                    <div className="response_wrap d-flex justify-content-end">
                                        <div className="d-flex post_like"><i></i><span>{data.likes}</span></div>
                                        <div className="d-flex post_comment"><i></i><span>{data.comments}</span></div>
                                        <div className="d-flex post_view"><i></i><span>{data.views}</span></div>
                                    </div>
                                </div>
                                <ImgBox className='img_box d-flex justify-content-center align-items-center'>
                                    <img src={`${data.img}`} alt={`${data.alt}`} />
                                </ImgBox>
                            </Link>
                        </li>
                    ))}
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