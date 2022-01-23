import axios from "axios";
const { API } = require("../config/" + process.env.NODE_ENV);

const hotelServer = axios.create({
  baseURL: API.DOMAIN,
});
export default hotelServer;