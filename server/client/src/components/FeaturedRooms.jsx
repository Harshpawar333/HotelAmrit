import React, { Component, useState, useEffect } from "react";
import Title from "./Title";

function FeaturedRooms({ roomData }) {
  function listRooms() {
    return roomData.map(function (room) {
      return (
        <div className="room">
          <div className="img-container">
            <img src={room.imageUrl} alt="single room" />
            <div className="price-top">
              <h6>${room.price}</h6>
              <p>per night</p>
            </div>
            <a className="btn-primary room-link" href="#/rooms/double-deluxe">
              features
            </a>
          </div>
          <p className="room-info">{room.name}</p>
        </div>
      );
    });
  }
  return (
    <div className="featured-rooms">
      <div className="section-title">
        <h4>featured rooms</h4>
      </div>
      <div className="featured-rooms-center">{listRooms()}</div>
    </div>
  );
}

export default FeaturedRooms;
