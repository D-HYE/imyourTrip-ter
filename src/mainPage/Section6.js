import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";

function Section6() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/data/review.json")
          .then((res) => res.json())
          .then((json) => setData(json))
          .catch((error) => console.error("Error fetching data:", error));
    }, []);

    if (data.length === 0) return <p>Loading...</p>;

    
    return (
        <div className="section section6">
            <h3 className="section_tit py-4">
                실시간 후기
            </h3>
            <div className="page_view container d-flex justify-content-end"><Link to="#none">후기 더 보기&gt;</Link></div>
            <div className="marquee_area">
                <div className="marquee_wrap">
                    <ul className="marquee_line marquee_line1 d-flex my-2" id="review_marquee1">
                    </ul>
                </div>
                <div className="marquee_wrap pc">
                    <ul className="marquee_line marquee_line2 d-flex my-2" id="review_marquee2">

                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Section6;