import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import BoardList from "../../components/BoardList"
import ReviewList from "../../components/ReviewList"
import BoardView from "../../components/BoardView"


export default function Content ({ activeTab }) {
    const { postID } = useParams();

    const [isListView, setIsListView] = useState(activeTab === "findPlan" ? false : true);
    useEffect(() => {
        setIsListView(activeTab === "findPlan" ? false : true);
    }, [activeTab]);

    if (postID) {
        return <BoardView postID={postID}/>;
    }

    return (
        <div className="sectionCont container_m">
            <div className="board_area">
                {activeTab === "findPlan" || activeTab === "findFriend" ?
                    (<BoardList isListView={isListView} setIsListView={setIsListView} />)
                : (<ReviewList />)}
            </div>
        </div>
    );
}
