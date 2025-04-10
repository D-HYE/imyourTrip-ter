import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

import MyFeelter from "./tripRoute/MyFeelter";
import PlanMaker from "./tripRoute/PlanMaker";

import Event1 from "./event/Event1";
import Event2 from "./event/Event2";
import Event3 from "./event/Event3";
import Event4 from "./event/Event4";

import Guide from "./service/Guide"
import FAQ from "./service/FAQ"

import BoardList from "../components/BoardList"
import ReviewList from "../components/ReviewList"
import BoardView from "../components/BoardView"

import { fetchPostData } from "../api/board"
import testData from "../data/dummydata.json"



export default function SubContent ({ activeTab }) {
    const { postID } = useParams();
    const [postData, setPostData] = useState([]);

    let content;

    useEffect(() => {
    
        const fetchData = async () => {
            try {
            const data = await fetchPostData(activeTab);
            setPostData(data ?? []);
            } catch (error) {
            console.error("Error fetching data:", error);
            }
        };

        fetchData();

    }, [activeTab])


    switch (activeTab) {
        //tripRoute
        case 'myFeelter':
            content = <MyFeelter/>;
            break;
        case 'planMaker':
            content = <PlanMaker/>;
            break;  

        //tripTalk
        case 'findPlan':{
            const postData = testData["findPlan"];
            content = !postID 
                ? <BoardList boolean={false} postData={postData} />
                : <BoardView postID={postID} postData={postData.find(post => post.postID === postID)} />;
            break;
        }

        case 'findReview':
            content = <ReviewList />;
            break;

        case 'findFriend': {
            content = !postID 
                ? <BoardList boolean={true} postData={postData} />
                : <BoardView postID={postID} postData={postData.find(post => post.postID === Number(postID))} />;   
            break;
        }
            
        //tripterEvent
        case 'event1':
            content = <Event1/>;
            break;
        case 'event2':
            content = <Event2/>;
            break;       
        case 'event3':
            content = <Event3/>;
            break;       
        case 'event4':
            content = <Event4/>;
            break;   

        //service
        case 'guide':
            content = <Guide/>;
            break;
            
        case 'faq':
            content = <FAQ/>;
            break;       
        case 'ask': {
            const postData = testData["ask"];
            content = !postID 
                ? <BoardList boolean={true} postData={postData} />
                : <BoardView postID={postID} postData={postData.find(post => post.postID === postID)} />;
            break;
        }

        default:
            content = <div>선택된 탭이 없습니다.</div>;
            break;
    }

    return (
        content
    );
}
