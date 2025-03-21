import React, { useEffect } from 'react';
const MyFeelterResult = ({answers}) => {
    useEffect(()=>{
        console.log(answers);
    },[])
    return (
        <div class="container" id="myftresult">
            <h3 class="d-flex justify-content-center align-items-center"><span>여행자님께 추천드리는 여행지입니다.</span></h3>
            <ul class="result d-flex justify-content-center align-items-center">
                <li class="img-wrap">
                    <img src="https://trip-ter.vercel.app/img/main_img/md_slide3.jpg" alt="대표이미지" class="profile-img" />
                    <a href="#none" class="txt-wrap">국내여행지</a>
                </li>
                <li class="img-wrap">
                    <img src="https://trip-ter.vercel.app/img/main_img/md_slide3.jpg" alt="대표이미지" class="profile-img"/>
                    <a href="#none" class="txt-wrap">해외여행지</a>
                </li>
                <li class="img-wrap">
                    <img src="https://trip-ter.vercel.app/img/main_img/md_slide3.jpg" alt="대표이미지" class="profile-img"/>
                    <a href="#none" class="txt-wrap">MD추천</a>
                </li>
            </ul>
            <ul class="result_bt d-flex justify-content-center align-items-center">
                <li class="restart"><a href="/tripRoute/myFeelter">다시하기</a></li>
                <li class="save"><a href="#none">결과 저장하기</a></li>
                <li class="share"><a href="#none">공유하기</a></li>
            </ul>        
        
       
        
            <div class="review d-flex justify-content-center align-items-center">
                <ul class="review-list">
                    <li class="d-flex justify-content-center align-items-center">
                        <div class="review-info">
                            <img src="https://trip-ter.vercel.app/img/main_img/md_slide3.jpg" alt="대표이미지" class="review-img"/>
                            <strong class="nickname">닉네임</strong>
                            <p class="review-title">후기 제목</p>
                            <a href="http://tripterweb.dothome.co.kr/board/triptalk.php?tab=board2" class="review-btn">후기 확인하기</a>
                        </div>                             
                        <div class="review-info">
                            <img src="https://trip-ter.vercel.app/img/main_img/md_slide3.jpg" alt="대표이미지" class="review-img"/>
                            <strong class="nickname">닉네임</strong>
                            <p class="review-title">후기 제목</p>
                            <a href="http://tripterweb.dothome.co.kr/board/triptalk.php?tab=board2" class="review-btn">후기 확인하기</a>
                        </div>                             
                        <div class="review-info">
                            <img src="https://trip-ter.vercel.app/img/main_img/md_slide3.jpg" alt="대표이미지" class="review-img"/>
                            <strong class="nickname">닉네임</strong>
                            <p class="review-title">후기 제목</p>
                            <a href="http://tripterweb.dothome.co.kr/board/triptalk.php?tab=board2" class="review-btn">후기 확인하기</a>
                        </div>                             
                        <div class="review-info">
                            <img src="https://trip-ter.vercel.app/img/main_img/md_slide3.jpg" alt="대표이미지" class="review-img"/>
                            <strong class="nickname">닉네임</strong>
                            <p class="review-title">후기 제목</p>
                            <a href="http://tripterweb.dothome.co.kr/board/triptalk.php?tab=board2" class="review-btn">후기 확인하기</a>
                        </div>                             
                        <div class="review-info">
                            <img src="https://trip-ter.vercel.app/img/main_img/md_slide3.jpg" alt="대표이미지" class="review-img"/>
                            <strong class="nickname">닉네임</strong>
                            <p class="review-title">후기 제목</p>
                            <a href="http://tripterweb.dothome.co.kr/board/triptalk.php?tab=board2" class="review-btn">후기 확인하기</a>
                        </div>                             
                    </li>
                </ul>

                <div class="before-login"> 
                    <h3><span>트립터 여행자님들의 계획과 후기를 확인해보세요!</span></h3>
                    <button class="login_bt"><p class="login_bt_txt">로그인 하기</p></button>
                </div> 
            </div>
        </div>
    );
};

export default MyFeelterResult;