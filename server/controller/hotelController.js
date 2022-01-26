import { roomData } from "./data";
export const getRoomsData = async (req, res) => {
  try {
    res.json(roomData);
  } catch (error) {
    return res.status(200).json({
      status: 400,
      message: error.message ? error.message : "Something went wrong"
    });
  }
};

export const getRoomDetails = async (req, res) => {
  try {
    console.log("id", req.body.id);
    //
    roomData.filter(function (rooms) {
      if (rooms.id === Number(req.body.id)) {
        return res.json(rooms);
      }
    });
  } catch (error) {
    return res.status(200).json({
      status: 400,
      message: error.message ? error.message : "Something went wrong"
    });
  }
};
