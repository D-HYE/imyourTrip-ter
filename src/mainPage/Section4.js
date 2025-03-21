import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";

function Section4() {
    const [data, setData] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        fetch("/data/mainTabMenu.json")
          .then((res) => res.json())
          .then((json) => setData(json))
          .catch((error) => console.error("Error fetching data:", error));
    }, []);

    if (data.length === 0) return <p>Loading...</p>;

    
    return (
        <div className="section section4">
            <div className="container">
                <h3 className="section_tit">
                    지금 가장 인기있는 <span>여행지를 만나보세요</span>
                </h3>
                <ul className="tab_menu d-flex justify-content-center flex-wrap" id="tabMenu">
                    {data.map((t, i) => (
                        <li 
                            key={t.tabid} 
                            className={activeIndex === i ? "active" : ""}
                            onClick={() => setActiveIndex(i)}
                        >
                            {t.tabnm}
                        </li>
                    ))}
                </ul>
                <ul className="tab_contents d-flex justify-content-between" id="tabContent">
                    {data[activeIndex].tablist.map((t, i) => (
                        <li 
                            key={t.src} 
                            className="d-flex align-items-end content_desc"
                            style={{ backgroundImage: `url("${t.src}")` }}
                        >
                            <Link to={t.href} className="d-flex align-items-center justify-content-center">
                                <b>{t.title}</b>
                                <span>{t.desc}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Section4;