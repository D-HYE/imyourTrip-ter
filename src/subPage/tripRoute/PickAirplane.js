import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PickAirplane = ({ hyodata }) => {
    useEffect(() => {
        console.log(hyodata);
    }, []);

    const airplane = useParams();

    return (
        <div className="plane_list d-flex">
            <div className="plane_left d-flex">
                <div className="d-flex flex-column" id="airplaneArea">

                </div>
            </div>
            <div className="plane_right">
            </div>
        </div>
    );
};

export default PickAirplane;
