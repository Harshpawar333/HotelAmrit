import express from "express";
const hotelRoutes = express.Router();
import { getRoomsData, getRoomDetails } from "../controller/hotelController";

hotelRoutes.get("/rooms", getRoomsData);
hotelRoutes.post("/rooms/details", getRoomDetails);

export default hotelRoutes;
