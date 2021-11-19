import React, { Component } from "react";
import styles from "./mapview.module.css";

import screenshot from "../../images/screenshot.jpg";
import Map from "./Map";
import Header from "../header/Header";
import AssetComponent from "../assets/AssetComponent";
import ImagePane from "../imagepane/ImagePane";
import { connect } from "react-redux";
const serverUrl = process.env.REACT_APP_DESTINATION_URL
class VideoComponent extends Component {

  onScreenshot = () => {
    console.log("clicked")
  }
  render() {
    return (
      // <div className={styles.dashboardpage}>
      <>
        <Header view="Map View" viewlocation="/Mapview" />
        <div className={styles.videoPage}>
        {this.props.leftPane}
          <div className={styles.VideoSection}>
            <div className={styles.mapcumvideosection}>
              <Map center={[6031603.50349672, 3728918.468280811]} zoom={15} />
              <video
                controls
                autoPlay
                muted
                loop
                crossOrigin="anonymous"
                className={styles.videotag}
              >
                <source src={serverUrl + "/api/video/getVideoById/2"} type="video/mp4"></source>
              </video>
            </div>
            <ImagePane />
          </div>
        </div>

      </>

    );
  }
}


const mapStateToProps = (state) => {
  return { ...state.VideoComponent };
};

export default connect(mapStateToProps)(VideoComponent)
