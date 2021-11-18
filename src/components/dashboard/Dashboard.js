import React, { Component } from "react";
import { Link} from "react-router-dom";
import ChartSection from "./charts/ChartSection";
import styles from "./Dashboard.module.css";
import KPISection from "./KpiCards";

class Dashboard extends Component {
  render() {
    return (
      <div className={styles.dashboardpage}>
      <div className={styles.appheader}>
       <div> Incident Monitoring and Responsible Production</div>
       <div className = {styles.spacer}/>
       <div>
       <Link to="/Mapview" className={styles.headertext}>
       MapView
      </Link>
      </div>
      </div>
      <div className={styles.contentarea}>
        <KPISection />
        <ChartSection />
      </div>
      </div>
    );
  }
}

export default Dashboard;
