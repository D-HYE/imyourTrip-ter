import PickAirplane from "./PickAirplane";

import hyodata from "../../data/hyodata.json"

export default function PlanMaker() {
    return (
        <div>
            <PickAirplane hyodata={hyodata}/>     
        </div>
    );
}