import React, { useState, useEffect } from "react";
import Loading from "../../components/Loading";
import RoomsBanner from "./RoomsBanner";
import FeaturedRooms from "../../components/FeaturedRooms";
import RoomFilter from "../../components/RoomFilter";
import hotelServer from "../../services";

const RoomPage = ({}) => {
  const [loading, setLoading] = useState(true);
  const [defaultRoomData, setDefaultRoomData] = useState([]);
  const [roomData, setRoomData] = useState([]);
  const [selectedRoomType, setSelectedRoomType] = useState("All");
  const [selectedNumGuest, setSelectedNumGuest] = useState({ value: "1", label: "1" });
  const [isBreakFastChecked, setIsBreakFastChecked] = useState(false);
  const [isWifiChecked, setIsWifiChecked] = useState(false);
  const [value, setValue] = useState([100, 2000]);

  // breakfastIncluded ,
  // wifiIncluded
  async function loadFeaturedRooms() {
    try {
      const result = await hotelServer.get(`/rooms`);
      if (result && result.data) {
        setDefaultRoomData(result.data);
        setRoomData(result.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(function () {
    loadFeaturedRooms();
  }, []);

  useEffect(() => {
    // filter data
    // room Type => single, double, deluxe,
    // numOfGuest => 1,2,3
    // breakfastIncluded => true / false
    // wifi Allowed => true , false
    // min price first index of array value[0]
    //max price value[1]
    let newRoomData = defaultRoomData.filter(function (data) {
      return (
        data.type === selectedRoomType.value ||
        (selectedRoomType.value === "All" &&
          data.numOfGuest >= Number(selectedNumGuest.value) &&
          // data.breakfastIncluded === isBreakFastChecked &&
          // data.wifiIncluded === isWifiChecked &&
          value[0] < data.price &&
          data.price < value[1])
      );
    });
    if (isBreakFastChecked) {
      newRoomData = newRoomData.filter(function (data) {
        return data.breakfastIncluded;
      });
    }
    if (isWifiChecked) {
      newRoomData = newRoomData.filter(function (data) {
        return data.wifiIncluded;
      });
    }
    setRoomData(newRoomData);
  }, [selectedRoomType, selectedNumGuest, isBreakFastChecked, isWifiChecked, value]);

  // 2000ms 2s
  setTimeout(function () {
    setLoading(false);
  }, 500);
  if (loading) {
    return <Loading />;
  }
  // set filters here and pass it to featured rooms

  return (
    <>
      <RoomsBanner />
      <RoomFilter
        selectedRoomType={selectedRoomType}
        setSelectedRoomType={setSelectedRoomType}
        selectedNumGuest={selectedNumGuest}
        setSelectedNumGuest={setSelectedNumGuest}
        isBreakFastChecked={isBreakFastChecked}
        setIsBreakFastChecked={setIsBreakFastChecked}
        isWifiChecked={isWifiChecked}
        setIsWifiChecked={setIsWifiChecked}
        value={value}
        setValue={setValue}
      />
      <FeaturedRooms roomData={roomData} />
    </>
  );
};

export default RoomPage;
