import React, { Component } from "react";
import { Card } from "react-bootstrap";
import styles from "./charts.module.css";
import c3 from "c3";
import "c3/c3.css";

class TrendAnalysis extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {


    c3.generate({
         bindto: "#materialChemicalAnalysis",
         data: {
      columns: [
        ['lost hours', 30, 20, 50, 40, 60, 50],
        ['incident_count', 200, 130, 90, 240, 130, 220],
    ],
    type: 'bar',
    types: {
      incident_count: 'line',
    },
   
  },
  axis: {
      y: {
          label: 'lost hours'
      },
    x: {
      type: "categories",
      categories: ['2015','2016','2017','2018','2019','2020'],
    },
  },
  
  
    });
  };
  render() {
    return (
      <div>
        <div className={styles.detailscard}>
          <Card.Body>
            <Card.Title className={styles.detailscardtitle}>Trend Analysis</Card.Title>
            <div id="materialChemicalAnalysis"></div>
          </Card.Body>
        </div>
      </div>
    );
  }
}

export default TrendAnalysis;
