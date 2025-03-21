import { Link } from 'react-router-dom';

function Section7() {
    
    return (
        <div className="section section7">
            <div className="container d-flex gap-5 align-items-center justify-content-center">
                <div className="qrimg">
                    <div className="img_box pc"></div>
                    <Link to="#none">앱 다운로드</Link>
                </div>
                <div className="txt_box">
                    <h2>나보다 나를 더 잘 아는 <span>최고의 여행 메이트</span></h2>
                    <div className="logo">
                        <img src="https://trip-ter.vercel.app/img/logo/logo_TRT_wh.svg" alt="트립:터"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section7;