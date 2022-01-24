import React, { useState, useEffect } from "react";
import RoomsBanner from "../Room/RoomsBanner";
import hotelServer from "../../services";
import "./roomDetails.css";
import { components } from "react-select";

function RoomInfo(props) {
  const [roomDetails, setRoomDetails] = useState("");

  async function loadRoomDetails() {
    const result = await hotelServer.post("/rooms/details", { id: props.match.params.id });
    setRoomDetails(result.data);
  }

  useEffect(function () {
    loadRoomDetails();
  }, []);

  function loadParticularRoomDetails() {
    // function showRoomsExtraDetails() {
    //   return roomDetails.Extras.map(function (data) {
    //     return <li>-{data}</li>;
    //   });
    // }
    // function loadExtraImages() {
    //   return roomDetails.images.map(function (imageUrl) {
    //     return <img className="image" src={imageUrl} alt="double basic"></img>;
    //   });
    // }
    return (
      <>
        <div className="imageWrapper">
          {roomDetails.images.map(function (imageUrl) {
            return <img className="image" src={imageUrl} alt="double basic"></img>;
          })}
        </div>
        <div className="detailsWrapper">
          <div className="details">
            <h3>Details</h3>
            <p>{roomDetails.moreDetails}</p>
          </div>
          <div className="info">
            <h3>Info</h3>
            <h6>Price : ₹{roomDetails.price}</h6>
            <h6>Max Capacity : {roomDetails.numOfGuest} People</h6>
            {roomDetails.wifiIncluded && <h6>Wifi Included </h6>}
            {roomDetails.breakfastIncluded && <h6>Breakfast Included </h6>}
          </div>
        </div>
        <div>
          <h6>Extras</h6>
          <div className="extras">
            {roomDetails.extras.map(function (data) {
              return <li>-{data}</li>;
            })}
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <RoomsBanner />

      <div className="container">
        <div className="infoContainer">
          <div>{roomDetails && loadParticularRoomDetails()}</div>
        </div>
      </div>
    </>
  );
}
export default RoomInfo;
