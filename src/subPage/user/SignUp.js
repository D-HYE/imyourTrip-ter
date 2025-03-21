import element from "../../scss/elements.module.scss"

const SignUp = () => {
    return (
        <div>
            <div className="signup_area container_m">

                <div className="signup_tab">
                    <ul className="d-flex justify-content-center gap-2">
                        <li>약관동의</li>
                        <li>정보입력</li>
                    </ul>
                </div>
                <form action="#none" method="post" onsubmit="validateForm(event)">
                    <div className="signup_step signup_step1">
                        <input type="hidden" name="signup_step" value="1" />
                        <h5>
                            <label className={element.checkbox_label}>
                                <input type="checkbox" id="agreeAll" />
                                <span>약관 전체 동의</span>
                            </label>
                        </h5>
                        <div className="require_checkbox">
                            <h6>필수 동의 항목</h6>
                            <fieldset className="fieldset1">
                                <label className={element.checkbox_label}>
                                    <input type="checkbox" required />
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
                                    <input type="checkbox" required />
                                    <span className="text-blue">[필수] 전자 금융 거래 &gt;</span>
                                    <div>
                                        <p>Duis ac ultricies augue, ut egestas turpis. Nulla sagittis ornare leo eu aliquam. Vestibulum eget tincidunt lectus. Praesent tellus nunc, sollicitudin ac vehicula a, aliquam at metus. Nulla lobortis mauris sit amet eros viverra tristique. Nullam non mi odio. Phasellus ullamcorper lacus scelerisque, convallis magna sed, rutrum augue. Donec augue ex, venenatis et magna in, posuere ullamcorper est. Quisque et ex vel lectus bibendum feugiat. Ut facilisis sodales tempor. Cras tempus libero ut nisl venenatis molestie.</p>
                                    </div>
                                </label>
                            </fieldset>
                            <fieldset className="fieldset3">
                                <label className={element.checkbox_label}>
                                    <input type="checkbox" required/>
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
                                    <input type="checkbox" name="marketingAgree" />
                                    <span className="text-blue">[선택] 개인정보 수집 동의서 &gt;</span>
                                    <div>
                                        <p>Duis ac ultricies augue, ut egestas turpis. Nulla sagittis ornare leo eu aliquam. Vestibulum eget tincidunt lectus. Praesent tellus nunc, sollicitudin ac vehicula a, aliquam at metus. Nulla lobortis mauris sit amet eros viverra tristique. Nullam non mi odio. Phasellus ullamcorper lacus scelerisque, convallis magna sed, rutrum augue. Donec augue ex, venenatis et magna in, posuere ullamcorper est. Quisque et ex vel lectus bibendum feugiat. Ut facilisis sodales tempor. Cras tempus libero ut nisl venenatis molestie.</p>
                                    </div>
                                </label>
                            </fieldset>
                            <fieldset className="fieldset4">
                                <label className={element.checkbox_label}>
                                    <input type="checkbox" name="locationAgree" />
                                    <span className="text-blue">[선택] 위치기반 서비스 이용약관 &gt;</span>
                                    <div>
                                        <p>Duis ac ultricies augue, ut egestas turpis. Nulla sagittis ornare leo eu aliquam. Vestibulum eget tincidunt lectus. Praesent tellus nunc, sollicitudin ac vehicula a, aliquam at metus. Nulla lobortis mauris sit amet eros viverra tristique. Nullam non mi odio. Phasellus ullamcorper lacus scelerisque, convallis magna sed, rutrum augue. Donec augue ex, venenatis et magna in, posuere ullamcorper est. Quisque et ex vel lectus bibendum feugiat. Ut facilisis sodales tempor. Cras tempus libero ut nisl venenatis molestie.</p>
                                        
                                    </div>
                                </label>
                            </fieldset>
                        </div>
                    </div>
                    <div className="btn_wrap">
                        <button type="submit" className="submit_btn">다음 단계</button>
                    </div>
                    <div className="signup_step signup_step2">
                        <input type="hidden" name="signup_step" value="2"/>
                        <fieldset className="fieldset1">
                            <label className="fieldset_tit">아이디</label>
                            <input type="text" name="userID" required minlength="5" maxlength="20" placeholder="6~20자 영문, 숫자"/> 
                        </fieldset>
                        <fieldset className="fieldset2">
                            <label className="fieldset_tit">비밀번호 </label>
                            <input type="password" name="userPW" required minlength="8" maxlength="32" pattern="(?=.*\d)(?=.*[a-z]).{8,32}"
                            title="비밀번호는 8~32자이며, 소문자, 숫자를 포함해야 합니다." placeholder="8~12자의 영문, 숫자, 특수문자 중 2가지 이상"/>
                        </fieldset>
                        <fieldset className="fieldset2">
                            <label for="confirm_password" className="fieldset_tit">비밀번호 확인</label>
                            <input type="password" id="confirm_password" required minlength="8" maxlength="32" placeholder="8~12자의 영문, 숫자, 특수문자 중 2가지 이상" />
                        </fieldset>
                        <fieldset className="fieldset3">
                            <label className="fieldset_tit">이름</label>
                            <input type="text" name="userName" required maxlength="18"/> 
                        </fieldset>
                        <fieldset className="fieldset4">
                            <label for="phone1" className="fieldset_tit">전화번호</label>
                            <div className="d-flex align-items-center">
                                <input type="tel" id="phone1" pattern="\d{2,3}" maxlength="3" required placeholder="010"/>
                                <span>-</span>
                                <input type="tel" id="phone2" pattern="\d{3,4}" maxlength="4" required placeholder="1234"/>
                                <span>-</span>
                                <input type="tel" id="phone3" pattern="\d{4}" maxlength="4" required placeholder="5678"/>
                                <input type="hidden" id="phone" name="userPhone"/>
                                <button type="button" onclick="alert('전화번호 인증 기능은 개발 중입니다.')">인증하기</button>
                            </div>
                        </fieldset>
                        <fieldset className="fieldset5">
                            <label className="fieldset_tit">이메일</label>
                            <div className="d-flex align-items-center">
                                <input type="email" name="userEmail" required maxlength="191" placeholder="example@email.com"/>
                                <button type="button" onclick="alert('이메일 인증 기능은 개발 중입니다.')">인증하기</button>
                            </div>
                        </fieldset>
                        <fieldset className="fieldset6">
                            <label className="fieldset_tit">닉네임</label>
                            <input type="text" name="userNickname" required maxlength="30"/>
                        </fieldset>
                        <fieldset className="fieldset7">
                            <label className={element.checkbox_label}>
                                <input type="checkbox"/>
                                <span className="text-blue">SMS, 이메일로 상품 및 이벤트 정보를 받겠습니다.(선택)</span>
                            </label>
                        </fieldset>
                        <fieldset className="fieldset8">
                            <label className={element.checkbox_label}>
                                <input type="checkbox"/>
                                <span className="text-blue">14세 미만입니다.</span>
                            </label>
                        </fieldset>
                    </div>
                    <button type="submit" className="submit_btn" id="submit_btn">가입하기</button>

                </form>
            </div>
        </div>
    );
};

export default SignUp;