import React from 'react';
import { Link, useParams } from 'react-router-dom';

import SubContent from '../SubContent';

const Prodcut = ({dataInfo}) => {
    const { category, tab} = useParams()
    const dataCategory = dataInfo?.["products"]?.[category]

    return (
        <main className='subMain page_product'>
            <section className={`${tab}Section`}>
                <div class="sectionBanner">
                    <div>
                        <h3>{dataCategory?.[tab]?.name}</h3>
                        <p>{dataCategory?.[tab]?.description}</p> 
                    </div>
                </div>
                <div className="sectionList">
                    <ul className="d-flex justify-content-center container_m flex-wrap">
                        {
                            Object.entries(dataCategory).map(([key, list]) => (
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
                    
                </div>
                
            </section>  
        </main>
    );
};

export default Prodcut;