import React, { useState } from "react";
import Select from "react-select";
import "./room.css";
import { TwoThumbInputRange } from "react-two-thumb-input-range";

function RoomFilter({
  selectedRoomType,
  setSelectedRoomType,
  selectedNumGuest,
  setSelectedNumGuest,
  isBreakFastChecked,
  setIsBreakFastChecked,
  isWifiChecked,
  setIsWifiChecked,
  value,
  setValue
}) {
  const roomType = [
    { value: "All", label: "All" },
    { value: "single", label: "Single Deluxe" },
    { value: "double", label: "Double Deluxe" },
    { value: "presedential", label: "Presedential" }
  ];
  const guestNumbers = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" }
  ];
  const onValueChange = values => {
    setValue(values);
  };

  return (
    <div className="container">
      <div className="selectWrapper">
        <div className="filters p-4" style={{ width: "500px", padding: "10px" }}>
          <Select
            placeholder="select Room Type"
            options={roomType}
            value={selectedRoomType}
            onChange={selected => {
              setSelectedRoomType(selected);
            }}
          />
        </div>
        <div className="filters p-4" style={{ width: "500px", padding: "10px" }}>
          <Select
            placeholder="select Number of guests"
            options={guestNumbers}
            value={selectedNumGuest}
            onChange={selected => {
              setSelectedNumGuest(selected);
            }}
          />
        </div>
        <div className="filters">
          <div className="col-sm">Price</div>
          <div className="col-sm">
            <TwoThumbInputRange onChange={onValueChange} values={value} min={100} max={3000} />
          </div>
        </div>
        <div className="checkboxwrapper">
          <div>
            <input
              type="checkbox"
              placeholder="breackfast"
              checked={isBreakFastChecked}
              onClick={() => setIsBreakFastChecked(!isBreakFastChecked)}
            />
            Breakfast
          </div>
          <div>
            <input
              type="checkbox"
              placeholder="wifi"
              checked={isWifiChecked}
              onClick={() => setIsWifiChecked(!isWifiChecked)}
            />
            WiFi
          </div>
        </div>
      </div>
    </div>
  );
}
export default RoomFilter;
