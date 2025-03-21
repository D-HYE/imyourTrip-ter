import { Link, useParams } from 'react-router-dom';

import Content from './Content';


function TripterEvent({dataInfo}) {
    const { tab } = useParams();
    const activeTab = tab || "event1";
  

    return (
        <main className="subMain page_event">  
            <section className={`${activeTab}Section`}>
                <div class="sectionBanner">
                    <div>
                        <h3>{dataInfo["tripterEvent"][activeTab].name}</h3>
                        <p>{dataInfo["tripterEvent"][activeTab].description}</p>
                    </div>
                </div>
                <div className="sectionList">
                    <ul className="d-flex justify-content-center container_m flex-wrap">
                        
                            {
                            Object.entries(dataInfo["tripterEvent"]).map(([key, list]) => (
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

export default TripterEvent;