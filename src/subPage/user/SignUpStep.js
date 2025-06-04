import React, { useEffect } from 'react';

import { StyledBtn } from "../../styleComponents/ui"
import element from "../../scss/elements.module.scss"

const SignUpStep1 = ({ register, watch, setValue }) => {
    const agreeFields = ["agree1", "agree2", "agree3", "privacy_agree", "location_agree"];
    const agreeValues = watch(agreeFields);

    const allAgreed = agreeValues.every(Boolean);

    const handleAgreeAllChange = (e) => {
        const isChecked = e.target.checked;
        agreeFields.forEach((field) => {
            setValue(field, isChecked);
        });
    };

    useEffect(() => {
        setValue("agreeAll", allAgreed);
    }, [allAgreed, setValue]);

    return (
        <div className="signup_step signup_step1">
            <h5>
                <label className={element.checkbox_label}>
                    <input type="checkbox" checked={allAgreed} onChange={handleAgreeAllChange} />
                    <span>약관 전체 동의</span>
                </label>
            </h5>
            <div className="require_checkbox">
                <h6>필수 동의 항목</h6>
                <fieldset className="fieldset1">
                    <label className={element.checkbox_label}>
                        <input type="checkbox" {...register("agree1", { required: true })} />
                        <span className="text-blue">[필수] 이용약관 &gt;</span>
                        <div>
                            <p>Duis ac ultricies augue, ut egestas turpis. Nulla sagittis ornare leo eu aliquam. Vestibulum eget tincidunt lectus.</p>
                            <p>Praesent tellus nunc, sollicitudin ac vehicula a, aliquam at metus. Nulla lobortis mauris sit amet eros viverra tristique. Nullam non mi odio. Phasellus ullamcorper lacus scelerisque, convallis magna sed, rutrum augue.</p>
                            <p>Donec augue ex, venenatis et magna in, posuere ullamcorper est. Quisque et ex vel lectus bibendum feugiat. Ut facilisis sodales tempor. Cras tempus libero ut nisl venenatis molestie.</p>
                        </div>
                    </label>
                </fieldset>
                <fieldset className="fieldset2">
                    <label className={element.checkbox_label}>
                        <input type="checkbox" {...register("agree2", { required: true })} />
                        <span className="text-blue">[필수] 전자 금융 거래 &gt;</span>
                        <div>
                            <p>Duis ac ultricies augue, ut egestas turpis. Nulla sagittis ornare leo eu aliquam. Vestibulum eget tincidunt lectus. Praesent tellus nunc, sollicitudin ac vehicula a, aliquam at metus. Nulla lobortis mauris sit amet eros viverra tristique. Nullam non mi odio. Phasellus ullamcorper lacus scelerisque, convallis magna sed, rutrum augue. Donec augue ex, venenatis et magna in, posuere ullamcorper est. Quisque et ex vel lectus bibendum feugiat. Ut facilisis sodales tempor. Cras tempus libero ut nisl venenatis molestie.</p>
                        </div>
                    </label>
                </fieldset>
                <fieldset className="fieldset3">
                    <label className={element.checkbox_label}>
                        <input type="checkbox" required {...register("agree3", { required: true })} />
                        <span className="text-blue">[필수] 개인정보 수집동의서 &gt;</span>
                        <div>
                            <p>Duis ac ultricies augue, ut egestas turpis. Nulla sagittis ornare leo eu aliquam. Vestibulum eget tincidunt lectus.</p>
                            <p>Praesent tellus nunc, sollicitudin ac vehicula a, aliquam at metus. Nulla lobortis mauris sit amet eros viverra tristique. Nullam non mi odio. Phasellus ullamcorper lacus scelerisque, convallis magna sed, rutrum augue.</p>
                            <p>Donec augue ex, venenatis et magna in, posuere ullamcorper est. Quisque et ex vel lectus bibendum feugiat. Ut facilisis sodales tempor. Cras tempus libero ut nisl venenatis molestie.</p>
                        </div>
                    </label>
                </fieldset>
            </div>
            <div className="option_checkbox">
                <h6>선택 동의 항목</h6>
                <fieldset className="fieldset4">
                    <label className={element.checkbox_label}>
                        <input type="checkbox" {...register("privacy_agree")} />
                        <span className="text-blue">[선택] 개인정보 수집 동의서 &gt;</span>
                        <div>
                            <p>Duis ac ultricies augue, ut egestas turpis. Nulla sagittis ornare leo eu aliquam. Vestibulum eget tincidunt lectus. Praesent tellus nunc, sollicitudin ac vehicula a, aliquam at metus. Nulla lobortis mauris sit amet eros viverra tristique. Nullam non mi odio. Phasellus ullamcorper lacus scelerisque, convallis magna sed, rutrum augue. Donec augue ex, venenatis et magna in, posuere ullamcorper est. Quisque et ex vel lectus bibendum feugiat. Ut facilisis sodales tempor. Cras tempus libero ut nisl venenatis molestie.</p>
                        </div>
                    </label>
                </fieldset>
                <fieldset className="fieldset4">
                    <label className={element.checkbox_label}>
                        <input type="checkbox" {...register("location_agree")} />
                        <span className="text-blue">[선택] 위치기반 서비스 이용약관 &gt;</span>
                        <div>
                            <p>Duis ac ultricies augue, ut egestas turpis. Nulla sagittis ornare leo eu aliquam. Vestibulum eget tincidunt lectus. Praesent tellus nunc, sollicitudin ac vehicula a, aliquam at metus. Nulla lobortis mauris sit amet eros viverra tristique. Nullam non mi odio. Phasellus ullamcorper lacus scelerisque, convallis magna sed, rutrum augue. Donec augue ex, venenatis et magna in, posuere ullamcorper est. Quisque et ex vel lectus bibendum feugiat. Ut facilisis sodales tempor. Cras tempus libero ut nisl venenatis molestie.</p>

                        </div>
                    </label>
                </fieldset>
            </div>
        </div>
    );
};

