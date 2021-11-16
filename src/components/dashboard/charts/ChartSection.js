import React, { Component } from "react";
import styles from "./charts.module.css";
import Chart1 from "./Chart1";
import Chart2 from "./Chart2";
import Chart3 from "./Chart3";
import Chart4 from "./Chart4";

class ChartSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.detailsContainer}>
        <Chart1 />
        <Chart2 />
        <Chart3 />
        <Chart4 />
      </div>
    );
  }
}

export default ChartSection;
