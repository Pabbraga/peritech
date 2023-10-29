import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

function Navbar({page = 1}) {
    const pageNumber = parseInt(page);

    return(
        <nav className={styles.navbar}>
            <ul className={styles.pagination}>
                <li className={`${styles.item_pagination} ${pageNumber === 1?styles.deactived: ""}`}>
                    <Link to={`/page/${pageNumber-1}`}><FaAngleLeft/></Link>
                </li>
                <li className={`${styles.item_pagination} ${pageNumber === 1?styles.selected: ""} ${pageNumber === 1?styles.deactived:null}`}>
                    <Link to="/page/1"><p>1</p></Link>
                </li>
                <li className={`${styles.item_pagination} ${pageNumber === 2?styles.selected: ""} ${pageNumber === 2?styles.deactived: null}`}>
                    <Link to="/page/2"><p>2</p></Link>
                </li>
                <li className={`${styles.item_pagination} ${pageNumber === 2?styles.deactived: ""}`}>
                    <Link to={`/page/${pageNumber+1}`}><FaAngleRight/></Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;