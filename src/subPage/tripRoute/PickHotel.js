import React from 'react';
import { Link } from 'react-router-dom';
import { StyledBtn, ImgBox } from '../../styleComponents/ui';

const PickHotel = () => {
    return (
        <>
        <div className="product_item img100 productDefault">
            <div className="info_wrap d-flex align-items-center">
                <ImgBox width="17.5rem" height="300px" borderRadius="20px">
                    <Link to="#none"></Link>
                </ImgBox>
                <div className="info_box d-flex flex-column justify-content-between align-items-end">
                    <Link to="#none" className="">
                        <h5 className="product_tit">타이틀타이틀타이틀타이틀</h5>
                        <p className="product_info">제품에 대한 소개 제품에 대한 소개 제품에 대한 소개 제품에 대한 소개</p>
                        <div className="product_cost d-flex justify-content-between align-items-end">
                            <h6>트립터 특가</h6>
                            <div className="d-flex flex-column align-items-end gap-1">
                                <span>00000원</span>
                                <b>00000원</b>
                            </div>
                        </div>
                    </Link>
                    <div>
                        <StyledBtn padding={[1, 2.5]} fontSize="var(--semismall-text)" fontWeight="700" color="var(--trip-yellow)">계획에 담기</StyledBtn>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default PickHotel;