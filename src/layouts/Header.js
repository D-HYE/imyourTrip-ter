import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
//레이아웃에 있는 애들은 랜더링을 최대한 안 하는 애들이여야 해서
// useState ~~최대한 적게~~~ 최적화 처리를 할 수 있으면 할 수 있도록...
// css와 useEffect를 이용해서... 할 수 있는 건 할 수 있도록


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMbSearchOpen, setIsMbSearchOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // 스크롤이 40px 이상일 때, body에 'scrolled' 클래스를 추가
      setIsScrolled(scrollPosition > 40);
    };
    window.addEventListener("scroll", handleScroll);

    const supports = document.querySelectorAll(".nextopentrigger");

    const allMenuclose = document.getElementById("allMenuclose");
    const dim = document.getElementById("dim-background");
    const hb_icon = document.getElementById("hb-icon");

    //고객지원
    if (supports) {
      supports.forEach((support) => {
        support.addEventListener("click", () => {
          support.classList.toggle("nextopen");
        });
      });
    }
    //전체메뉴
    const closeMenu = () => {
      if (hb_icon) {
        hb_icon.classList.remove("nextopen");
      }
    };
    if (allMenuclose) {
      allMenuclose.addEventListener("click", closeMenu);
    }
    if (dim) {
      dim.addEventListener("click", closeMenu);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
   }, []);
  useEffect(() => {
    const allElements = document.querySelectorAll(".nextopen");

    allElements.forEach((element) => {
      element.classList.remove("nextopen");
    });
  }, [location]);
  
  //검색창
  const handleMbSearchIconClick = (e) => {
    if (window.innerWidth < 768) {
      e.preventDefault();
      setIsMbSearchOpen(prev => !prev);
    }
  };
  useEffect(() => {
    if (!isMbSearchOpen) return;
    const handleClickOutside = (event) => {
      const target = event.target;
      if (
        !target.closest("#mb-searchbox") &&
        !target.classList.contains("search-icon")
      ) {
        setIsMbSearchOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMbSearchOpen]);


  return (
    <header id="hd" className={isScrolled ? "scrolled" : ""}>
      <div className="header_inner">
        <div id="user" className="trip-bl pc">
          <div className="py-1 container d-flex justify-content-end">
            <ul className="d-flex gap-3 align-items-center">
              <li className="d-flex">
                <Link to="/user" className="text-white">
                  로그인/회원가입
                </Link>
              </li>
              <li className="support rel">
                <span className="text-white d-flex nextopentrigger ">
                  고객지원
                  <img
                    src="https://d-hye.github.io/source/img/icon/polygon-1.svg"
                    alt="더보기"
                  />
                </span>
                <ul className={`hide-menu abs d-none`}>
                  <li>
                    <Link to="/service/guide">이용가이드</Link>
                  </li>
                  <li>
                    <Link to="/service/faq">FAQ</Link>
                  </li>
                  <li>
                    <Link to="/service/ask">문의게시판</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div id="gnbbox">
          <div
            id="gnb"
            className="container d-flex justify-content-between align-items-center"
          >
            <h1 className="logo order-2 mx-auto">
              <Link to="/">
                <img
                  src="https://d-hye.github.io/source/img/logo/logo_TRT_basic.svg"
                  alt="트립터"
                />
                <span className="d-none">트립터</span>
              </Link>
            </h1>
            <div className="hb-iconbox">
              <div id="hb-icon" className="p-0 moveleft nextopentrigger">
                <img
                  src="https://d-hye.github.io/source/img/icon/menu-all.svg"
                  alt="전체메뉴"
                />
              </div>
              {/* 햄버거 소메뉴 */}
              <div id="hb-submenu" className={`d-flex flex-column`}>
                <div id="dim-background" className={`dim`}></div>
                <div id="hb-item" className="d-flex flex-column rel">
                  <div className="d-flex justify-content-end d-open">
                    <button id="allMenuclose" className="p16 mx-1">
                      <img
                        src="https://d-hye.github.io/source/img/icon/x-01.svg"
                        className="d-block"
                        alt="닫기"
                      />
                    </button>
                  </div>

                  {/* 로그인 전 */}
                  <div id="login" className="d-none">
                    <div className="m-2">
                      <span>로그인/회원가입</span>
                    </div>
                    <ul className="social-icon d-flex justify-content-center gap-3">
                      <li>
                        <a className="naver" href="/">
                          <img
                            src="https://d-hye.github.io/source/img/icon/naver.svg"
                            alt="naver"
                          />
                        </a>
                      </li>
                      <li>
                        <a className="kakao" href="/">
                          <img
                            src="https://d-hye.github.io/source/img/icon/kakao.svg"
                            alt="kakao"
                          />
                        </a>
                      </li>
                      <li>
                        <a className="google" href="/">
                          <img
                            src="https://d-hye.github.io/source/img/icon/google.svg"
                            alt="google"
                          />
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* 로그인 후 */}
                  <div className="mainheader">
                    <div className="user-box d-flex align-content-end justify-content-between">
                      <div className="profileicon">
                        <img
                          src="https://d-hye.github.io/source/img/icon/user-profile-02.svg"
                          className="d-block"
                          alt=""
                        />
                      </div>
                      <div className="userprofile">
                        <div className="hi">
                          <span>안녕하세요!</span>
                        </div>
                        <div>
                          트립터<span className="username">###</span>님
                        </div>
                      </div>
                      <Link to="/user/mypage" className="settings">
                        <img
                          className="d-block"
                          src="https://d-hye.github.io/source/img/icon/settings.svg"
                          alt="마이페이지"
                        />
                      </Link>
                    </div>
                    <ul className="menu-icon d-flex justify-content-between">
                      <li>
                        <Link to="/user" className="heart">
                          <img
                            src="https://d-hye.github.io/source/img/icon/heart_02.svg"
                            className="d-block"
                            alt="내찜"
                          />
                          <span>내 찜</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/user">
                          <img
                            src="https://d-hye.github.io/source/img/icon/travel.svg"
                            className="d-block"
                            alt="내여행"
                          />
                          <span>내 여행</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/user">
                          <img
                            src="https://d-hye.github.io/source/img/icon/layer.svg"
                            className="d-block"
                            alt="가계부"
                          />
                          <span>내 가계부</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/user">
                          <img
                            src="https://d-hye.github.io/source/img/icon/pencil-02.svg"
                            className="d-block"
                            alt="내후기"
                          />
                          <span>내 후기</span>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* 메뉴리스트 */}
                  <div id="hb-list" className="d-flex flex-column">
                    <ul className="tapPart d-flex flex-column">
                      <li className="feelter">
                        <Link
                          to="/tripRoute/myFeelter"
                          className="d-flex align-items-center"
                        >
                          <span className="text-blue">MY FEEL:TER</span>
                        </Link>
                      </li>
                      <li className="planner">
                        <Link
                          to="/tripRoute/planMaker"
                          className="d-flex align-items-center"
                        >
                          <span className="text-blue">계획짜기</span>
                        </Link>
                      </li>
                    </ul>
                    <div className="d-flex flex-column scroll">
                      <ul className="d-flex communitymenu flex-wrap">
                        <li>
                          <Link
                            to="/tripTalk/findFriend"
                            className="friendfind"
                          >
                            동행 구해요
                          </Link>
                        </li>
                        <li>
                          <Link to="/tripTalk/findPlan" className="planaround">
                            계획 둘러보기
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/tripTalk/findReview"
                            className="reviewaround"
                          >
                            후기 둘러보기
                          </Link>
                        </li>
                      </ul>
                      <ul className="d-flex communitymenu flex-wrap">
                        <li>
                          <Link to="/" className="mbrecomm">
                            MD추천
                          </Link>
                        </li>
                        <li>
                          <Link to="/tripterEvent" className="event">
                            이벤트
                          </Link>
                        </li>
                      </ul>
                      <ul id="hb-sublist">
                        <li>
                          <div>
                            <Link to="/products/airplane/onSale">항공권</Link>
                          </div>
                          <ul className="sublist d-flex flex-wrap">
                            <li>
                              <Link to="/products/airplane/onSale">
                                특가항공
                              </Link>
                            </li>
                            <li>
                              <Link to="/products/airplane/domestic">
                                국내항공
                              </Link>
                            </li>
                            <li>
                              <Link to="/products/airplane/overseas">
                                국외항공
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <div>
                            <Link to="/products/accommodation/onSale">
                              숙소
                            </Link>
                          </div>
                          <ul className="sublist d-flex flex-wrap">
                            <li>
                              <Link to="/products/accommodation/onSale">
                                특가숙소
                              </Link>
                            </li>
                            <li>
                              <Link to="/products/accommodation/hotel">
                                호텔
                              </Link>
                            </li>
                            <li>
                              <Link to="/products/accommodation/guestHouse">
                                게스트하우스
                              </Link>
                            </li>
                            <li>
                              <Link to="/products/accommodation/countryside">
                                펜션&캠핑
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <div>
                            <Link to="/products/reservation/allPass">
                              티켓&투어
                            </Link>
                          </div>
                          <ul id="ticket" className="sublist d-flex flex-wrap">
                            <li>
                              <Link
                                className="allPass text-blue"
                                to="/products/reservation/allPass"
                              >
                                올패스권
                              </Link>
                            </li>
                            <li>
                              <Link to="/products/reservation/localTour">
                                현지투어
                              </Link>
                            </li>
                            <li>
                              <Link to="/products/reservation/themePark">
                                테마파크
                              </Link>
                            </li>
                            <li>
                              <Link to="/products/reservation/ticket">
                                전시체험
                              </Link>
                            </li>
                            <li>
                              <Link to="/products/reservation/train">
                                철도여행
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dim 배경 */}
            {/* <div id="dim-background" className={`dim d-none`} ></div> */}

            <ul id="menu" className="d-flex gap-3 order-1 pc">
              <li>
                <Link
                  to="/tripRoute/myFeelter"
                  className={isScrolled ? "scrolled" : ""}
                >
                  계획짜기
                </Link>
              </li>
              <li>
                <Link
                  to="/tripTalk/findPlan"
                  className={isScrolled ? "scrolled" : ""}
                >
                  트립톡
                </Link>
              </li>
              <li>
                <Link
                  to="/tripterEvent"
                  className={isScrolled ? "scrolled" : ""}
                >
                  이벤트
                </Link>
              </li>
            </ul>
            <ul className="icon d-flex align-items-center order-3">
              <li className="search">
                <form action="/" className="d-flex align-items-center">
                  <input
                    type="text"
                    className={`search-bar pc ${isScrolled ? "scrolled" : ""}`}
                    name="search"
                    placeholder="눈의 나라 훗카이도로~!"
                  />
                  <input
                    type="image"
                    className="search-icon py-0"
                    src="https://d-hye.github.io/source/img/icon/search-02.svg"
                    alt="검색" onClick={(e)=>{
                      const windowWidth = window.innerWidth;
                      if (windowWidth < 768) {
                        e.preventDefault(); // 폼 제출 막기
                        setIsMbSearchOpen((prev) => !prev);
                      }
                    }}
                  />
                </form>
              </li>
              <li>
                <button className="wishlist-btn p-0">
                  <Link to="/">
                    <img
                      src="https://d-hye.github.io/source/img/icon/travel_bl.svg"
                      alt="찜"
                    />
                  </Link>
                </button>
              </li>
            </ul>
          </div>
          <div id="mb-searchbox" className={`${isMbSearchOpen ? "" :"d-none"}`}>
            <form
              action="/"
              className="mb-search d-flex align-items-center justify-content-end"
            >
              <input
                type="text"
                className="mb-searchbar"
                name="search"
                placeholder="눈의 나라 훗카이도로~!"
              />
              <input
                type="image"
                className="mb-searchicon"
                src="https://d-hye.github.io/source/img/icon/search-01.svg"
                alt="검색"
              />
            </form>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
