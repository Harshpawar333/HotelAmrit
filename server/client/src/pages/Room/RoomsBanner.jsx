import React from "react";
import Cover from "../../components/Cover";
import Banner from "../../components/Banner";
import { Link } from "react-router-dom";

const RoomsBanner = () => {
  return (
    <>
      <Cover coverClass="roomsHero">
        <Banner title="our rooms">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Cover>
    </>
  );
};

export default RoomsBanner;
