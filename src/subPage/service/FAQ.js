import React, {useState} from 'react';
import faqdata from '../../data/faq.json';
import ekmodule from '../../scss/faq.ek.module.scss';
import {FaqTabMenu} from '../../../src/components/util';

const FAQ = () => {
    const [activeTab, setActiveTab] = useState("전체보기");
    const [openIndex, setOpenIndex] = useState(null);
    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const filteredFaq = activeTab === "전체보기"
        ? faqdata.faq
        : faqdata.faq.filter(item =>
        Array.isArray(item.category)
        ? item.category.includes(activeTab)
        : item.category === activeTab
    );

    return (      
        <div className={`${ekmodule.faq}`}>
            <h2>고객센터</h2>
            <li className={`${ekmodule.title}`}>
                <h4>자주 묻는 질문 FAQ </h4>
                <a href="/Service/ask" className={`${ekmodule.qnabtn}`}>1:1문의</a>
            </li>
            <div>
                <FaqTabMenu activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
                <dl>
                {filteredFaq.map((item, index) => (
                    <div key={index}> 
                        <dt className="d-flex "
                        onClick={()=> toggleFAQ(index)}>
                        <span className={`${ekmodule.qamark}`}  >Q.</span>
                        <span className={`${ekmodule.question}`}>{item.question}</span>
                            <img src="https://d-hye.github.io/source/img/icon/polygon-bottom.svg"
                            alt="faq버튼" 
                            className={`${ekmodule.icon} ${openIndex === index ? ekmodule.rotateIcon : ""}`}
                            style={{width: '15px', 
                                    height: '15px', 
                                    marginLeft: 'auto', 
                                    marginRight:'10px'                        
                                    }}/>
                        </dt>
                            {openIndex === index && (
                            <dd className={openIndex === index ? ekmodule.active : ""}>
                            <span className={`${ekmodule.qamark}`}>A.</span>
                            <span>{item.answer}</span>
                            </dd>
                            )}
                        </div>
                    ))}                
                </dl>
        </div>
        
    );
};

export default FAQ;