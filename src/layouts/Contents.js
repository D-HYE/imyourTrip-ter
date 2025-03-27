import { Route, Routes } from 'react-router-dom';

import Index from '../mainPage/Index';
import User from '../subPage/user/User';
import TripRoute from '../subPage/tripRoute/TripRoute';
import TripTalk from '../subPage/tripTalk/TripTalk';
import TripterEvent from '../subPage/event/TripterEvent';
import NotFound from '../layouts/NotFound'

import alldata  from '../data/alldata.json'

import '../scss/globalSub.scss';
import '../scss/yujin.scss';
import '../scss/sub_hyo.scss';
import '../scss/sub_ek.scss';
import '../scss/sub_dahye.scss';


export default function Contents(){
    const tabData = alldata["tabList"]

    return(
        <div className="contentsArea">

            <Routes>
                <Route path="/" element={<Index alldata={alldata}/>} />
                <Route path="/user/:page?" element={<User />} />
                <Route path="/tripRoute/:tab?" element={<TripRoute dataInfo={tabData}/>} />
                <Route path="/tripTalk/:tab?" element={<TripTalk dataInfo={tabData}/>} />
                <Route path="/tripTalk/:tab/:postID" element={<TripTalk dataInfo={tabData}/>} />
                <Route path="/tripterEvent/:tab?" element={<TripterEvent dataInfo={tabData}/>} />
                <Route path='*' element={<NotFound/>}></Route>
              
            </Routes>
        </div>
    );
};







