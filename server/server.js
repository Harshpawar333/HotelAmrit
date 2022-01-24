// require("dotenv").config();
import express from "express";
import cookieParser from "cookie-parser";
import hotelRoutes from "./routes/hotelRoutes";
import path from "path";
import cors from "cors";

const __dirname = path.resolve();

// const connectDB = require("./config/db");
// connectDB();
const PORT = process.env.PORT || 5000;

console.log("Reached here");
const app = express();
app.use(cors({ origin: "*" }));
// this package is used to parse req body
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "*"
  })
);
app.use(express.static(path.join(__dirname, "client/build")));

app.use("/api/hotel", hotelRoutes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

app.listen(PORT, () => {
  console.log("Server started on port", PORT);
});
