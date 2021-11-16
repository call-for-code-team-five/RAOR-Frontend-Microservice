import React, { Component } from "react";
import { Link} from "react-router-dom";
import styles from "./mapview.module.css";
import oilRigImage from "../../images/oilRig.png"
import screenshot from "../../images/screenshot.jpg"

class VideoComponent extends Component {
  render() {
    return (
      <div className={styles.dashboardpage}>
      <div className={styles.appheader}>
       <div> RAOR</div>
       <div className = {styles.spacer}/>
       <div>
       <Link to="/Mapview" className={styles.headertext}>
       MapView
      </Link>
      </div>
      </div>
      <div className={styles.videoComponent}>
      <div className={styles.AssetComponent}>Assets</div>
      <div>
      <div className={styles.screenshotcontrols}>
          <img
            className={styles.screenshotbtn}
            src={screenshot}
            alt="screenshot"
          />
        </div>
        <video 
          controls
          autoPlay
          muted
          // loop
          crossOrigin="anonymous"
          className={styles.videotag}
        >
        <source src = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" type = "video/mp4"></source>
      </video>
      <div className={styles.ImagePane}>
        <img src={oilRigImage} alt="oilRigImage" className={styles.imageTag}/>
        <img src={oilRigImage} alt="oilRigImage" className={styles.imageTag}/>
        <img src={oilRigImage} alt="oilRigImage" className={styles.imageTag}/>
      </div>
     </div>
      </div>
      
      </div>
    );
  }
}

export default VideoComponent;
