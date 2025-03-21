import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <section className="userLogin">
            <div className="form_area container_m">
                <h3>안녕하세요 여행자님, <span>트립터와 함께 떠나볼까요?</span></h3>
                <form action="/user/login/loginRegister.php" method="post">
                <fieldset className="fieldset1">
                    <label> </label>
                    <input type="text" name="userID" required placeholder="아이디" minlength="5" maxlength="20"/> 
                </fieldset>

                <fieldset className="fieldset2">
                    <label> </label>
                    <input type="password" name="userPW" required minlength="8" placeholder="비밀번호" maxlength="32" pattern="(?=.*\d)(?=.*[a-z]).{8,32}" title="비밀번호는 8~32자이며, 소문자, 숫자를 포함해야 합니다."/>
                </fieldset>
                <div className="findInfo">
                    <a href="#none">아이디 / 비밀번호 찾기</a>
                </div>
                <div className="btn_wrap">
                    <button type="submit" className="submit_btn" id="submit_btn">로그인</button>
                    <Link to="/user/signUp">회원가입</Link>
                </div>
                </form>
            </div>
            <div className="sns_login container_m">
                <h4>SNS 간편 로그인</h4>
                <ul className="d-flex">
                    <li id="naver">
                        <a href="https://nid.naver.com/nidlogin.login?mode=form&url=https://www.naver.com/">
                            <img src="https://trip-ter.vercel.app/img/logo/btn_naver.svg" alt=""/>
                        </a>
                    </li>
                    <li id="kakao">
                        <a href="https://accounts.kakao.com/login/?continue=https%3A%2F%2Fsharer.kakao.com%2Fpicker%2Flink%3Fapp_key%3D4e0f02e43248fed6c5850431ea527a61%26short_key%3D21037dbe-09a9-4ce9-ab52-668e3ce85ff9#login">
                        <img src="https://trip-ter.vercel.app/img/logo/btn_kakao.svg" alt=""/>
                        </a>
                    </li>
                    <li id="facebook">
                        <a href="https://www.facebook.com/?locale=ko_KR">
                            <img src="https://trip-ter.vercel.app/img/logo/btn_facebook.svg" alt=""/>
                        </a>
                    </li>
                    <li id="google">
                        <a href="https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fwww.google.com%2Fsearch%3Fq%3D%25EA%25B5%25AC%25EA%25B8%2580%26oq%3D%25EA%25B5%25AC%25EA%25B8%2580%26gs_lcrp%3DEgZjaHJvbWUyBggAEEUYOdIBBzQyNGowajGoAgCwAgA%26sourceid%3Dchrome%26ie%3DUTF-8%26sei%3DF8nHZ6b2FeGPvr0P_eqByAo&ec=GAZAAQ&hl=ko&ifkv=ASSHykpb5b2-iZDmyWCclyinka_eSS3zaRNJoUFq_7PSfC5yQT0uBiOSFLzk5xAXPcoZIO_UnYan&passive=true&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-1677412365%3A1741146394235713&ddm=1">
                            <img src="https://trip-ter.vercel.app/img/logo/btn_google.svg" alt=""/>
                        </a>
                    </li>
                    <li id="apple">
                        <a href="#none">
                            <img src="https://trip-ter.vercel.app/img/logo/btn_apple.svg" alt=""/>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
}