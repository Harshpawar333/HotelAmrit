import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import RoomPage from "../pages/Room";
import RoomInfo from "../pages/RoomDetails";
import ErrorPage from "../pages/ErrorPage";
import "../assets/styles/sass/index.scss";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms" component={RoomPage} />
        <Route exact path="/roomInfo" component={RoomInfo} />
        <Route exact path="/bar" component={Home} />
        <Route exact path="/banquet-hall" component={Home} />
        <Route exact path="/contact-us" component={Home} />
        <Route exact path="/location" component={Home} />
        <Route component={ErrorPage} />
      </Switch>
    </>
  );
};

export default App;
