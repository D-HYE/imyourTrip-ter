import MyFeelter from "./MyFeelter";
import PlanMaker from "./PlanMaker";

export default function Content ({ activeTab }) {
    let content;

    switch (activeTab) {
        case 'myFeelter':
            content = <MyFeelter/>;
            break;
        case 'planMaker':
            content = <PlanMaker/>;
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
