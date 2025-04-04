
export default function NotFound() {
    return (
        <main className="subMain page_error">
            <div className="container fontbasic" 
              style={{ textAlign: "center", padding: "50px" }}>
                        <h1>!</h1>
                        <h2>404 ERROR</h2>
                        <p>페이지를 찾을 수 없습니다</p>
                        

                    <div className="button" >
                    <button onClick={() => window.history.back()} className="button1">이전 페이지</button>
                            <button onClick={() => (window.location.href = "/") } className="button2">메인으로</button>
                        
                    </div>
                    <img src="https://d-hye.github.io/source/img/illustrator/error_bg.svg" alt="404 Error" />
            </div>
        </main>
    );
}