import React, { Component } from "react";
import { Card } from "react-bootstrap";
import styles from "./charts.module.css";
import c3 from "c3";
import "c3/c3.css";

class PlantsbyIncidents extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
  
    c3.generate({
      bindto: "#materialAnalysis",

      data: {
                columns: [
                    ['no. of incidents in each plant', 250, 200,150, 100 ,30],
                ],
                type: 'bar'
            },
            bar: {
                width: {
                    ratio: 0.5 // this makes bar width 50% of length between ticks
                }
                // or
                //width: 100 // this makes bar width 100px
            },
            axis: {
              x: {
                type: "categories",
                categories: ['Berri Field','Manifa Field','Rumaila Field','Burgan Field','Ghawar Field'],
              },
              rotated: true,
            },
    });
  };
  render() {
    return (
      <div>
        <div className={styles.detailscard}>
          <Card.Body>
            <Card.Title  className={styles.detailscardtitle}>Top 5 Plants by Incidents</Card.Title>
            <div id="materialAnalysis"></div>
          </Card.Body>
        </div>
      </div>
    );
  }
}

export default PlantsbyIncidents;
