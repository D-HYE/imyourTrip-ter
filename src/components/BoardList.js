import React, { useState, useEffect } from 'react';

import TableStyle, { GalleryStyle } from "./BoardListStyle"

import { SelectBox } from "./util";
import { StyledBtn } from '../styleComponents/ui';

const BoardList = ({ boolean, postData }) => {
    const [isListView, setIsListView] = useState(boolean);

    const [sortedData, setSortedData] = useState([]);
    useEffect(() => {
        if (postData && postData.length > 0) {
            const sorted = [...postData].sort((a, b) => new Date(b.postedAt) - new Date(a.postedAt));
            setSortedData(sorted);
        }
    }, [postData]);

    const handleSort = (sortType) => {
        let sorted = [];
        switch (sortType) {
            case "latest":
              sorted = [...postData].sort((a, b) => new Date(b.postedAt) - new Date(a.postedAt));
              break;
            case "views":
              sorted = [...postData].sort((a, b) => b.views - a.views);
              break;
            default:
              sorted = [...postData];
          }
          setSortedData(sorted);
    };

    return (
        <div className="board_area img100 pageBox">
            <div className="board_filter d-flex justify-content-between align-items-center">
                <SelectBox>
                    <li onClick={() => handleSort("latest")}>최신순</li>
                    <li onClick={() => handleSort("views")}>조회수순</li>
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

            {isListView ? <TableStyle postData={sortedData} /> : <GalleryStyle postData={sortedData} />}

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
                <StyledBtn color="var(--trip-blue)" background="var(--trip-skyblue)" fontWeight="700">글쓰기</StyledBtn>
            </div>
        </div>
    );
};

export default BoardList;