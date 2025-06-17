import { Route, Routes } from 'react-router-dom';

import Index from '../mainPage/Index';
import User from '../subPage/user/User';
import TripRoute from '../subPage/tripRoute/TripRoute';
import TripTalk from '../subPage/tripTalk/TripTalk';
import TripterEvent from '../subPage/event/TripterEvent';
import Product from '../subPage/products/Product';
import Service from "../subPage/service/Service"
import ProductDetail from '../subPage/products/ProductDetail';

import {NotFound} from '../components/util';


import alldata  from '../data/alldata.json'
import hotelData from '../data/hotelData.json'

import '../scss/globalSub.scss';
import '../scss/yujin.scss';
import '../scss/sub_hyo.scss';
import '../scss/sub_ek.scss';
import '../scss/sub_dahye.scss';
// 언어 바뀔 때 말고는 웬만하면 렌더링 뭐시기 할 일 없음


export default function Contents(){
    const tabData = alldata["tabList"]
    return(
        <div className="contentsArea">
            <Routes>
                <Route path="/" element={<Index alldata={alldata}/>} />
                <Route path="/service/:tab" element={<Service dataInfo={tabData} />} />
                <Route path="/service/:tab/:post_id" element={<Service dataInfo={tabData} />} />
                <Route path="/user/:page?" element={<User />} />
                <Route path="/tripRoute/:tab" element={<TripRoute dataInfo={tabData}/>} />
                <Route path="/tripTalk/:tab" element={<TripTalk dataInfo={tabData}/>} />
                <Route path="/tripTalk/:tab/:post_id" element={<TripTalk dataInfo={tabData}/>} />
                <Route path="/tripterEvent/:tab?" element={<TripterEvent dataInfo={tabData}/>} />
                <Route path="/products/:category/:tab?" element={<Product dataInfo={tabData} testData={hotelData} />} />
                <Route path="/products/:category/:tab/:productID" element={<ProductDetail testData={hotelData}/>} />
                <Route path='*' element={<NotFound/>}></Route>
            </Routes>
        </div>
    );
};







