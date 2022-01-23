import React from "react";
import Cover from "../components/Cover";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";
import ChildComponent from "./ChildComponent";
import Button from "./Button";
const Home = () => {
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
      <FeaturedRooms />
    </>
  );
};

export default Home;
