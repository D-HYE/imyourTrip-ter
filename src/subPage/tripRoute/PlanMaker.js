import React, { useState } from "react";
import { Link } from "react-router-dom";

import PickAirplane from "./PickAirplane";
import PickHotel from "./PickHotel";
import Wishlist from "../user/Wishlist";
import PlanMakerForm, {PlanMakerInfo} from "./PlanMakerForm";
import { CommingSoon } from "../../components/util";

import { TabMenu } from "../../components/util";
import hyodata from "../../data/hyodata.json"; // JSON 파일을 import로 가져오기


export default function PlanMaker() { 
    const [formState, setFormState] = useState({
      tripDate: { start: null, end: null },
      departureCity: '',
      arrivalCity: '',
      showForm: true,
      planConfirmed: false,
      activeTab: '',
    });
    //여행일
    const DateChange = (tripDate) => {
      setFormState(prev => ({ ...prev, tripDate }));
    };
    //여행지
    const CitySearch = (dep, arr) => {
      setFormState(prev => ({
        ...prev,
        departureCity: dep,
        arrivalCity: arr
      }));
    };
    //인원수  
    const [count, setCount] = useState(1);
    //폼 완료 시
    const PlanSubmit = () => {
      setFormState(prev => ({
        ...prev,
        showForm: false,
        planConfirmed: true,
        activeTab: '항공권'
      }));
    };
    //수정 버튼
    const Edit = () => {
      setFormState(prev => ({
        ...prev,
        showForm: true,
        planConfirmed: false
      }));
    }; 
  

  return (
    <>
      <Wishlist
        tripDate={formState.tripDate}
        count={formState.count}
      />
      <div className="d-flex flex-column gap-5">
      {formState.showForm ? (
        <PlanMakerForm
          tripDate={formState.tripDate}
          setTripDate={DateChange}
          count={count}
          setCount={setCount}
          onSearch={CitySearch}
          arrivalCity={formState.arrivalCity}
          onSubmit={PlanSubmit}
        />
      ) : (
        <PlanMakerInfo
          departureCity={formState.departureCity}
          arrivalCity={formState.arrivalCity}
          tripDate={formState.tripDate}
          count={count}
          onEdit={Edit}
        />
      )}
        <div className="d-flex flex-column gap-2">
        { formState.showForm &&
        <span style={{fontSize:"var(--semismall-text)", fontWeight:"500"}} >계획에 필요한 상품을 추가해보세요</span>
        } 
        <TabMenu
          activeTab={formState.activeTab}
          setActiveTab={(tab) =>
            setFormState(prev => ({ ...prev, activeTab: tab }))
          }
        />
        </div>
      </div>
      <div className="pageBox" style={{borderBottom:"3px solid var(--trip-blue)"}}>
        {formState.planConfirmed ? (
          formState.activeTab === "항공권" ? (
            <PickAirplane
              hyodata={hyodata}
              departureCity={formState.departureCity}
              arrivalCity={formState.arrivalCity}
            />
          ) : formState.activeTab === "숙박" ? (
            <PickHotel />
          ) : (
            <CommingSoon />
          )
        ) : null}
      </div>
    </>
  );
}
