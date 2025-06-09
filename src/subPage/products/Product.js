import React from 'react';
import { Link, useParams } from 'react-router-dom';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';


const Prodcut = ({dataInfo, testData}) => {
    const { category, tab, productID} = useParams();
    const dataCategory = dataInfo?.["products"]?.[category];

    return (
        <main className='subMain page_product'>
            <section className={`${tab}Section`}>
                <div class="sectionBanner pc" style={{
                    backgroundImage: `
                    linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)),
                    url('https://d-hye.github.io/source/img/banner/${tab}.jpg')
                    `,
                }}>
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
                                            <span style={{
                                                background: `
                                                url('https://d-hye.github.io/source/img/icon/tab_icon/${
                                                    key === tab ? `c_${key}` : key
                                                }.svg') no-repeat center/contain
                                                `,
                                            }}></span>
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="sectionCont">
                        {
                            !productID ? <ProductList category={category} tab={tab} testData={testData}/> : <ProductDetail
                            testData={testData}
                            />
                        }
                    
                    </div>
                </div>
                
            </section>  
        </main>
    );
};

export default Prodcut;