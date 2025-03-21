import FindPlan from "./FindPlan";
import FindReview from "./FindReview";
import FindFriend from "./FindFriend";

export default function Content ({ activeTab }) {
    let content;

    switch (activeTab) {
        case 'findPlan':
            content = <FindPlan/>;
            break;
        case 'findReview':
            content = <FindReview/>;
            break;       
        case 'findFriend':
            content = <FindFriend/>;
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
