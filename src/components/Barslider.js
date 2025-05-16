import { Range } from "react-range";
import React, { useState } from "react";

const STEP = 30;
const MIN = 0;
const MAX = 1440;

function formatTime(minutes) {
  const h = String(Math.floor(minutes / 60)).padStart(2, "0");
  const m = String(minutes % 60).padStart(2, "0");
  return `${h}:${m}`;
}

export default function TimeRangeSlider() {
  const [values, setValues] = useState([0, 1440]);

  const [start, end] = values;
  const percentStart = ((start - MIN) / (MAX - MIN)) * 100;
  const percentEnd = ((end - MIN) / (MAX - MIN)) * 100;

  return (
    <div className="d-flex flex-column gap-1" style={{ position: 'relative' }}>
      <div style={{paddingTop: ".5rem"}}>{formatTime(start)} ~ {formatTime(end)}</div>
      <Range
        step={STEP}
        min={MIN}
        max={MAX}
        values={values}
        onChange={setValues}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "10px",
              width: "100%",
              background: `linear-gradient(to right, #ccc ${percentStart}%, #0051D3 ${percentStart}%, #0051D3 ${percentEnd}%, #ccc ${percentEnd}%)`,
              borderRadius: "4px",
              position: "relative",
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
          {...props}
            style={{
              ...props.style,
              outline: "none",
              height: "16px",
              width: "16px",
              borderRadius: "50%",
              backgroundColor: "var(--trip-yellow)",
              border: "2px solid var(--trip-blue)",
            }}
          />
          
        )}
      />
    </div>
  );
}
