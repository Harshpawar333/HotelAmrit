const roomData = [
  {
    name: "Single Deluxe",
    price: 400,
    imageUrl: "https://i.ibb.co/59Q08bV/room-1.jpg",
    description: "single bed",
    type: "single",
    numOfGuest: 1,
    breakfastIncluded: false,
    wifiIncluded: false
  },
  {
    name: "Single Deluxe",
    price: 500,
    imageUrl: "https://i.ibb.co/59Q08bV/room-1.jpg",
    description: "single bed with tv and Ac",
    type: "single",
    numOfGuest: 1,
    breakfastIncluded: false,
    wifiIncluded: true
  },
  {
    name: "Double Deluxe",
    price: 600,
    imageId: 2,
    imageUrl: "https://i.ibb.co/59Q08bV/room-1.jpg",
    description: "double bed",
    type: "double",
    numOfGuest: 2,
    breakfastIncluded: false,
    wifiIncluded: true
  },
  {
    name: "Double Deluxe",
    price: 700,
    imageId: 2,
    imageUrl: "https://i.ibb.co/59Q08bV/room-1.jpg",
    description: "double bed with tv and Ac",
    type: "double",
    numOfGuest: 2,
    breakfastIncluded: false,
    wifiIncluded: true
  },
  {
    name: "Presedential",
    price: 800,
    imageUrl: "https://i.ibb.co/59Q08bV/room-1.jpg",
    description: "double bed with tv and ac also breackfast",
    type: "presedential",
    numOfGuest: 3,
    breakfastIncluded: true,
    wifiIncluded: true
  },
  {
    name: "Presedential",
    price: 1100,
    imageUrl: "https://i.ibb.co/59Q08bV/room-1.jpg",
    description: "double bed with tv and ac also breackfast",
    type: "presedential",
    numOfGuest: 4,
    breakfastIncluded: true,
    wifiIncluded: true
  }
];

const getRoomsData = async (req, res) => {
  try {
    res.json(roomData);
  } catch (error) {
    return res.status(200).json({
      status: 400,
      message: error.message ? error.message : "Something went wrong"
    });
  }
};

module.exports = {
  getRoomsData
};
