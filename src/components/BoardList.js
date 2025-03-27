import React, { useState } from 'react';

import TableStyle, {GalleryStyle} from "./ListStyle"

import SelectBox from "./SelectBox";
import { SquareBtn } from '../styleComponents/ui';

const BoardList = ({ boolean, postData }) => {
    const [isListView, setIsListView] = useState(boolean);

    return (
        <div className="board_area img100 container_m">
            <div className="board_filter d-flex justify-content-between align-items-center">
                <SelectBox>
                    <li className="option">최신순</li>
                    <li className="option">조회수순</li>
                    <li className="option">좋아요순</li>
                </SelectBox>
                <div className="icon_wrap d-flex gap-1 boradStyleBtn">
                    <button
                        className={`icon_box icon1 ${isListView ? "active" : ""}`}
                        onClick={() => setIsListView(true)}
                    >
                        게시판형
                    </button>
                    <button
                        className={`icon_box icon2 ${!isListView ? "active" : ""}`}
                        onClick={() => setIsListView(false)}
                    >
                        갤러리형
                    </button>
                </div>
            </div>

            {isListView ? <TableStyle postData={postData}/> : <GalleryStyle postData={postData}/>}

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
            <div className="board_btn d-flex justify-content-end">
                <SquareBtn color="var(--trip-blue)" background="var(--trip-skyblue)" fontWeight="800">글쓰기</SquareBtn>
            </div>
        </div>                    
    );
};

export default BoardList;