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
            <Card.Title>
              <div className={styles.cardtitlesection}>
                <text className={styles.cardheader}>Incident Counts</text>

                <div className={styles.spacer}></div>
              </div>
            </Card.Title>
            <div className={styles.kpisectiontext}>
              <text className={styles.digits}>6</text>
              <text className={styles.kpi}>incidents</text>
            </div>
          </Card.Body>
        </Card>

        <Card className={styles.kpicard}>
          <Card.Body>
          <Card.Title>
              <div className={styles.cardtitlesection}>
                <text className={styles.cardheader}>Total Plants</text>

                <div className={styles.spacer}></div>
              </div>
            </Card.Title>
            <div className={styles.kpisectiontext}>
              <text className={styles.digits}>4</text>
              <text className={styles.kpi}>plants</text>
            </div>
          </Card.Body>
        </Card>

        <Card className={styles.kpicard}>
          <Card.Body>
          <Card.Title>
              <div className={styles.cardtitlesection}>
                <text className={styles.cardheader}>Lost Hours</text>

                <div className={styles.spacer}></div>
              </div>
            </Card.Title>
            <div className={styles.kpisectiontext}>
              <text className={styles.digits}>14</text>
              <text className={styles.kpi}>hours</text>
            </div>
          </Card.Body>
        </Card>

        <Card className={styles.kpicard}>
          <Card.Body>
          <Card.Title>
              <div className={styles.cardtitlesection}>
                <text className={styles.cardheader}>Production Loss</text>

                <div className={styles.spacer}></div>
              </div>
            </Card.Title>
            <div className={styles.kpisectiontext}>
              <text className={styles.digits}>13,000</text>
              <text className={styles.kpi}>USD</text>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default KPISection;
