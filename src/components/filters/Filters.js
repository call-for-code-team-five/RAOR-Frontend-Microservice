import styles from './Filters.module.css'

const Filters = () => {
    return (
        <div className={styles.filterspane}>
            <div className={styles.filter}>
                <label>Country: </label>
                <select id="countryfilter" className={styles.dropdown}>
                    <option>sd</option>
                    <option>sd</option>
                    <option>sd</option>
                </select>
            </div>
            <div className={styles.filter}>
                <label>Plant: </label>
                <select id="plantfilter" className={styles.dropdown}>
                    <option>sd</option>
                    <option>sd</option>
                    <option>sd</option>
                </select>
            </div>
        </div>
    )
}

export default Filters