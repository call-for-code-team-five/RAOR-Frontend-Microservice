import Filters from "../filters/Filters"
import Map from "../map/Map"
import styles from './Dashboard.module.css'

const Dashboard = () => {
    return(
        <>
        <div className={styles.kpiSection}>
            asdasd
        </div>
        <div className={styles.mapComponent}>
            <Filters/>
            <Map />
        </div>
        </>
    )
}

export default Dashboard