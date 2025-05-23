import { useLocation } from 'react-router-dom';

import Header from './layouts/Header';
import MainFooter, { SubFooter } from './layouts/Footer';
import Contents from './layouts/Contents';


export default function Tripter(){
    const location = useLocation();
    const isRoot = location.pathname === '/';

    return(
        <div className="pageWrap">
            <Header/>
            <Contents/>
            {isRoot ? <MainFooter/> : <SubFooter />}  
            {/* 푸터를 메인 푸터랑 서브 푸터일 때 부르는 차이를 줘야 할 것 같은디 */}
        </div>
    );
};