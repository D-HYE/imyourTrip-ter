import React, { useState, useEffect, useRef } from 'react';
import { StyledBtn } from '../../styleComponents/ui';
import Wishplan from './Wishplan';




const wishlistData = {
  항공권: [{ title: "가오슝가는편항공권", link: "/" }],
  숙소: [],
  티켓: [], // 아직 없음
};

const WishlistItem = ({ category, items }) => (
  <div className={`wishlist_${category} wishlist_`}>
    <ul className="d-flex flex-column gap-2">
      <li>{category}</li>
      {items.length > 0 ? (
        items.map((item, i) => (
          <li key={i}>
            <a href={item.link}>
              {item.title}
            </a>
          </li>
        ))
      ) : (
        <li>
          <a href="/">선택하러 가기</a>
        </li>
      )}
    </ul>
  </div>
);

const Wishlist = ({tripDate, count}) => {
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const sideMenuRef = useRef(null);

  const handleOutsideClick = (e) => {
    if (sideMenuRef.current && !sideMenuRef.current.contains(e.target)) {
      setIsWishlistOpen(false);
    }
  };

  useEffect(() => {
    if (isWishlistOpen) {
      document.addEventListener('click', handleOutsideClick);
    } else {
      document.removeEventListener('click', handleOutsideClick);
    }
  }, [isWishlistOpen]);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsWishlistOpen(prev => !prev);
   };

  return (
    <div className="wishlist_container">
      <div className="wishlist_quick d-flex justify-content-center align-items-center" onClick={toggleMenu}>
        <button className="wishlist_quickicon" aria-label="장바구니 아이콘"></button>
      </div>
        <div className={`wishlist_list ${isWishlistOpen ? 'open' : ''}`} ref={sideMenuRef}>
          <div className="whishlist_sidemenu">
            <div className="wishlist_title">
              <p className="text-blue px-1 py-2 d-flex align-items-end">
                <b>효정곤듀에요</b><span>님의 계획짜기</span>
              </p>
            </div>
            <Wishplan 
              tripDate={tripDate}
              count={count}
            />
            <div className="wishlist_items">
              {Object.entries(wishlistData).map(([category, items]) => (
                <WishlistItem key={category} category={category} items={items} />
              ))}
            </div>
            <div className="wishBtn d-flex flex-column justify-content-center">
              <StyledBtn
                fontWeight="700"
                fontSize="var(--semismall-text)"
                color="var(--trip-blue)"
                background="var(--trip-yellow)"
                borderRadius = "30px"
                padding={[1, 2]}
              >
                나의 찜과 함께 계획짜기
              </StyledBtn>
            </div>
          </div>
        </div>
      
    </div>
  );
};


export default Wishlist;
