import React, { Component } from "react";
import { Card } from "react-bootstrap";
import styles from "./Dashboard.module.css";

class KPISection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.kpiContainer}>
        <Card className={styles.kpicard}>
          <Card.Body>
            <Card.Title>Title 1</Card.Title>
            Card 1
          </Card.Body>
        </Card>

        <Card className={styles.kpicard}>
          <Card.Body>
            <Card.Title>Title 2</Card.Title>
            Card 2
          </Card.Body>
        </Card>

        <Card className={styles.kpicard}>
          <Card.Body>
            <Card.Title>Title 3</Card.Title>
            Card 3
          </Card.Body>
        </Card>

        <Card className={styles.kpicard}>
          <Card.Body>
            <Card.Title>Title 4</Card.Title>
            Card 4
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default KPISection;
