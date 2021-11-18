import React, { Component } from "react";
import { Card, Table } from "react-bootstrap";
import styles from "./charts.module.css";
import c3 from "c3";
import "c3/c3.css";

class CurrentIncidentReport extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    c3.generate({
      bindto: "#material",

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
            <Card.Title className={styles.detailscardtitle}>Current Incident Report</Card.Title>
            <div className={styles.table}>
              <Table responsive>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Incident</th>
                    <th>Plant</th>
                    <th>Severity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>18-11-2021 </td>
                    <td>Fire Outbreak </td>
                    <td>Berri Field </td>
                    <td>high </td>
                  </tr>
                  <tr>
                    <td>10-11-2021 </td>
                    <td>Gas leakage </td>
                    <td>Manifa Field </td>
                    <td>low </td>
                  </tr>
                  <tr>
                    <td>01-11-2021 </td>
                    <td>Electrical sparking </td>
                    <td>Burgan Field </td>
                    <td>low </td>
                  </tr>
                  <tr>
                    <td>18-10-2021 </td>
                    <td>Gas leakage </td>
                    <td>Ghawar Field </td>
                    <td>moderate </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </div>
      </div>
    );
  }
}

export default CurrentIncidentReport;
