import React, { Component } from "react";
import { Link} from "react-router-dom";
import styles from "./mapview.module.css";
import Filters from "../filters/Filters";
import Map from "./Map";



class LiveStreamMap extends Component {
    constructor(props) {
        super(props);
        this.state = {};
      }


  render(){
  return (
    <>
      {/* <div className={styles.appheader}>RAOR</div> */}
      <div className={styles.appheader}>
       <div> Incident Monitoring and Responsible Production</div>
       <div className = {styles.spacer}/>
       <div>
       <Link to="/Dashboard" className={styles.headertext}>
       DashboardView
      </Link>
      </div>
      </div>
      <div className={styles.mapComponent}>
      <Filters/>
      <Map/>
      </div>
    </>
  );
}
}

export default LiveStreamMap;
