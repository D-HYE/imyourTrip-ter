import { Link, useParams } from 'react-router-dom';
import React from 'react';


import SubContent from '../SubContent';

const Service = ({dataInfo}) => {
    const { tab } = useParams();
    return (
        <main className="subMain page_service">  
            <section className={`${tab}Section`}>
                <div class="sectionBanner pc">
                    <div>
                        <h3>{dataInfo?.["service"]?.[tab]?.name}</h3>
                        <p>{dataInfo?.["service"]?.[tab]?.description}</p>
                    </div>
                </div>
                <div className="sectionList">
                    <ul className="d-flex justify-content-center container_m flex-wrap">
                        
                            {
                            Object.entries(dataInfo["service"]).map(([key, list]) => (
                                <li key={key} className={key === tab ? "active" : ""}>
                                    <Link to={list.link} className="d-flex align-items-center">
                                        {list.name}
                                        <span></span>
                                    </Link>
                                </li>
                            ))
                        }
                        
                    </ul>
                </div> 
                <div className="sectionCont">
                    <SubContent activeTab={tab}></SubContent>
                </div>
            </section>  
        </main>
    );
};

export default Service;