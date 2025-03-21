import Event1 from "./Event1";
import Event2 from "./Event2";
import Event3 from "./Event3";
import Event4 from "./Event4";

export default function Content ({ activeTab }) {
    let content;

    switch (activeTab) {
        case 'event1':
            content = <Event1/>;
            break;
        case 'event2':
            content = <Event2/>;
            break;       
        case 'event3':
            content = <Event3/>;
            break;       
        case 'event4':
            content = <Event4/>;
            break;       
        default:
            content = <div>선택된 탭이 없습니다.</div>;
            break;
    }

    return (
        <div className="sectionCont">
            {content}
        </div>
    );
}
