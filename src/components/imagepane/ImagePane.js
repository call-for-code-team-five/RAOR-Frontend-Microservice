import styles from './ImagePane.module.css'
import oilRigImage from "../../images/oilRig.png";
import { connect } from "react-redux";
import Leftpane from '../assets/leftpane'
import { useState } from "react";
const ImagePane = (props) => {
 const [isOpen, setisOpen] = useState(false);
  const onClickimage = () => {
    props.dispatch({
      type: "leftPane",
      leftPane: <Leftpane/>,
    });
    
   setisOpen(!isOpen);
  };

    
  
    return (
        <div className={styles.ImagePane}>
              <img
                src="http://raor-ml-microservice-git-2-dev-raor.workshop-team-five-bb0dafd08526894d1a8ae848e8bd8099-0000.eu-gb.containers.appdomain.cloud/detectObject?imageNo=0"
                alt="oilRigImage1"
                className={styles.imageTag}
                onClick = {onClickimage}
              />
             {  isOpen && (
          <dialog
           className={styles.dialog}
            style={{ position: "absolute" }}
            open
            onClick={onClickimage}
          >
            <img
           className={styles.image}
              src="http://raor-ml-microservice-git-2-dev-raor.workshop-team-five-bb0dafd08526894d1a8ae848e8bd8099-0000.eu-gb.containers.appdomain.cloud/detectObject?imageNo=0"
              onClick={onClickimage}
              alt="no image"
            />
          </dialog>
        )}
              <img
                src="http://raor-ml-microservice-git-2-dev-raor.workshop-team-five-bb0dafd08526894d1a8ae848e8bd8099-0000.eu-gb.containers.appdomain.cloud/detectObject?imageNo=168"
                alt="oilRigImage2" 
                className={styles.imageTag}
                 onClick={onClickimage}
              />
               {isOpen && (
          <dialog
           className={styles.dialog}
            style={{ position: "absolute" }}
            open
            onClick={onClickimage}
          >
            <img
             className={styles.image}
             src="http://raor-ml-microservice-git-2-dev-raor.workshop-team-five-bb0dafd08526894d1a8ae848e8bd8099-0000.eu-gb.containers.appdomain.cloud/detectObject?imageNo=168"
              onClick={onClickimage}
              alt="no image"
            />
          </dialog>
        )}
              <img
                src="http://raor-ml-microservice-git-2-dev-raor.workshop-team-five-bb0dafd08526894d1a8ae848e8bd8099-0000.eu-gb.containers.appdomain.cloud/detectObject?imageNo=1062"
                alt="oilRigImage3"
                className={styles.imageTag}
                 onClick={onClickimage}
              />
               {isOpen && (
          <dialog
         className={styles.dialog}
            style={{ position: "absolute" }}
            open
            onClick={onClickimage}
          >
            <img
            className={styles.image}
             src="http://raor-ml-microservice-git-2-dev-raor.workshop-team-five-bb0dafd08526894d1a8ae848e8bd8099-0000.eu-gb.containers.appdomain.cloud/detectObject?imageNo=1062"
              onClick={onClickimage}
              alt="no image"
            />
          </dialog>
        )}
            </div>
    )
}

const mapStateToProps = (state) => {
  return { ...state.VideoComponent };
};

export default connect(mapStateToProps)(ImagePane)