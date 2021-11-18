import styles from './AssetComponent.module.css'

const AssetComponent = () => {
    return (
        <div className={styles.AssetComponent}>
            <div className={styles.assetHeading}>Assets</div>
            <div className={styles.assetRow}>
              <div className={styles.assetDigit}>1</div>
              <div className={styles.assettext}>Oil Drilling Well</div>
            </div>
            <div className={styles.assetRow}>
              <span className={styles.assetDigit}>2</span>
              <span className={styles.assettext}>Drilling control room</span>
            </div>
          </div>
    )
}

export default AssetComponent