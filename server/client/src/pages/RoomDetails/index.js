import React, { useState, useEffect } from "react";
import RoomsBanner from "../Room/RoomsBanner";
import hotelServer from "../../services";
import "./roomDetails.css";
function RoomInfo() {
  const [roomInfoData, setRoomInfoData] = useState([]);
  async function loadFeaturedRooms() {
    const result = await hotelServer.get(`/rooms`);
    setRoomInfoData(result.data);
    console.log(data);
  }
  useEffect(function () {
    loadFeaturedRooms();
  }, []);
  //   function listRoomInfo() {
  //     roomData;
  //   }
  return (
    <>
      <RoomsBanner />
      <div className="container">
        <div className="infoContainer">
          <div className="imageWrapper">
            <img
              className="image"
              src="https://shubhamd99.github.io/react-hotel-booking-app/static/media/details-2.50c23e62.jpeg"
              alt="double basic"
            ></img>
            <img
              className="image"
              src="https://shubhamd99.github.io/react-hotel-booking-app/static/media/details-3.7345b9f6.jpeg"
              alt="double basic"
            ></img>
            <img
              className="image"
              src="https://shubhamd99.github.io/react-hotel-booking-app/static/media/details-4.7569a316.jpeg"
              alt="double basic"
            ></img>
          </div>
          <div className="detailsWrapper">
            <div className="details">
              <h3>Details</h3>
              <p>
                Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed
                pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct
                trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo
                santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch
                stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal
                retro cloud bread bushwick semiotics before they sold out sartorial literally
                mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth
                trust fund cray.
              </p>
            </div>
            <div className="info">
              <h3>Info</h3>
              <h6>Price : ₹ 600</h6>
              <h6>Max Capacity : 2 People</h6>
              <h6>Wifi Included </h6>
              <h6>Breakfast Included </h6>
            </div>
          </div>
          <div>
            <h6>Extras</h6>
            <div className="extras">
              <p>- Plush pillows and breathable bed linens</p>
              <p>- Soft, oversized bath towels</p>
              <p>- Full-sized, pH-balanced toiletrie</p>
              <p>- Complimentary refreshment</p>
              <p>- Adequate safety/security</p>
              <p>- Internet</p>
              <p>- Comfortable beds</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default RoomInfo;
