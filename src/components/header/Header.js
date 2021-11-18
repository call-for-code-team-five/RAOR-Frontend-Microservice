import styles from './Header.module.css'
import { Link } from "react-router-dom";

const Header = (props) => {
    return (
        <div className={styles.appheader}>
          <div> RAOR</div>
          <div className={styles.spacer} />
          <div>
            <Link to={props.viewlocation} className={styles.headertext}>{props.view}</Link>
          </div>
        </div>
    )
}

export default Header