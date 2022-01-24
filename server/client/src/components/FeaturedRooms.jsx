import React from "react";

function FeaturedRooms({ isFromHome, roomData }) {
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
            <a className="btn-primary room-link" href="#/roomInfo">
              features
            </a>
          </div>
          <p className="room-info">{room.name}</p>
        </div>
      );
    });
  }
  return (
    <>
      {roomData.length > 0 ? (
        <div className={`${isFromHome && "featured-rooms"}`}>
          {isFromHome && (
            <div className="section-title">
              <h4>featured rooms</h4>
              <div></div>
            </div>
          )}
          <div className="roomslist">
            <div className="roomslist-center">{listRooms()}</div>
          </div>
        </div>
      ) : (
        <div class="empty-search">
          <h3>unfortunately no rooms matched your search parameters</h3>
        </div>
      )}
    </>
  );
}

export default FeaturedRooms;
