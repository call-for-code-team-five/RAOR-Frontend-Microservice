import styles from './AssetComponent.module.css'

import { Row , Col } from "react-bootstrap";

const AssetComponent = () => {
    return (
        <div className={styles.AssetComponent}>
            <div className={styles.assetHeading}>Image Info</div>

        <div className={styles.imagepane}>
          <Row>
            <Col>
              <div className={styles.heading}>
               Date
              </div>
              <div className={styles.modelDetailstext}>
              20/11/2021
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className={styles.heading}>
              Incident
               
              </div>

              <div className={styles.modelDetailstext}>Fire Outbreak</div>
            </Col>
          </Row>

          <Row>
            <Col>
              <div  className={styles.heading}>
               Plant
              </div>

              <div className={styles.modelDetailstext}>
               Berri Field 
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <div  className={styles.heading}>
                {" "}
               Severity
              </div>
              <div className={styles.modelDetailstext}>high</div>
            </Col>
          </Row>

         
        </div>
          </div>
    )
}

export default AssetComponent