export const SignUpStep2 = ({ register, setValue, watch, errors, touchedFields }) => {
    const phone1 = watch("phone1");
    const phone2 = watch("phone2");
    const phone3 = watch("phone3");

    useEffect(() => {
        if (phone1 && phone2 && phone3) {
            setValue("user_phone", `${phone1}-${phone2}-${phone3}`);
        }
    }, [phone1, phone2, phone3, setValue]);

    return (
        <div className="signup_step signup_step2">
            <fieldset className="fieldset1">
                <label className="fieldset_tit">아이디</label>
                <input
                    type="text"
                    placeholder="6~20자 영문, 숫자"
                    {...register("user_id", {
                        required: "아이디는 필수입니다",
                        minLength: {
                          value: 5,
                          message: "영문으로 시작하는 6~20자 영문(소문자), 숫자만 사용 가능합니다.",
                        },
                        maxLength: {
                          value: 20,
                          message: "영문으로 시작하는 6~20자 영문(소문자), 숫자만 사용 가능합니다.",
                        },
                    })}
                />
                {touchedFields.user_id && errors.user_id && <p className="error_message">{errors.user_id.message}</p>}
            </fieldset>

            <fieldset className="fieldset2">
                <label className="fieldset_tit">비밀번호</label>
                <input
                    type="password"
                    placeholder="8~32자의 영문, 숫자 포함"
                    {...register("user_pw", {
                        required: "비밀번호는 필수입니다",
                        pattern: {
                            value: /(?=.*\d)(?=.*[a-z]).{8,32}/,
                            message: "비밀번호는 소문자, 숫자를 포함해야 합니다",
                        },
                    })}
                />
                {touchedFields.user_pw && errors.user_pw && <p className="error_message">{errors.user_pw.message}</p>}
            </fieldset>

            <fieldset className="fieldset2">
                <label className="fieldset_tit">비밀번호 확인</label>
                <input
                    type="password"
                    placeholder="비밀번호 재입력"
                    {...register("confirmPW", {
                        required: "비밀번호 확인은 필수입니다",
                        validate: (val) => val === watch("user_pw") || "비밀번호가 일치하지 않습니다",
                    })}
                />
                {touchedFields.confirmPW && errors.confirmPW && <p className="error_message">{errors.confirmPW.message}</p>}
            </fieldset>

            <fieldset className="fieldset3">
                <label className="fieldset_tit">이름</label>
                <input type="text" {...register("user_name", { required: "이름을 입력하세요" })} />
                {touchedFields.user_name && errors.user_name && <p className="error_message">{errors.user_name.message}</p>}
            </fieldset>

            <fieldset className="fieldset4">
                <label className="fieldset_tit">전화번호</label>
                <div className="d-flex align-items-center">
                    <input type="tel" maxLength="3" placeholder="010" {...register("phone1", { required: true })} />
                    <span>-</span>
                    <input type="tel" maxLength="4" placeholder="1234" {...register("phone2", { required: true })} />
                    <span>-</span>
                    <input type="tel" maxLength="4" placeholder="5678" {...register("phone3", { required: true })} />
                    <input type="hidden" {...register("user_phone")} />
                    <StyledBtn
                        padding = {["0", "1.25"]}
                        color = "var(--trip-black)"
                        fontSize = "var(--small-text)"
                        background = "var(--trip-gray1)"
                        onClick={() => alert("전화번호 인증 기능은 개발 중입니다.")}
                    >인증하기</StyledBtn>
                </div>
            </fieldset>

            <fieldset className="fieldset5">
                <label className="fieldset_tit">이메일</label>
                <div className="d-flex align-items-center">
                    <input type="email" placeholder="example@email.com" {...register("user_email", { required: true })} />
                    <StyledBtn
                        padding = {["0", "1.25"]}
                        color = "var(--trip-black)"
                        fontSize = "var(--small-text)"
                        background = "var(--trip-gray1)"
                        onClick={() => alert("이메일 인증 기능은 개발 중입니다.")}
                    >인증하기</StyledBtn>
                </div>
            </fieldset>

            <fieldset className="fieldset6">
                <label className="fieldset_tit">닉네임</label>
                <input type="text" {...register("user_nickname", { required: true })} />
            </fieldset>

            <fieldset className="fieldset7">
                <label className={element.checkbox_label}>
                    <input type="checkbox" {...register("marketing_agree")} />
                    <span className="text-blue">SMS, 이메일로 상품 및 이벤트 정보를 받겠습니다.(선택)</span>
                </label>
            </fieldset>
            <fieldset className="fieldset8">
                <label className={element.checkbox_label}>
                    <input type="checkbox" />
                    <span className="text-blue">14세 미만입니다.</span>
                </label>
            </fieldset>
        </div>
    );
};

export default SignUpStep1;