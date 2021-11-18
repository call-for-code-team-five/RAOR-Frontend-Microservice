import React, { Component } from "react";
import styles from "./Mapview.module.css";
import Filters from "../filters/Filters";
import Map from "./Map";
import Header from "../header/Header";



class LiveStreamMap extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <>
        <Header view="DashboardView" viewlocation="/Dashboard" />
        <div className={styles.mapComponent}>
          <Filters />
          <Map center={[-180, 0]} zoom={0} />
        </div>
      </>
    );
  }
}

export default LiveStreamMap;
