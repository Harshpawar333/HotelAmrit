import React, { useState, useEffect } from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
import Cover from "../components/Cover";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";
import hotelServer from "../services";
import ChildComponent from "./ChildComponent";
import Button from "./Button";

const Home = () => {
  //if initial data is []
  let initialData = [];
  // if localstorage have roomdata then set it as a intial value
  if (!_.isEmpty(localStorage.getItem("localRoomData"))) {
    initialData = JSON.parse(localStorage.getItem("localRoomData"));
  }
  const [defaultRoomData, setDefaultRoomData] = useState(initialData);

  async function loadFeaturedRooms() {
    try {
      const result = await hotelServer.get(`/rooms`);
      if (result && result.data) {
        setDefaultRoomData(result.data);
        localStorage.setItem("localRoomData", JSON.stringify(result.data));
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(function () {
    //if localRoomdata is empty then only do api call
    if (_.isEmpty(localStorage.getItem("localRoomData"))) {
      loadFeaturedRooms();
    }
  }, []);

  const arr = [1, 2, 3, 4];

  const renderPattern1 = () => {
    //
    // const newArr = [];

    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j <= i; j++) {
        console.log("*");
      }
      console.log("\n");
      // newArr.push("blank line");
    }
    // return newArr;
  };
  return (
    <>
      <Cover>
        <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $299">
          <p>{sessionStorage.getItem("userInfo")}</p>
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Cover>
      <p>Pattern1</p>
      {renderPattern1()}
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
