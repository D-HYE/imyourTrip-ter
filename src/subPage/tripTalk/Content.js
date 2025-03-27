import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import BoardList from "../../components/BoardList"
import ReviewList from "../../components/ReviewList"
import BoardView from "../../components/BoardView"


export default function Content ({ activeTab }) {
    const { postID } = useParams();

    let content;

    switch (activeTab) {
        case 'findPlan':
            content = <BoardList boolean={false}/>;
            break;
        case 'findReview':
            content = <ReviewList/>;
            break;       
        case 'findFriend':
            content = <BoardList boolean={true}/>;
            break;       
        default:
            content = <div>선택된 탭이 없습니다.</div>;
            break;
    }

    if (postID) {
        return <BoardView postID={postID}/>;
    }

    return (
        <div className="sectionCont container_m">
            <div className="board_area">
                {content}
            </div>
        </div>
    );
}
