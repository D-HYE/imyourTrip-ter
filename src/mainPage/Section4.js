import { Link } from 'react-router-dom';
import { useState } from "react";

function Section4({tabData}) {
    const [activeIndex, setActiveIndex] = useState(0);

    if (!tabData) return <p>Loading...</p>;

    
    return (
        <div className="section section4">
            <div className="container">
                <h3 className="section_tit">
                    지금 가장 인기있는 <span>여행지를 만나보세요</span>
                </h3>
                <ul className="tab_menu d-flex justify-content-center flex-wrap" id="tabMenu">
                    {tabData.map((item, idx) => (
                        <li 
                            key={item.tabid} 
                            className={activeIndex === idx ? "active" : ""}
                            onClick={() => setActiveIndex(idx)}
                        >
                            &#35;{item.tabnm}
                        </li>
                    ))}
                </ul>
                <ul className="tab_contents d-flex justify-content-between" id="tabContent">
                    {tabData[activeIndex].tablist.map(item => (
                        <li 
                            key={item.src} 
                            className="d-flex align-items-end content_desc"
                            style={{ backgroundImage: `url("${item.src}")` }}
                        >
                            <Link to={item.href} className="d-flex align-items-center justify-content-center">
                                <b>{item.title}</b>
                                <span>{item.desc}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Section4;