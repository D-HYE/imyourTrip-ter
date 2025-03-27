import React from 'react';
import { Link } from 'react-router-dom';

const ListStyle = () => {
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
                    <tr>
                        <td className="post_id">0000</td>
                        <td className="post_tit d-flex gap-1"><Link to="#">포스트 제목</Link><b>[00]</b></td>
                        <td className="post_nickname"><span>닉네임</span></td>
                        <td className="post_date"><span>작성일</span></td>
                        <td className="post_view"><span>000</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ListStyle;