import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

export default function Section2({slideData}){
    const mdSlides = slideData["mdSlides"]

    if (!mdSlides) return <p>Loading...</p>;

    return(
        <div className="section section2">
        <h3 className="section_tit">
             MD 추천 테마여행지
        </h3>
        <div id="md_slide">
            <Swiper
                slidesPerView="auto"
                modules={[Navigation, Pagination, Autoplay]}
                navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev"}}
                pagination={{ el: ".swiper-pagination", clickable: true }}
                loop={true}
                autoplay={{ delay: 3000 }}
            className="md_swiper">
                {mdSlides.map((item ,index) => (
                    <SwiperSlide key={index}>
                        <Link to={item.href}>
                            <div className="img_box">
                                <img src={item.img} alt={item.alt} />
                            </div>
                            <div className="swiper_desc">
                                <b className="d-flex align-items-center justify-content-end pc">{item.title}{item.titleSpan && <span>{item.titleSpan}</span>}</b>
                                <p>{item.subtitle}</p>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
                

                <div className="swiper-button-next pc"></div>
                <div className="swiper-button-prev pc"></div>
                <div className="swiper-pagination mb"></div>

            </Swiper>
        </div>
    </div>
    );
}