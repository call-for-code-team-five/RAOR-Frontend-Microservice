import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import ChartSection from "./charts/ChartSection";
import styles from "./Dashboard.module.css";
import KPISection from "./KpiCards";

class Dashboard extends Component {
  render() {
    return (
      <div className={styles.dashboardpage}>
        <Header view="MapView" viewlocation="/Mapview" />
        <div className={styles.contentarea}>
          <KPISection />
          <ChartSection />
        </div>
      </div>
    );
  }
}

export default Dashboard;
