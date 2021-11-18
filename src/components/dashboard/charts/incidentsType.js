import React, { Component } from "react";
import { Card } from "react-bootstrap";
import styles from "./charts.module.css";
import c3 from "c3";
import "c3/c3.css";

class incidentsType extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
      c3.generate({
        bindto: "#Analysis",
        size: {
          height: 300,
          width: 400,
        },
        data: {
          columns: [
            ['Fire Outbreak', 30],
            ['Gas leakage', 120],
            ['Electrical sparking', 30],
            ['Equipment Disorientation', 30],
            ["Others", 30],
        ],
          type: "donut",
          labels: true,
        },
        color: {
          pattern: ["#93F0E6", "#FF9A91", "#9C82D4", "#4EBEEB"],
        },
        donut: {
          width: 30,
          title:  " Incident Types",
        },
        legend: {
          show: true,
          position: "right",
        },
      });
    }
  render() {
    return (
      <div>
        <div className={styles.detailscard}>
          <Card.Body >
            <Card.Title className={styles.detailscardtitle}>Incident Types</Card.Title>
            <div className={styles.donutchart}>
            <div id="Analysis"></div>
            </div>
          </Card.Body>
        </div>
      </div>
    );
  }
}

export default incidentsType;
