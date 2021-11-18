import styles from './ImagePane.module.css'
import oilRigImage from "../../images/oilRig.png";

const ImagePane = () => {
    return (
        <div className={styles.ImagePane}>
              <img
                src={oilRigImage}
                alt="oilRigImage"
                className={styles.imageTag}
              />
              <img
                src={oilRigImage}
                alt="oilRigImage"
                className={styles.imageTag}
              />
              <img
                src={oilRigImage}
                alt="oilRigImage"
                className={styles.imageTag}
              />
            </div>
    )
}

export default ImagePane