
import Feelter from './Section1_feelter';
import { useRef } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';


export default function Section1(){
    const feelterRef = useRef(null);
    const toggleFeelter = () => {
        if (feelterRef.current) {
            feelterRef.current.style.display = 
                feelterRef.current.style.display === "none" ? "block" : "none";
        }
    };

    return(
        <div className="section section1">
            <div id="main_slide" className="rel">
                <Swiper modules={[Pagination, Autoplay]}
                    pagination={{ el: ".swiper-pagination", clickable: true }}
                    autoplay={{ delay: 3000}}
                    loop = {true}
                className="main_swiper">
                        <SwiperSlide className="swiper-slide1">
                            <a href="#none" className="">
                                <div className="slide_desc abs">
                                    <h2>라스베이거스<span>Las Vegas</span></h2>
                                    <p>야경의 끝판왕</p>
                                </div>                                                   
                            </a>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide2">
                            <a href="#none"className="">
                                <div className="slide_desc abs">
                                    <h2>언제가도 좋은 제주<span></span></h2>
                                    <p>제주도 구석구석</p>
                                </div>                                                
                            </a>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide3">
                            <a href="#none"className="">
                                <div className="slide_desc abs">
                                    <h2>아이슬란드,<span></span></h2>
                                    <p>버킷리스트 1순위 여행지<br/>대자연의 웅장함</p>
                                </div>                                                   
                            </a>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide4">
                            <a href="#none"className="">
                                <div className="slide_desc abs">
                                    <h2>특별기획 테마여행<span></span></h2>
                                    <p>트립터와 함께 떠나보세요</p>
                                </div>                                                    
                            </a>
                        </SwiperSlide>
                        <div class="swiper-pagination"></div>
                </Swiper>
                <div className="simple_feelter abs" ref={feelterRef}>
                    <Feelter/>
                </div>
                <div id="simple_feelter_btn" className="mb abs simple_feelter_btn" onClick={toggleFeelter}>
                    <div className="d-flex">
                        <div className="txt_box">
                            <h4>MY FEEL:TER</h4>
                            <p>나의 여행 스타일 설정하기</p>
                        </div>
                        <div className="img_box d-flex">
                            <img src="https://trip-ter.vercel.app/img/icon/arrow-right.svg" alt="arrow"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="promo_banner">
                <a href="#none" className="d-flex justify-content-center align-items-center">
                    <img src="https://trip-ter.vercel.app/img/banner/event.jpg" alt="여름 성수기 이벤트" className="pc"/>
                    <img src="https://trip-ter.vercel.app/img/banner/event_mb.jpg" alt="여름 성수기 이벤트" className="mb"/>
                </a>
            </div>
            <div className="mb icon_menu">
                <div className="container">
                    <ul className="d-flex justify-content-center">
                        <li className="d-flex align-items-center justify-content-center">
                            <p>
                                <img src="https://trip-ter.vercel.app/img/icon/pencil_m.svg" alt=""/>
                                </p>
                        <p className="">
                            계획짜기
                        </p>                            
                        </li>
                        <li className="d-flex align-items-center justify-content-center">
                            <p>
                                <img src="https://trip-ter.vercel.app/img/icon/triptalk_m.svg" alt=""/>
                            </p>
                            <p className="">
                                트립톡
                            </p>    
                        </li>
                        <li className="d-flex  align-items-center justify-content-center">
                            <p>
                            <img src="https://trip-ter.vercel.app/img/icon/event.svg" alt=""/>
                            </p>
                            <p className="">
                                이벤트
                            </p>    
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}