import { useParams } from 'react-router-dom';
import Login from "./Login";
import SignUp from "./SignUp";

export default function User() {
    const { page } = useParams();
    const defaultpage = page || "login"; // 로그인 유무가 쓰일지

    return (
        <main className='subMain page_login'>
            <section>
                <div className="sectionBanner pc"></div>
                <div className="subContWrap">

                    {defaultpage === "login" ? <Login /> : <SignUp />}
                </div>
            </section>
        </main>
    );
}
