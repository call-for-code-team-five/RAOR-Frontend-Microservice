import React, { Component } from "react";
import { Card } from "react-bootstrap";
import styles from "./charts.module.css";
import c3 from "c3";
import "c3/c3.css";

class Chart3 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    c3.generate({
      bindto: "#Analysis",

      data: {
        columns: [
          ["data1", 30, 200, 100, 300],
          ["data2", 50, 20, 10, 40],
        ],
        type: "bar",
        colors: {
          data1: "#9C82D4",
          data2: "#FF9A91",
        },
        labels: true,
      },
      bar: {
        width: 20,
      },
      grid: {
        focus: {
          show: false,
        },
      },
      tooltip: {
        grouped: false, // Default true
      },
      axis: {
        rotated: true,
      },
    });
  };
  render() {
    return (
      <div>
        <div className={styles.detailscard}>
          <Card.Body>
            <Card.Title>Chart3</Card.Title>
            <div id="Analysis"></div>
          </Card.Body>
        </div>
      </div>
    );
  }
}

export default Chart3;
