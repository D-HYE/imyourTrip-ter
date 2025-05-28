import React from 'react';
import { useParams } from 'react-router-dom';
import { StyledBtn, ImgBox } from '../../styleComponents/ui';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../scss/globalSub.scss'

const ProductDetail = ({testData}) => {
    const { productID } = useParams();

    const test = Object.values(testData).flat().find(
        hotel => hotel.id === Number(productID)
    );
    console.log(test)
    // const { category, tab, productID } = useParams();
    // const hotelList = testData?.[category]?.[tab] || [];
    // const hotel = hotelList.find(h => h.id === Number(productID)) || {};
    // const {
    //     title,
    //     description,
    //     detailDescription,
    //     originalPrice,
    //     discountRate,
    //     image,
    //     detailImages,
    //   } = hotel;
    // //가격 계산   
    // const discountedPrice = originalPrice - originalPrice * discountRate;  
    return (
        <div className="container_x pageBox img100 prodctDetail">
            <div className="info_wrap d-flex gap-2">
                <ImgBox width="28.75rem" height="460px" borderRadius="20px">
                    <img src={test.image} alt={test.title} />
                </ImgBox>
                <div className="d-flex flex-column detail_infoBox justify-content-between">
                        <div className='d-flex flex-column gap-2'>
                            <h5 className="detail_tit">{test.title}타이틀</h5>
                            <p className="detail_info">{test.description}제품에 대한 소개 제품에 대한 소개 제품에 대한 소개 </p>
                        </div>
                        <p className="detail_info2">{test.detailDescription}
                            상품에 대한 자세한 설명 2줄 정도상품에 대한 자세한 설명 2줄 정도상품에 대한 자세한 설명 2줄 정도상품에 대한 자세한 설명 2줄 정도
                        </p>
                        <div className='d-flex justify-content-end'>
                        <b>{test.discountedPrice}원</b>
                        </div>
                    <div className='d-flex gap-2'>
                        <StyledBtn padding={[1, 2.5]} fontSize="var(--medium-text)" background="var(--trip-white)"
                        border="2px solid var(--trip-blue)"
                        color="var(--trip-blue)" width="240px">장바구니</StyledBtn>
                        <StyledBtn padding={[1, 2.5]} fontSize="var(--medium-text)"color="var(--trip-white)" width="240px">구매하기</StyledBtn>
                    </div>
                    <div>
                        <div className='smallPic'>
                            <Swiper slidesPerView={4.5} spaceBetween={10}>
                                {test.detailImages?.map((src, idx)=> (
                                    <SwiperSlide key={idx}>
                                    <ImgBox width="100px" height="100px" borderRadius="10px">
                                    <img src={src} alt={`썸네일 ${idx + 1}`} />
                                    </ImgBox>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
};

export default ProductDetail;