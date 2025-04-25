import { Link } from 'react-router-dom';

function Section5() {
    
    return (
        <div className="section section5">
            <h3 className="section_tit">
                여행 혜택도 놓치지 마세요
            </h3>
            <div className="container">
                    <ul className="d-flex justify-content-between">
                        <li className="img_box">
                            <Link to="/tripterEvent">
                                <img src="https://d-hye.github.io/source/img/banner/coupon_event.jpg" alt="트립터 후기 이벤트" />
                            </Link>
                        </li>
                        <li>
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/s5YtOodFQZY?si=zqrrEUOKmJgJzv2E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </li>
                    </ul>
            </div>
        </div>
    );
}

export default Section5;