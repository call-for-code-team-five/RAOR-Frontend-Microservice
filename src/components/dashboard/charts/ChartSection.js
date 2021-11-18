import React, { Component } from "react";
import styles from "./charts.module.css";
import TrendAnalysis from "./TrendAnalysis";
import PlantsbyIncidents from "./plantsbyIncidents";
import IncidentsType from "./incidentsType";
import CurrentIncidentReport from "./CurrentIncidentReport";

class ChartSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.detailsContainer}>
        <TrendAnalysis />
        <PlantsbyIncidents />
        <IncidentsType />
        <CurrentIncidentReport />
      </div>
    );
  }
}

export default ChartSection;
