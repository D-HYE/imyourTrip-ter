import { Link } from "react-router-dom";


const MainFooter = () => {
    return(
        <div className="footerArea">
            <footer className="mainFooter">
                <div className="ftcontainer">
                    <img src="https://d-hye.github.io/source/img/logo/logo_TRT_basic.svg" alt="트립터" className="ftlogo"/>
                    <div>
                        <div className="footer_menu">
                            <ul>
                                <li><a href="#none">회사소개</a></li>
                                <li><a href="#none">사업자정보</a></li>
                                <li><a href="#none">이용약관</a></li>
                                <li><a href="#none">개인정보 처리방침</a></li>
                                <li><a href="#none">제휴 / 광고 문의</a></li>
                            </ul>
                        </div>
                        <div className="d-flex">
                            <div className="company_info">
                                <i>(주)트립터</i>
                                <i><span>대표자</span> 신은경</i>
                                <i><span>고객센터</span> 0000-0000</i>
                                <i><span>주소</span> 서울특별시 구로구 구로5동 3-25 602호</i>
                                <i><span>메일</span> help@tripter.com</i>
                            </div> 
                            <div className="company_id">   
                                <i><span>사업자등록번호</span> 0000000-0000</i>
                                <i><span>통신판매입신고번호</span> 제0000-서울00-0000호</i>
                                <i><span>관광사업자등록번호</span> 제0000-000000호</i>
                                <i>© 2025 Trip:ter, Inc</i>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};


export const SubFooter = () => {
    return (
        <div className="footerArea">
            <footer className="subFooter">
                <div class="container d-flex justify-content-between align-items-end">
                    <div class="imgbox">
                        <img src="https://d-hye.github.io/source/img/logo/logo_TRT_wh.svg" alt="trip:ter"/>
                    </div>
                    <div class="footer_menu">
                        <ul class="d-flex">
                            <li><Link to="#none">회사소개</Link></li>
                            <li><Link to="#none">사업자정보</Link></li>
                            <li><Link to="#none">이용약관</Link></li>
                            <li><Link to="#none">개인정보 처리방침</Link></li>
                            <li><Link to="#none">제휴 / 광고 문의</Link></li>
                        </ul>
                        <div>
                            <div class="company_info d-flex">
                                <i>(주)트립터</i>
                                <i><span>대표자</span> 신은경</i>
                                <i><span>고객센터</span> 0000-0000</i>
                                <i><span>주소</span> 서울특별시 구로구 구로5동 3-25 602호</i>
                                <i><span>메일</span> help@tripter.com</i>
                            </div> 
                            <div class="company_id d-flex">   
                                <i><span>사업자등록번호</span> 0000000-0000</i>
                                <i><span>통신판매입신고번호</span> 제0000-서울00-0000호</i>
                                <i><span>관광사업자등록번호</span> 제0000-000000호</i>
                                <i>© 2025 Trip:ter, Inc</i>
                            </div>
                        </div>
                    </div>
                    <div class="download_btn">
                        <Link to="#">트립터 앱 다운로드</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
};


export default MainFooter;