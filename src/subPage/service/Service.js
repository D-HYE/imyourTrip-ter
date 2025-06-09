import { Link, useParams } from 'react-router-dom';
import React from 'react';


import SubContent from '../SubContent';

const Service = ({dataInfo}) => {
    const { tab } = useParams();
    return (
        <main className="subMain page_service">  
            <section className={`${tab}Section`}>
                <div class="sectionBanner pc"style={{
                    backgroundImage: `
                    linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)),
                    url('https://d-hye.github.io/source/img/banner/${tab}.jpg')
                    `,
                }}>
                    <div>
                        <h3>{dataInfo?.["service"]?.[tab]?.name}</h3>
                        <p>{dataInfo?.["service"]?.[tab]?.description}</p>
                    </div>
                </div>
                <div className="subContWrap d-flex justify-content-center">
                    <div className="sectionList pageBox">
                        <ul className="d-flex flex-column gap-2">
                            {
                                Object.entries(dataInfo["service"]).map(([key, list]) => (
                                    <li key={key} className={key === tab ? "active" : ""}>
                                        {console.log(key)}
                                        <Link to={list.link} className="d-flex align-items-center">
                                             {list.name}<span style={{background: `url('https://d-hye.github.io/source/img/icon/tab_icon/${key === tab ? `c_${key}` : key}.svg') no-repeat center/contain`,}}></span>
                                        </Link>
                                    </li>
                                ))
                            }
                    
                        </ul>
                    </div>
                    <div className="sectionCont">
                        <SubContent activeTab={tab}></SubContent>
                    </div>
                </div>
            </section>  
        </main>
    );
};

export default Service;