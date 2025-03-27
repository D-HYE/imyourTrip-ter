import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const MyFeelterResult = ({answers}) => {
    useEffect(()=>{
        console.log(answers);
    },[]);
    

    return (
        <div className="container" id="myftresult">
            <h3 className="d-flex justify-content-center align-items-center"><span>여행자님께 추천드리는 여행지입니다.</span></h3>
            <ul className="result d-flex justify-content-center align-items-center">
                <li className="img-wrap">
                    <img src="https://trip-ter.vercel.app/img/main_img/md_slide3.jpg" alt="대표이미지" className="profile-img" />
                    <a href="#none" className="txt-wrap">국내여행지</a>
                </li>
                <li className="img-wrap">
                    <img src="https://trip-ter.vercel.app/img/main_img/md_slide3.jpg" alt="대표이미지" className="profile-img"/>
                    <a href="#none" className="txt-wrap">해외여행지</a>
                </li>
                <li className="img-wrap">
                    <img src="https://trip-ter.vercel.app/img/main_img/md_slide3.jpg" alt="대표이미지" className="profile-img"/>
                    <a href="#none" className="txt-wrap">MD추천</a>
                </li>
            </ul>
            <ul className="result_bt d-flex justify-content-center align-items-center">
                <li className="restart"><Link to="/tripRoute/myFeelter">다시하기</Link></li>
                <li className="save"><a href="#none">결과 저장하기</a></li>
                <li className="share"><a href="#none">공유하기</a></li>
            </ul>        
        
       
        
            <div className="review d-flex justify-content-center align-items-center">
                <ul className="review-list">
                    <li className="d-flex justify-content-center align-items-center">
                        <div className="review-info">
                            <img src="https://trip-ter.vercel.app/img/main_img/md_slide3.jpg" alt="대표이미지" className="review-img"/>
                            <strong className="nickname">닉네임</strong>
                            <p className="review-title">후기 제목</p>
                            <a href="http://tripterweb.dothome.co.kr/board/triptalk.php?tab=board2" className="review-btn">후기 확인하기</a>
                        </div>                             
                        <div className="review-info">
                            <img src="https://trip-ter.vercel.app/img/main_img/md_slide3.jpg" alt="대표이미지" className="review-img"/>
                            <strong className="nickname">닉네임</strong>
                            <p className="review-title">후기 제목</p>
                            <a href="http://tripterweb.dothome.co.kr/board/triptalk.php?tab=board2" className="review-btn">후기 확인하기</a>
                        </div>                             
                        <div className="review-info">
                            <img src="https://trip-ter.vercel.app/img/main_img/md_slide3.jpg" alt="대표이미지" className="review-img"/>
                            <strong className="nickname">닉네임</strong>
                            <p className="review-title">후기 제목</p>
                            <a href="http://tripterweb.dothome.co.kr/board/triptalk.php?tab=board2" className="review-btn">후기 확인하기</a>
                        </div>                             
                        <div className="review-info">
                            <img src="https://trip-ter.vercel.app/img/main_img/md_slide3.jpg" alt="대표이미지" className="review-img"/>
                            <strong className="nickname">닉네임</strong>
                            <p className="review-title">후기 제목</p>
                            <a href="http://tripterweb.dothome.co.kr/board/triptalk.php?tab=board2" className="review-btn">후기 확인하기</a>
                        </div>                             
                        <div className="review-info">
                            <img src="https://trip-ter.vercel.app/img/main_img/md_slide3.jpg" alt="대표이미지" className="review-img"/>
                            <strong className="nickname">닉네임</strong>
                            <p className="review-title">후기 제목</p>
                            <a href="http://tripterweb.dothome.co.kr/board/triptalk.php?tab=board2" className="review-btn">후기 확인하기</a>
                        </div>                             
                    </li>
                </ul>

                <div className="before-login"> 
                    <h3><span>트립터 여행자님들의 계획과 후기를 확인해보세요!</span></h3>
                    <Link  to="/user/login"><button className="login_bt"><p className="login_bt_txt">로그인 하기</p></button></Link>
                </div> 
            </div>
        </div>
    );
};

export default MyFeelterResult;