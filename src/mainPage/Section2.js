import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

export default function Section2(){
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/data/slide.json")
          .then((res) => res.json())
          .then((json) => setData(json.mdSlides))
          .catch((error) => console.error("Error fetching data:", error));
      }, []);

    return(
        <div class="section section2">
        <h3 class="section_tit">
             MD 추천 테마여행지
        </h3>
        <div id="md_slide">
            <Swiper
                slidesPerView="auto"
                modules={[Navigation, Pagination, Autoplay]}
                navigation={{ nextEl: ".swiper-button-prev", prevEl: ".swiper-button-next"}}
                pagination={{ el: ".swiper-pagination", clickable: true }}
                loop={true}
                autoplay={{ delay: 3000 }}
            className="md_swiper">
                {data.map((item ,index) => (
                    <SwiperSlide key={index}>
                        <Link to={item.href}>
                            <div className="img_box">
                                <img src={item.img} alt={item.alt} />
                            </div>
                            <div className="swiper_desc">
                                <b className="d-flex align-items-center justify-content-end pc">{item.title}</b>
                                <p>{item.subtitle}</p>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
                

                <div class="swiper-button-next pc"></div>
                <div class="swiper-button-prev pc"></div>
                <div class="swiper-pagination mb"></div>

            </Swiper>
        </div>
    </div>
    );
}