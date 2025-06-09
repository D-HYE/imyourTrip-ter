import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { StyledBtn } from "../../styleComponents/ui"
import { signUpRegister } from '../../api/api';
import SignUpStep1, { SignUpStep2 }  from './SignUpStep';



const SignUp = () => {
    const [step, setStep] = useState(1);
    const [isComplete, setIsComplete] = useState(false);
    const [userName, setUserName] = useState("");

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, touchedFields },
        trigger,
        setValue,
    } = useForm({
        mode: "onChange",
    });

    const handleNextClick = async () => {
        const valid = await trigger(["agree1", "agree2", "agree3"]);
        if (valid) {
            setStep(2);
        } else {
            alert("필수 약관에 동의해 주세요.");
        }
    };

    const onValid = async (data) => {
        const error = await signUpRegister(data);
        if (error) {
          console.error("회원가입 실패:", error.message);
          alert("회원가입 중 오류가 발생했습니다.");
        } else {
            setUserName(data.user_name);
            setIsComplete(!isComplete)
        }
    };

    return (
        <>
            {!isComplete ? (
                <div className="signup_area container_m pageBox py-2">
                    <div className="signup_tab">
                        <ul className="d-flex justify-content-center gap-2">
                            <li className={`${step === 1 ? "active" : ""}`}>약관동의</li>
                            <li className={`${step === 2 ? "active" : ""}`}>정보입력</li>
                        </ul>
                    </div>
                    <form onSubmit={handleSubmit(onValid)} noValidate>
                        {step === 1 && (
                            <SignUpStep1
                            register={register}
                            watch={watch}
                            setValue={setValue}
                            />
                        )}
                        {step === 2 && (
                            <SignUpStep2
                            register={register}
                            errors={errors}
                            watch={watch}
                            setValue={setValue}
                            touchedFields = {touchedFields}
                            />
                        )}
                        <div className="btn_wrap">
                            {step === 1 ? (
                                <StyledBtn
                                    width = "100%" padding = {"0, 0"}
                                    fontSize = "var(--small-text)"
                                    color = "var(--trip-black)"
                                    background = "var(--trip-gray1)"
                                    onClick={handleNextClick}
                                >다음 단계</StyledBtn>
                            ) : (
                                <StyledBtn
                                    type="submit"
                                    width = "100%" padding = {"0, 0"}
                                    fontSize = "var(--semismall-text)"
                                    color = "var(--trip-black)"
                                    background = "var(--trip-gray1)"
                                >가입하기</StyledBtn>
                            )}
                        </div>
                    </form>
                </div>
            ) : (
                <div className="signup_result container_m pageBox py-2">
                <div className="img_box">
                    <img src="https://trip-ter.vercel.app/img/illustrator/airplane.png" alt="가입을 축하합니다!"/>
                </div>
                <h3 className="color-active-blue"><span>{userName}</span>님의 가입을 축하합니다!</h3>
                <p>그럼 트립터와 함께 떠나볼까요?</p>
                <div className="btn_wrap d-flex justify-content-center gap-2">
                    <Link to="/">메인으로 가기</Link>
                    <Link to="/user/login">로그인 하기</Link>
                </div>
            </div>
            )}
        </>
    );
};

export default SignUp;