import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

import MyFeelter from "./tripRoute/MyFeelter";
import PlanMaker from "./tripRoute/PlanMaker";

import Event1 from "./event/Event1";
import Event2 from "./event/Event2";

import Guide from "./service/Guide"
import FAQ from "./service/FAQ"

import BoardList from "../components/BoardList"
import ReviewList from "../components/ReviewList"
import BoardView from "../components/BoardView"

import { fetchPostData } from "../api/api"
import allData from "../data/alldata.json"
import testData from "../data/dummydata.json"



export default function SubContent ({ activeTab, alldata }) {
    const { post_id } = useParams();
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
            content = !post_id 
                ? <BoardList boolean={false} postData={postData} />
                : <BoardView post_id={post_id} postData={postData.find(post => post.post_id === post_id)} />;
            break;
        }

        case 'findReview':
            content = <ReviewList review={allData["review"]}/>;
            break;

        case 'findFriend': {
            content = !post_id 
                ? <BoardList boolean={true} postData={postData} />
                : <BoardView post_id={post_id} postData={postData.find(post => post.post_id === Number(post_id))} />;   
            break;
        }
            
        //tripterEvent
        case 'tripterSpecial':
            content = <Event1/>;
            break;
        case 'coupon':
            content = <Event2/>;
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
            content = !post_id 
                ? <BoardList boolean={true} postData={postData} />
                : <BoardView post_id={post_id} postData={postData.find(post => post.post_id === post_id)} />;
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
