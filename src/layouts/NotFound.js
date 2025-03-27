
import img404 from "../img/error_bg.svg"

export default function NotFound() {
    return (
        <main className="subMain">
            <div className="container fontbasic" 
              style={{ textAlign: "center", padding: "50px" }}>
                        <h1>!</h1>
                        <h2>404 ERROR</h2>
                        <p>페이지를 찾을 수 없습니다</p>
                        

                    <div className="button" >
                    <button onClick={() => window.history.back()} className="button1">이전 페이지</button>
                            <button onClick={() => (window.location.href = "/") } className="button2">메인으로</button>
                        
                    </div>
                    <img src={img404} alt="404 Error" />
            </div>
        </main>
    );
}