import { Link, useParams } from 'react-router-dom';

import Content from './Content';
//Link를 useState 초기화 하는 방향으로 사유: a href=가 안 먹힘

function TripRoute({dataInfo}) {
    const { tab } = useParams();
    const activeTab = tab || "myFeelter";


    return (
        <main className="subMain page_plan">  
            <section className={`${activeTab}Section`}>
                <div className="sectionBanner text-blue">
                    <div>
                        <h3>{dataInfo["tripRoute"][activeTab].name}</h3>
                        <p>{dataInfo["tripRoute"][activeTab].description}</p>
                    </div>
                </div>
                <div className="sectionList">
                    <ul className="d-flex justify-content-center container_m flex-wrap">
                        
                            {
                            Object.entries(dataInfo["tripRoute"]).map(([key, list]) => (
                                <li key={key} className={key === activeTab ? "active" : ""}>
                                    <Link to={list.link} className="d-flex">
                                        {list.name}
                                        <span></span>
                                    </Link>
                                    
                                </li>
                            ))
                        }
                        
                    </ul>
                </div> 
                <Content activeTab={activeTab}></Content>
            </section>  
        </main>

    );
}

export default TripRoute;