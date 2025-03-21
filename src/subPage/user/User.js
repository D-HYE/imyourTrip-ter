import { useParams } from 'react-router-dom';
import Login from "./Login";
import SignUp from "./SignUp";

export default function User() {
    const { page } = useParams();
    const sign = page || "login";
    return (
        <main className='subMain page_login'>
            <section>
                <div class="sectionBanner"></div>
                {sign === "login" ? <Login /> : <SignUp />}
            </section>
        </main>
    );
}
