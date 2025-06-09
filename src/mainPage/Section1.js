
import { Link } from 'react-router-dom';
import { useRef } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import Feelter from './Section1_feelter';

export default function Section1({slideData}){
    const feelterRef = useRef(null);
    const mainSlides = slideData["mainSlides"]

    if (!mainSlides) return <p>Loading...</p>;


    const toggleFeelter = () => {
        if (feelterRef.current) {
            feelterRef.current.style.display = 
                feelterRef.current.style.display === "none" ? "block" : "none";
        }
    };

    return(
        <section className="section section1">
            <div id="main_slide" className="rel">
                <Swiper modules={[Pagination, Autoplay]}
                    pagination={{ el: ".swiper-pagination", clickable: true }}
                    autoplay={{ delay: 3000}}
                    loop = {true}
                className="main_swiper">
                    {mainSlides.map((item, idx) => (
                        <SwiperSlide key={item.src}
                            className={`swiper-slide${idx + 1}`}
                            style={{ backgroundImage: `url("${item.src}")` }}
                        >
                            <Link to={`${item.href}`} className="">
                                <div className="slide_desc abs">
                                    <h2>{item.title}{item.english && <span>{item.english}</span>}</h2>
                                    <p>{item.subtitle}</p>
                                </div>                                                   
                            </Link>
                        </SwiperSlide>
                    ))}
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
                            <img src="https://d-hye.github.io/source/img/icon/arrow-right.svg" alt="arrow"/>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="promo_banner">
                <a href="#none" className="d-flex justify-content-center align-items-center">
                    <img src="https://d-hye.github.io/source/img/banner/event.jpg" alt="여름 성수기 이벤트" className="pc"/>
                    <img src="https://d-hye.github.io/source/img/banner/event_mb.jpg" alt="여름 성수기 이벤트" className="mb"/>
                </a>
            </div> */}
            <div className="mb icon_menu">
                <div className="container">
                    <ul className="d-flex justify-content-center">
                        <li className="d-flex align-items-center justify-content-center">
                            <p>
                                <img src="https://d-hye.github.io/source/img/icon/pencil_m.svg" alt=""/>
                                </p>
                        <p className="">
                            계획짜기
                        </p>                            
                        </li>
                        <li className="d-flex align-items-center justify-content-center">
                            <p>
                                <img src="https://d-hye.github.io/source/img/icon/triptalk_m.svg" alt=""/>
                            </p>
                            <p className="">
                                트립톡
                            </p>    
                        </li>
                        <li className="d-flex  align-items-center justify-content-center">
                            <p>
                            <img src="https://d-hye.github.io/source/img/icon/event.svg" alt=""/>
                            </p>
                            <p className="">
                                이벤트
                            </p>    
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}