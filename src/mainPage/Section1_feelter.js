import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../scss/myfeelter.scss'

export default function Section1_feelter() {

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isFormInvalid, setIsFormInvalid] = useState(true);

    const [qna, setQna] = useState({
        qna1: '',
        qna2: '',
        qna3: '',
        qna4: '',
    });

    const handleRadioChange = (question, value) => {
        setQna((prevQna) => {
            const newQna = { ...prevQna, [question]: value };
            // ...prevQna 전개연산자 기존의 상태를 수정하지 않고 새로운 객체를 만들어 업데이트
            const allAnswered = Object.values(newQna).every((answer) => answer !== '');
            // = 객체(objiect) 값(newQna)만 배열로 가져오는데(valuses), 모든 답이 비어있지 않다 = true
            // 하나라도 비어있으면 false

            setIsFormInvalid(!allAnswered);
            // isFormInvalid가 true면 allAnswered는 false
            // isFormInvalid가 false면 allAnswered는 true 라는 뜻인가?
            return newQna;
        });
    };

    const qna3Val = qna.qna3

    const handleButtonClick = (e) => {
        e.preventDefault();
        if (!isFormInvalid) {
            setIsSubmitted(true);
            // 그러면 이것도 isFormInvalid가 false면 isSubmitted은 true가 되고 
            // isFormInvalid가 true면 isSubmitted는 false가 된다는 뜻?
        }
    };



    return (
        <div className="d-flex flex-column align-items-center justify-content-center" style={{borderRadius:"20px"}}>
            {!isSubmitted && (
                <div className="simple_feelter_inquiry">
                    <h4 className="simple_feelter_tit text-blue">여행을 계획하시나요?</h4>
                    <div className="simple_feelter_cont d-flex flex-column gap-3">
                        <div className="">
                            <h6>나의 여행 스타일은?</h6>
                            <div className="radio_wrap d-flex">
                                <input id="qna1-1" className="d-none" type="radio" name="qna1" value="계획형" onChange={() => handleRadioChange('qna1', '9')} />
                                <label className="radio_value" htmlFor="qna1-1">계획형</label>
                                <input id="qna1-2" className="d-none" type="radio" name="qna1" value="즉흥형" onChange={() => handleRadioChange('qna1', '1')} />
                                <label className="radio_value" htmlFor="qna1-2">즉흥형</label>
                                <input id="qna1-3" className="d-none" type="radio" name="qna1" value="아무거나" onChange={() => handleRadioChange('qna1', '5')} />
                                <label className="radio_value" htmlFor="qna1-3">아무거나</label>
                            </div>
                        </div>
                        <div className="">
                            <h6>여행지 선택의 1순위는?</h6>
                            <div className="radio_wrap d-flex">
                                <input id="qna2-1" className="d-none" type="radio" name="qna2" value="음식" onChange={() => handleRadioChange('qna2', '1')} />
                                <label className="radio_value" htmlFor="qna2-1">음식</label>
                                <input id="qna2-2" className="d-none" type="radio" name="qna2" value="액티비티" onChange={() => handleRadioChange('qna2', '2')} />
                                <label className="radio_value" htmlFor="qna2-2">액티비티</label>
                                <input id="qna2-3" className="d-none" type="radio" name="qna2" value="호텔" onChange={() => handleRadioChange('qna2', '3')} />
                                <label className="radio_value" htmlFor="qna2-3">호텔</label>
                                <input id="qna2-4" className="d-none" type="radio" name="qna2" value="관광명소" onChange={() => handleRadioChange('qna2', '4')} />
                                <label className="radio_value" htmlFor="qna2-4">관광명소</label>
                            </div>
                        </div>
                        <div className="">
                            <h6>나의 여행 스타일은?</h6>
                            <div className="radio_wrap d-flex">
                                <input id="qna3-1" className="d-none" type="radio" name="qna3" value="짧게 여러 번" onChange={() => handleRadioChange('qna3', 'A')} />
                                <label className="radio_value" htmlFor="qna3-1">짧게 여러 번</label>
                                <input id="qna3-2" className="d-none" type="radio" name="qna3" value="길게 한 번에" onChange={() => handleRadioChange('qna3', 'B')} />
                                <label className="radio_value" htmlFor="qna3-2">길게 한 번에</label>
                            </div>
                        </div>
                        <div className="">
                            <h6>나의 여행 스타일은?</h6>
                            <div className="radio_wrap d-flex">
                                <input id="qna4-1" className="d-none" type="radio" name="qna4" value="가성비" onChange={() => handleRadioChange('qna4', '1')} />
                                <label className="radio_value" htmlFor="qna4-1">가성비</label>
                                <input id="qna4-2" className="d-none" type="radio" name="qna4" value="여행은 플렉스" onChange={() => handleRadioChange('qna4', '9')} />
                                <label className="radio_value" htmlFor="qna4-2">여행은 플렉스</label>
                            </div>
                        </div>
                    </div>
                    <button className={`confirm_btn ${isFormInvalid ? 'invalid' : ''}`} onClick={handleButtonClick}>MY FEEL:TER 설정하기</button>
                </div>

            )}
            {isSubmitted && (
                <div className="simple_feelter_result">
                    <h4 className="simple_feelter_tit">추천 여행지 <span className="text-blue">{`${qna3Val === "A" ? ("제주도") : ("부탄")}`}</span></h4>
                    <div className="simple_feelter_cont">
                        <div className="img100 d-flex justify-content-center align-items-center">
                            {qna3Val === "A" ? (<img src="https://d-hye.github.io/source/img/sample/sampleimg46.jpg" alt="샘플이미지1" />) : (<img src="https://d-hye.github.io/source/img/sample/sampleimg62.jpg" alt="샘플이미지1" />)}

                        </div>
                    </div>
                    <Link to="/tripRoute/myFeelter"><button className="confirm_btn">MY FEEL:TER 추천 더 보기 &gt;</button></Link>
                </div>

            )}
        </div>
    );
}

