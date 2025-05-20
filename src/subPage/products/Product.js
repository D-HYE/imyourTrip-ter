import React from 'react';
import { Link, useParams } from 'react-router-dom';
import ProductList from './ProductList';


import SubContent from '../SubContent';

const Prodcut = ({dataInfo}) => {
    const { category, tab} = useParams()
    const dataCategory = dataInfo?.["products"]?.[category]

    return (
        <main className='subMain page_product'>
            <section className={`${tab}Section`}>
                <div class="sectionBanner pc">
                    <div>
                        <h3>{dataCategory?.[tab]?.name}</h3>
                        <p>{dataCategory?.[tab]?.description}</p> 
                    </div>
                </div>
                <div className="subContWrap d-flex justify-content-center">
                    <div className="sectionList pageBox">
                        <ul className="d-flex flex-column gap-2">
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
                    <div className="sectionCont pageBox">
                        <ProductList category={category} tab={tab} />
                    </div>
                </div>
                
            </section>  
        </main>
    );
};

export default Prodcut;