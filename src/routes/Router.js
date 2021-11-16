import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import LiveStreamMap from "../components/map/LiveStreamMap";
import Dashboard from "../components/dashboard/Dashboard";
import VideoComponent from "../components/map/VideoComponent";

const Router = () => {
  return (
    <HashRouter forceRefresh={true}>
      <Routes>
        <Route path="/" element={<Dashboard/>} exact />
        <Route path="/Dashboard" element={<Dashboard/>} exact />
        <Route
          path="/Mapview"
          element={<LiveStreamMap/>}
          exact
        />
        <Route
          path="/VideoView"
          element={<VideoComponent/>}
          exact
        />
      </Routes>
    </HashRouter>
  );
};

export default Router;
