import { useSearchParams } from "react-router-dom";
import MyFeelterResult from "./MyFeelterResult";
import alldata from "../../data/alldata.json";

export default function MyFeelter() {
    const questions = Object.entries(alldata["myfeelterQ"]);
    const lastQIdx = questions.length - 1;

    const [searchParams, setSearchParams] = useSearchParams();

    // 현재 질문 인덱스 가져오기 (없으면 0)
    const currQIdx = parseInt(searchParams.get("q") || "0", 10);

    // 현재까지 선택한 답변들 가져오기 (q 값 제외)
    const answers = Object.fromEntries([...searchParams.entries()].filter(([key]) => key !== "q"));

    const handleNextQ = (key, value) => {
        const updatedParams = new URLSearchParams(searchParams);
        updatedParams.set(key, value);
        updatedParams.set("q", currQIdx + 1); // 다음 질문으로 이동
        setSearchParams(updatedParams);
    };

    const handlePrevQ = () => {
        if (currQIdx > 0) {
            const updatedParams = new URLSearchParams(searchParams);
            updatedParams.set("q", currQIdx - 1); // 이전 질문으로 이동
            setSearchParams(updatedParams);
        }
    };

    // 모든 질문 완료 시 결과 페이지로 이동
    if (currQIdx > lastQIdx) {
        return <MyFeelterResult answers={answers} />;
    }

    const [key, item] = questions[currQIdx];

    return (
        <div className="myFeelterSection form_area pageBox">
            <div className="question_info">
                <div className="d-flex justify-content-between align-items-center">
                    <div
                        className={`back_btn ${currQIdx === 0 ? "none-active" : ""}`}
                        onClick={handlePrevQ}
                    ></div>
                    <div className="question_num">
                        <span>{currQIdx + 1}</span><span>/{questions.length}</span>
                    </div>
                </div>
            </div>

            <form id="myfeelterForm">
                <fieldset className={`filset${key}`}>
                    <div className="questionBox py-4 px-1">
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
                                    checked={answers[key] === answer.value}
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