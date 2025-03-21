import { useState } from "react";
import MyFeelterResult from "./MyFeelterResult";
import alldata from "../../data/alldata.json";

export default function MyFeelter() {
    const questions = Object.entries(alldata["myfeelterQ"]);
    const [currQIdx, setCurrQIdx] = useState(0);
    const [answers, setAnswers] = useState({});

    const lastQIdx = questions.length - 1;

    const handleNextQ = (key, value) => {
        setAnswers(prev => ({
            ...prev,
            [key]: value
        }));

        if (currQIdx > lastQIdx) {
            return;
            // 마지막 질문이면 더 이상 진행하지 않음
        }

        setCurrQIdx(prev => prev + 1);
    };

    if (currQIdx >= lastQIdx) {
        return <MyFeelterResult answers={answers}/>;
    }

    const [key, item] = questions[currQIdx];

    return (
        <div className="form_area container_m">
            <div className="question_info">
                <div className="d-flex justify-content-between align-items-center">
                    <div
                        className={`back_btn ${currQIdx === 0 ? "none-active" : ""}`}
                        onClick={() => currQIdx > 0 && setCurrQIdx(currQIdx - 1)}
                    ></div>
                    <div className="question_num">
                        <span>{currQIdx + 1}</span><span>/{questions.length}</span>
                    </div>
                </div>
            </div>

            <form id="myfeelterForm">
                <fieldset className={`filset${key}`}>
                    <div className="questionBox">
                        <legend><span>Q{currQIdx + 1}.</span> {item.question}</legend>
                    </div>

                    <div className={`answerBox d-flex justify-content-center ${item.className}`}>
                        {item.answers.map((answer) => (
                            <div key={answer.value}>
                                <input
                                    type="radio"
                                    name={key}
                                    value={answer.value}
                                    id={`${key}_${answer.value}`}
                                    className="d-none"
                                    onChange={() => handleNextQ(key, answer.value)}
                                />
                                <label
                                    className="d-flex justify-content-center align-items-center"
                                    htmlFor={`${key}_${answer.value}`}
                                    style={{ backgroundImage: `url(${answer.src})` }}
                                >
                                    <span>{answer.label}</span>
                                </label>
                            </div>
                        ))}
                    </div>
                </fieldset>
            </form>
        </div>
    );
}
