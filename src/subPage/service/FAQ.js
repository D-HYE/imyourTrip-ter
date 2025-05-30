import React, {useState} from 'react';
import faqdata from '../../data/faq.json';
import ekmodule from '../../scss/faq.ek.module.scss';

const FAQ = () => {
    return (      
        <div className={`${ekmodule.faq}`}>
            <h2 className="">고객센터</h2>
            <li>
                <h4>자주 묻는 질문 FAQ </h4>
                <button className={`${ekmodule.qnabtn}`}>1:1문의</button>
            </li>
            <ul className={`${ekmodule.faqtab}`}>
                탭메뉴 컴포넌트
            </ul>
                <dl>
                {faqdata.faq.map(
                    (item) => {
                        return(
                            <>
                            <dt><span className={`${ekmodule.qamark}`}>Q.</span>{item.question}
                            <img src="https://d-hye.github.io/source/img/icon/polygon-bottom.svg"
                            style={{ width: '15px', height: '15px', marginLeft: 'auto', marginRight:'10px'}}/>
                            </dt>
                            <dd>
                            <span className={`${ekmodule.qamark}`}>A.</span>{item.answer}
                            </dd>
                            </>
                        )
                    }
                )}
                </dl>
        </div>
        
    );
};

export default FAQ;