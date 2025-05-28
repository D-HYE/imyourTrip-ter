import React from 'react';
import { TabMenu } from '../../components/util';
import { StyledBtn, ImgBox } from '../../styleComponents/ui';
import { Link } from 'react-router-dom';

const MyPage = () => {
    return (
        <>
        {/* 첫페이지*/}
        <div className='container_m pageBox my-2'>
            <h2>마이페이지</h2>
            <TabMenu></TabMenu>
            <div className='d-flex gap-2' style={{padding:"1.25rem"}}>
                <ImgBox width="6.25rem" height="100px" borderRadius="5px" />
                <div className="d-flex justify-content-between "style={{width:"100%"}}> 
                    <div className="d-flex flex-column justify-content-between">
                        <div>
                        <span>예약번호 TEST0513</span>
                        <h4>예약상품명 항공 호텔 티켓</h4>
                        </div> 
                        <span>이용일 2025. 0X. XX</span>
                        <h4 className='text-blue'>결제완료</h4>
                    </div>  
                <span>예약상세보기 &gt;</span>
                </div>

            </div>
        </div>
        {/* 예약상세페이지*/}
        <div className='container_m pageBox'>
            <h2>예약 상세보기</h2>
            <div>
            <p>예약번호 55HNE25</p>
            
            </div>
        </div>
        </>
    );
};

export default MyPage;