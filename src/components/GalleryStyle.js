import React from 'react';
import { Link } from 'react-router-dom';

const GalleryStyle = () => {
    return (
        <div className="board_list">
            <ul className="galley_board d-flex justify-content-between flex-wrap">
                <li><div className="">
                    <div className="img_box rel"><Link to="#none">
                        <div className="float_info abs"><b>계획장소데이터</b></div>
                    </Link></div>
                    <div className="desc_box">
                        <div className="post_tit d-flex justify-content-between"><Link to="#none">포스트 제목</Link><b>[00]</b></div>
                        <div className="post_nickname"><h6>닉네임</h6></div>
                        <div className="d-flex justify-content-between">
                            <span className="post_date">포스트 날짜</span>
                            <span className="post_view">조회수</span>
                        </div>
                    </div>
                </div></li>
            </ul>
        </div>
    );
};

export default GalleryStyle;