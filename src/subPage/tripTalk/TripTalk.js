import { Link, useParams } from 'react-router-dom';

import SubContent from '../SubContent';


function TripTalk({dataInfo}) {
    const { tab } = useParams();
  

    return (
        <main className="subMain page_triptalk">  
            <section className={`${tab}Section`}>
                <div class="sectionBanner pc">
                    <div>
                        <h3>{dataInfo?.["tripTalk"]?.[tab]?.name}</h3>
                        <p>{dataInfo?.["tripTalk"]?.[tab]?.description}</p>
                    </div>
                </div>
                <div className="subContWrap d-flex justify-content-center">
                    <div className="sectionList pageBox">
                        <ul className="d-flex flex-column gap-2">
                            {
                                Object.entries(dataInfo["tripTalk"]).map(([key, list]) => (
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
                        <SubContent key={tab} activeTab={tab}></SubContent>
                    </div>
                </div>
                
            </section>  
        </main>

    );
}

export default TripTalk;