import { Link, useParams } from 'react-router-dom';

import Content from './Content';


function TripTalk({dataInfo}) {
    const { tab } = useParams();
    const activeTab = tab || "findPlan";
  

    return (
        <main className="subMain page_triptalk">  
            <section className={`${activeTab}Section`}>
                <div class="sectionBanner">
                    <div>
                        <h3>{dataInfo["tripTalk"][activeTab].name}</h3>
                        <p>{dataInfo["tripTalk"][activeTab].description}</p>
                    </div>
                </div>
                <div className="sectionList">
                    <ul className="d-flex justify-content-center container_m flex-wrap">
                        
                            {
                            Object.entries(dataInfo["tripTalk"]).map(([key, list]) => (
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

export default TripTalk;