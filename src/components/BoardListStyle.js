import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ImgBox } from '../styleComponents/ui';

const TableStyle = ({postData}) => {
    const path = useLocation();
    return (
        <div className="board_list">
            <table className="table_board">
                <thead>
                    <tr>
                        <th className="post_id"></th>
                        <th className="post_tit">제목</th>
                        <th className="post_nickname">작성자</th>
                        <th className="post_date">작성일</th>
                        <th className="post_view">조회</th>
                    </tr>
                </thead>
                <tbody>
                    {postData.map((data, i)=>(
                        <tr key={`post${data.postID}`}>
                            <td className="post_id">{data.postID}</td>
                            <td className="post_tit d-flex gap-1"><Link to={`${path.pathname}/${data.postID}`}>{data.postTit}</Link><b>[00]</b></td>
                            <td className="post_nickname"><span>{data.userInfo?.userNickname}</span></td>
                            <td className="post_date"><span>{data.postDate.slice(0, 10)}</span></td>
                            <td className="post_view"><span>{data.viewCount}</span></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};


export const GalleryStyle = ({postData}) => {
    const path = useLocation();

    return (
        <div className="board_list">
            <ul className="galley_board d-flex flex-wrap">
                {postData.map(data => (
                    <li key={`post${data.postID}`}>
                        <div className="">
                            <ImgBox className='rel img_box' height="15rem">
                                <Link to={`${path.pathname}/${data.postID}`}>
                                {data.src && <img src={`${data.src}`} alt={`${data.tripSpot}`}></img>}
                                <div className="float_info abs"><b>{data.tripSpot}</b></div></Link>
                            </ImgBox>
                            <div className="desc_box">
                                <div className="post_tit d-flex justify-content-between"><Link to={`${path.pathname}/${data.postID}`}>{data.postTit}</Link><b>[00]</b></div>
                                <div className="post_nickname"><h6>{data.userNickname}</h6></div>
                                <div className="d-flex justify-content-between">
                                    <span className="post_date">{data.postDate.slice(0, 10)}</span>
                                    <span className="post_view">조회 {data.viewCount}</span>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};


export default TableStyle;