import { Link, useParams } from 'react-router-dom';

import SubContent from '../SubContent';


function TripterEvent({dataInfo}) {
    const { tab } = useParams();
    const activeTab = tab || "event1";
  

    return (
        <main className="subMain page_event">  
            <section className={`${activeTab}Section`}>
                <div class="sectionBanner">
                    <div>
                        <h3>{dataInfo?.["tripterEvent"]?.[activeTab]?.name}</h3>
                        <p>{dataInfo?.["tripterEvent"]?.[activeTab]?.description}</p>
                    </div>
                </div>
                <div className="sectionList">
                    <ul className="d-flex justify-content-center container_m flex-wrap">
                        
                            {
                            Object.entries(dataInfo["tripterEvent"]).map(([key, list]) => (
                                <li key={key} className={key === activeTab ? "active" : ""}>
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
                    <SubContent activeTab={activeTab}></SubContent>
                </div>
            </section>  
        </main>

    );
}

export default TripterEvent;