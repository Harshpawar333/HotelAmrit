import React from "react";
import Select from "react-select";
import { TwoThumbInputRange } from "react-two-thumb-input-range";
import { ROOM_TYPE, GUEST_OPTIONS } from "../constants";
import "./room.scss";

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
  const onValueChange = values => {
    setValue(values);
  };

  return (
    <div className="filter-container">
      <div className="section-title">
        <h4>Search rooms</h4>
        <div></div>
      </div>
      <div className="selectWrapper">
        <div className="filters">
          <label className="filterLabel">Room Type</label>
          <Select
            placeholder="select Room Type"
            options={ROOM_TYPE}
            value={selectedRoomType}
            onChange={selected => {
              setSelectedRoomType(selected);
            }}
          />
        </div>
        <div className="filters">
          <label className="filterLabel">Guests</label>
          <Select
            placeholder="select Number of guests"
            options={GUEST_OPTIONS}
            value={selectedNumGuest}
            onChange={selected => {
              setSelectedNumGuest(selected);
            }}
          />
        </div>
        <div className="filters">
          <label className="filterLabel">
            Room Price ({value[0]}₹ - {value[1]}₹)
          </label>
          <div className="slider">
            <TwoThumbInputRange onChange={onValueChange} values={value} min={100} max={3000} />
          </div>
        </div>
        <div className="filters checkboxfilters">
          <div className="breakfastWrap">
            <input
              type="checkbox"
              placeholder="breakfast"
              checked={isBreakFastChecked}
              onClick={() => setIsBreakFastChecked(!isBreakFastChecked)}
            />
            <label>Breakfast</label>
          </div>
          <div>
            <input
              type="checkbox"
              placeholder="wifi"
              checked={isWifiChecked}
              onClick={() => setIsWifiChecked(!isWifiChecked)}
            />
            <label>WiFi</label>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RoomFilter;
