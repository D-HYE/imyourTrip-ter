import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
const [isScrolled, setIsScrolled] = useState(false);
const [isMenuOpen, setIsMenuOpen] = useState(false); // 메뉴 열기/닫기 상태
const [isDimVisible, setIsDimVisible] = useState(false); // dim 배경 상태
const [supportOpen,setSupportOpen] = useState(false); // 고객센터

    useEffect(() => {
        const handleScroll = () => {
        const scrollPosition = window.scrollY;
        
        // 스크롤이 40px 이상일 때, body에 'scrolled' 클래스를 추가
        setIsScrolled(scrollPosition > 40);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);
  
    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState); 
        setIsDimVisible(prevState => !prevState); 
        
    };
    const supportMenu = () =>{
        setSupportOpen(prevState => !prevState);
    }

    const handleOutsideClick = (e) => {
        if (!e.target.closest('#hb-submenu') && !e.target.closest('#hb-icon')) {
          setIsMenuOpen(false); // 햄버거 메뉴 닫기
        }
    
        if (!e.target.closest('.support') && !e.target.closest('.support a')) {
          setSupportOpen(false); // 고객센터 메뉴 닫기
        }
      };

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
    return () => {
      document.body.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const submenuClick = () => {
    setIsMenuOpen(false);
    setSupportOpen(false);
    setIsDimVisible(false);
  };

  return (
    <header id="hd" className={isScrolled ? 'scrolled' : ''}>
    <div className="header_inner">
      <div id="user" className="trip-bl pc">
        <div className="py-1 container d-flex justify-content-end">
          <ul className="d-flex gap-3 align-items-center">
            <li class="d-flex">
              <Link to="/user" className="text-white">로그인/회원가입</Link>
            </li>
            <li className="support rel" >
              <span className="text-white d-flex" onClick={supportMenu}>
                고객지원
                <img src="https://trip-ter.vercel.app/img/icon/polygon-1.svg" alt="더보기" />
              </span>
              <ul className={`hide-menu abs ${supportOpen ? '' : 'd-none'}`}>
                <li onClick={submenuClick}><Link to="/service/guide">이용가이드</Link></li>
                <li onClick={submenuClick}><Link to="/service/faq">FAQ</Link></li>
                <li onClick={submenuClick}><Link to="/service/ask">문의게시판</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div id="gnbbox">
        <div id="gnb" className="container d-flex justify-content-between align-items-center">
          <h1 className="logo order-2 mx-auto">
            <Link to="/">
              <img src="https://trip-ter.vercel.app/img/logo/logo_TRT_basic.svg" alt="트립터" />
              <span className="d-none">트립터</span>
            </Link>
            </h1>
            <div className="hb-iconbox">
              <button id="hb-icon" className="p-0" onClick={toggleMenu}>
                <img src="https://trip-ter.vercel.app/img/icon/menu-all.svg" alt="메뉴" />
              </button>
            </div>

            {/* Dim 배경 */}
            <div id="dim-background" className={`dim ${isDimVisible ? '' : 'd-none'}`} onClick={toggleMenu}></div>

            <ul id="menu" className="d-flex gap-3 order-1 pc">
              <li><Link to="/tripRoute" className={isScrolled ? 'scrolled' : ''}>계획짜기</Link></li>
              <li><Link to="/tripTalk" className={isScrolled ? 'scrolled' : ''}>트립톡</Link></li>
              <li><Link to="/tripterEvent" className={isScrolled ? 'scrolled' : ''}>이벤트</Link></li>
            </ul>
            <ul className="icon d-flex align-items-center order-3">
              <li className="search">
                <form action="/" className="d-flex align-items-center">
                  <input type="text" className={`search-bar pc ${isScrolled ? 'scrolled' : ''}`} name="search" placeholder="눈의 나라 훗카이도로~!" />
                  <input type="image" className="search-icon py-0" src="https://trip-ter.vercel.app/img/icon/search-02.svg" alt="검색버튼" />
                </form>
              </li>
              <li>
                <button className="wishlist-btn p-0"><Link to="/"><img src="https://trip-ter.vercel.app/img/icon/travel_bl.svg" alt="찜" /></Link></button>
              </li>
            </ul>
          </div>
          <div id="mb-searchbox" className="d-none mb">
            <form action="/" className="mb-search d-flex align-items-center justify-content-end">
              <input type="text" className="mb-searchbar" name="search" placeholder="눈의 나라 훗카이도로~!" />
              <input type="image" className="mb-searchicon" src="https://trip-ter.vercel.app/img/icon/search-01.svg" alt="검색버튼" />
            </form>
          </div>
        </div>

        {/* 햄버거 소메뉴 */}
        <div id="hb-submenu" className={`d-flex flex-column ${isMenuOpen ? 'open' : ''}`}>
          <div id="hb-item" className="d-flex flex-column">
            <div className="d-flex justify-content-end">
              <button className="p16 mx-1" id="allMenuclose" onClick={toggleMenu}>
                <img src="https://trip-ter.vercel.app/img/icon/x-01.svg" className="d-block" alt="닫기버튼" />
              </button>
            </div>

            {/* 로그인 전 */}
            <div id="login" className="d-none">
              <div className="m-2">
                <span>로그인/회원가입</span>
              </div>
              <ul className="social-icon d-flex justify-content-center gap-3">
                <li><a className="naver" href="/"><img src="https://trip-ter.vercel.app/img/icon/naver.svg" alt="naver" /></a></li>
                <li><a className="kakao" href="/"><img src="https://trip-ter.vercel.app/img/icon/kakao.svg" alt="kakao" /></a></li>
                <li><a className="google" href="/"><img src="https://trip-ter.vercel.app/img/icon/google.svg" alt="google" /></a></li>
              </ul>
            </div>

            {/* 로그인 후 */}
            <div className="mainheader">
              <div className="user-box d-flex align-content-end justify-content-between">
                <div className="profileicon"><img src="https://trip-ter.vercel.app/img/icon/user-profile-02.svg" className="d-block" alt="" /></div>
                <div className="userprofile">
                  <div className="hi"><span>안녕하세요!</span></div>
                  <div>트립터<span className="username">###</span>님</div>
                </div>
                <a className="settings" href="/"><img className="d-block" src="https://trip-ter.vercel.app/img/icon/settings.svg" alt="설정" /></a>
              </div>
              <ul className="menu-icon d-flex justify-content-between">
                <li><Link to="/user" className="heart" onClick={submenuClick}><img src="https://trip-ter.vercel.app/img/icon/heart_02.svg" className="d-block" alt="내찜" /><span>내 찜</span></Link></li>
                <li><Link to="/user" onClick={submenuClick}><img src="https://trip-ter.vercel.app/img/icon/travel.svg" className="d-block" alt="내여행" /><span>내 여행</span></Link></li>
                <li><Link to="/user" onClick={submenuClick}><img src="https://trip-ter.vercel.app/img/icon/layer.svg" className="d-block" alt="가계부" /><span>내 가계부</span></Link></li>
                <li><Link to="/user" onClick={submenuClick}><img src="https://trip-ter.vercel.app/img/icon/pencil-02.svg" className="d-block" alt="내후기" /><span>내 후기</span></Link></li>
              </ul>
            </div>

            {/* 메뉴리스트 */}
            <div id="hb-list" className="d-flex flex-column">
              <ul className="tapPart d-flex flex-column">
                <li className="feelter" onClick={submenuClick}><Link to="/tripRoute/myFeelter" className="d-flex align-items-center"><span className="text-blue">MY FEEL:TER</span></Link></li>
                <li className="planner" onClick={submenuClick}><Link to="/tripRoute/planMaker" className="d-flex align-items-center"><span className="text-blue">계획짜기</span></Link></li>
              </ul>
              <div className="d-flex flex-column scroll">
                <ul className="d-flex communitymenu flex-wrap">
                  <li><Link to="/tripTalk/findFriend"  className="friendfind" onClick={submenuClick}>동행 구해요</Link></li>
                  <li><Link to="/tripTalk/findPlan" className="planaround" onClick={submenuClick}>계획 둘러보기</Link></li>
                  <li><Link to="/tripTalk/findReview" className="reviewaround" onClick={submenuClick}>후기 둘러보기</Link></li>
                </ul>
                <ul className="d-flex communitymenu flex-wrap">
                  <li><Link to="/" className="mbrecomm" onClick={submenuClick}>MD추천</Link></li>
                  <li><Link to="/tripterEvent" className="event" onClick={submenuClick}>이벤트</Link></li>
                </ul>
                <ul id="hb-sublist">
                  <li>
                    <div><Link to="/">항공권</Link></div>
                    <ul className="sublist d-flex flex-wrap">
                      <li><Link to="/"  onClick={submenuClick}>특가항공</Link></li>
                      <li><Link to="/"  onClick={submenuClick}>국내항공</Link></li>
                      <li><Link to="/"  onClick={submenuClick}>국외항공</Link></li>
                    </ul>
                  </li>
                  <li>
                    <div><Link to="/">숙소</Link></div>
                    <ul className="sublist d-flex flex-wrap">
                      <li><Link to="/"  onClick={submenuClick}>특가숙소</Link></li>
                      <li><Link to="/"  onClick={submenuClick}>호텔</Link></li>
                      <li><Link to="/"  onClick={submenuClick}>게스트하우스</Link></li>
                      <li><Link to="/"  onClick={submenuClick}>펜션&캠핑</Link></li>
                    </ul>
                  </li>
                  <li>
                    <div><Link to="/">티켓&투어</Link></div>
                    <ul id="ticket" className="sublist d-flex flex-wrap">
                      <li><Link className="allPass text-blue" to="/"  onClick={submenuClick}>올패스권</Link></li>
                      <li><Link to="/"  onClick={submenuClick}>현지투어</Link></li>
                      <li><Link to="/"  onClick={submenuClick}>테마파크</Link></li>
                      <li><Link to="/"  onClick={submenuClick}>전시체험</Link></li>
                      <li><Link to="/"  onClick={submenuClick}>철도여행</Link></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
