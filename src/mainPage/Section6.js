import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import reviewsData from '../data/review.json';

function Section6() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth <= 768);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    const cloneCount = 10; // 루프 효과를 위한 복제 개수
    const midpoint = Math.ceil(reviewsData.length / 2);
  
    // 데이터 전체 리스트 생성 (한 번만 map 실행)
    const reviewList = reviewsData.map((review, index) => (
      <li className="marquee_content" key={index}>
        <Link to={review.href}>
          <div className="img_box">
            <img src={review.img} alt={review.alt} />
          </div>
          <div className="txt_box">
            <div className="user_info d-flex pc">
              <b className="review_user">{review.nickname}</b>
              <i className="review_rate">{review.rating}</i>
            </div>
            <p className="review_txt pc">{review.desc}</p>
            <div className="user_info mb">
              <b className="review_user">{review.nickname} 님의 후기</b>
            </div>
          </div>
        </Link>
      </li>
    ));
  
    // 모바일: 전체 리스트 사용, 데스크탑: 리스트 분할
    const marqueeList1 = isMobile ? reviewList : reviewList.slice(0, midpoint);
    const marqueeList2 = isMobile ? [] : reviewList.slice(midpoint);
  
    return (
      <div className="section section6">
        <h3 className="section_tit">실시간 후기</h3>
        <div className="page_view container d-flex justify-content-end">
            <Link to="#none">후기 더 보기&gt;</Link>
        </div>
        <div className="marquee_area">
          <div className="marquee_wrap">
            <ul className="marquee_line marquee_line1 d-flex" id="review_marquee1">
              {marqueeList1}
              {marqueeList1.slice(0, cloneCount)} {/* 루프 효과 */}
            </ul>
          </div>
          {!isMobile && (
            <div className="marquee_wrap pc">
              <ul className="marquee_line marquee_line2 d-flex" id="review_marquee2">
                {marqueeList2}
                {marqueeList2.slice(0, cloneCount)} {/* 루프 효과 */}
              </ul>
            </div>
          )}
        </div>
      </div>
    );
}

export default Section6;