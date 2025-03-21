import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <div className="headerArea">
            <header id="hd">
                <div className="header_inner">
                    <div id="user" className="trip-bl pc">
                        <div className="container d-flex justify-content-end align-items-center">
                            <ul className="d-flex gap-3 align-items-center">
                                <li >
                                    <Link to="/user" className="text-white">로그인/회원가입</Link>
                                </li>
                                <li className="support rel">
                                    <a href="#none" className="text-white">고객지원<img src="/img/icon/polygon-1.svg" alt="더보기"/></a>
                                    <ul className="hide-menu abs d-none">
                                        <li><a href="#none">이용가이드</a></li>
                                        <li><a href="#none">FAQ</a></li>
                                        <li><a href="#none">문의게시판</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div id="gnbbox">
                        <div id="gnb" className="container d-flex justify-content-between align-items-center">
                            <h1 className="logo order-2 mx-auto">
                                <Link to="/"><img src="https://trip-ter.vercel.app/img/logo/logo_TRT_basic.svg" alt="트립터"/><span className="d-none">트립터</span>  </Link>
                            </h1>
                            <div className="hb-iconbox"> 
                                <button id="hb-icon" className="p-0"><img src="https://trip-ter.vercel.app/img/icon/menu-all.svg" alt="메뉴"/></button>
                            </div>
                            <div id="dim-background" className="dim d-none"></div>
                            
                            <ul id="menu" className="d-flex gap-3 order-1 pc">                   
                                <li><Link to="/tripRoute">계획짜기</Link></li>
                                <li><Link to="/tripTalk">트립톡</Link></li>
                                <li><Link to="/tripterEvent">이벤트</Link></li>
                            </ul>
                            <ul className= "icon d-flex align-items-center order-3">
                                <li className="search">
                                    <form action="#none" className="d-flex align-items-center">
                                        <input type="text" className="search-bar pc" name="search" placeholder="눈의 나라 훗카이도로~!"/>
                                        <input type="image" className="search-icon py-0" src="https://trip-ter.vercel.app/img/icon/search-02.svg" alt="검색버튼"/>
                                    </form>
                                </li>
                                <li>
                                    <button className="wishlist-btn p-0"><a href="#none"><img src="https://trip-ter.vercel.app/img/icon/travel_bl.svg" alt="찜"/></a></button>
                                </li>
                            </ul>
                        </div>
                        <div id="mb-searchbox" className="d-none mb">
                            <form action="#none" className=" mb-search d-flex  align-items-center justify-content-end">
                                <input type="text" className="mb-searchbar" name="search" placeholder="눈의 나라 훗카이도로~!"/>
                                <input type="image" className="mb-searchicon" src="https://trip-ter.vercel.app/img/icon/search-01.svg" alt="검색버튼"/>
                            </form>                       
                        </div>
                    </div>

                    <div id="hb-submenu">
                        <div id="hb-item" className="d-flex flex-column">
                            <div className="d-flex justify-content-end">
                                <button className="p16 mx-1" id="allMenuclose"><img src="https://trip-ter.vercel.app/img/icon/x-01.svg" className="d-block" alt="닫기버튼"/></button>
                            </div>
                            <div id="login" className="d-none">
                                <div className="m-1 ">
                                    <span>
                                        로그인/회원가입
                                    </span>                
                                </div>
                                <ul className="social-icon d-flex justify-content-center gap-3">
                                    <li><a className="naver" href=""><img src="https://trip-ter.vercel.app/img/icon/naver.svg" alt="naver"/></a></li>
                                    <li><a className="kakao" href=""><img src="https://trip-ter.vercel.app/img/icon/kakao.svg" alt="kakao"/></a></li>
                                    <li><a className="google" href=""><img src="https://trip-ter.vercel.app/img/icon/google.svg" alt="google"/></a></li>
                                </ul>
                            </div>
                            <div className="mainheader">              
                                <div className="user-box d-flex align-content-end justify-content-between">
                                    <div className="profileicon"><img src="https://trip-ter.vercel.app/img/icon/user-profile-02.svg" className="d-block" alt=""/></div>
                                    <div className="userprofile">
                                        <div className="hi"><span>안녕하세요!</span></div>
                                        <div>트립터<span className="username">###</span>님</div>
                                    </div> 
                                    <a className="settings" href=""><img className="d-block" src="https://trip-ter.vercel.app/img/icon/settings.svg" alt="설정"/></a>
                                </div>
                                <ul className="menu-icon d-flex justify-content-between ">
                                    <li><a className="heart" href="">
                                        <img src="https://trip-ter.vercel.app/img/icon/heart_02.svg" className="d-block" alt="내찜"/>
                                        <span >내 찜</span>
                                    </a></li>
                                    <li><a href="#none">
                                        <img src="https://trip-ter.vercel.app/img/icon/travel.svg"  className="d-block" alt="내여행"/>
                                        <span >내 여행</span>
                                    </a></li>
                                    <li><a href="#none"><img src="https://trip-ter.vercel.app/img/icon/layer.svg"  className="d-block" alt="가계부"/>
                                        <span>내 가계부</span></a></li>
                                    <li><a href="#none"><img src="https://trip-ter.vercel.app/img/icon/pencil-02.svg"  className="d-block" alt="내후기"/>
                                        <span>내 후기</span>
                                    </a></li>
                                </ul>
                            </div>

                            <div id="hb-list" className="d-flex flex-column">
                                <ul className="tapPart d-flex flex-column">
                                    <li className="feelter"><Link to="/tripRoute"><span className="text-blue">MY FEEL:TER</span></Link></li>
                                    <li className="planner"><Link to="/tripRoute"><span className="text-blue">계획짜기</span></Link></li>
                                </ul>
                                <div className="d-flex flex-column scroll">
                                    <ul className="d-flex communitymenu flex-wrap">
                                        <li><Link to="/tripTalk" className="planaround">계획 둘러보기</Link></li>
                                        <li><Link to="/tripTalk" className="reviewaround">후기 둘러보기</Link></li>
                                        <li><Link to="/tripTalk" className="friendfind">동행구해요</Link></li>
                                    </ul>
                                    <ul className="d-flex communitymenu flex-wrap">                  
                                        <li><Link to="/tripterEvent" className="mbrecomm" >MD추천</Link></li>
                                        <li><Link to="/tripterEvent" className="event">이벤트</Link></li>
                                    </ul>

                                    <ul id="hb-sublist">  
                                        <li>
                                            <div><a className="" href="">항공권</a></div>
                                            <ul className="sublist d-flex flex-wrap">
                                                <li><a href="#none">특가항공</a></li>
                                                <li><a href="#none">국내항공</a></li>
                                                <li><a href="#none">국외항공</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <div><a className="" href="">숙소</a></div>
                                            <ul className="sublist d-flex flex-wrap">
                                                <li><a href="#none">특가숙소</a></li>
                                                <li><a href="#none">호텔</a></li>
                                                <li><a href="#none">게스트하우스</a></li>
                                                <li><a href="#none">펜션&캠핑</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <div><a className="" href="">티켓&투어</a></div>
                                            <ul id="ticket" className="sublist d-flex flex-wrap">
                                                <li><a className="allPass text-blue" href="#none">올패스권</a></li>
                                                <li><a href="#none">현지투어</a></li>
                                                <li><a href="#none">테마파크</a></li>
                                                <li><a href="#none">전시체험</a></li>
                                                <li><a href="#none">철도여행</a></li>
                                            </ul>
                                        </li>
                                        
                                    </ul>
                                </div>            
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;