import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cover from "../components/Cover";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";
import hotelServer from "../services";
import ChildComponent from "./ChildComponent";
import Button from "./Button";

const Home = () => {
  const [defaultRoomData, setDefaultRoomData] = useState([]);
  async function loadFeaturedRooms() {
    try {
      const result = await hotelServer.get(`/rooms`);
      if (result && result.data) {
        setDefaultRoomData(result.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(function () {
    loadFeaturedRooms();
  }, []);

  return (
    <>
      <Cover>
        <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $299">
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Cover>
      <Services />
      {/* <ChildComponent dynamicClass="red" message="say hi" />
      <ChildComponent dynamicClass="blue" message="say bye" />
      <ChildComponent dynamicClass="black" message="say hi2" />
      <Button text="red button" dynamicClass="red" />
      <Button text="blue button" dynamicClass="blue" />
      <Button text="black button" dynamicClass="black" /> */}
      <FeaturedRooms isFromHome roomData={defaultRoomData} />
    </>
  );
};

export default Home;
