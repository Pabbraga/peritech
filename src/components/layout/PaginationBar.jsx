import { Link } from 'react-router-dom';
import styles from './PaginationBar.module.css';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

function PaginationBar({currentPage = 1, totalPages}) {
    const currentPageNumber = parseInt(currentPage);
    const arrayPages = [];

    for (let i = 1; i <= totalPages; i++) {
        arrayPages.push(i);
        console.log(i);
    }

    return(
        <nav className={styles.pagination_bar}>
            <ul className={styles.pagination_list}>
                <li className={`${styles.item_pagination} ${currentPageNumber === 1?styles.deactived:""}`}>
                    <Link to={`/page/${currentPageNumber-1}`}><FaAngleLeft/></Link>
                </li>
                {arrayPages.map(index => (
                    indexPage(index.valueOf())
                ))}
                <li className={`${styles.item_pagination} ${currentPageNumber === totalPages?styles.deactived:""}`}>
                    <Link to={`/page/${currentPageNumber+1}`}><FaAngleRight/></Link>
                </li>
            </ul>
        </nav>
    )

    function indexPage(id) {
        const selected = currentPageNumber === id?true:false;

        return(
            <li key={id} className={`${styles.item_pagination} ${selected?styles.selected:""} ${selected?styles.deactived:""}`}>
                <Link to={`/page/${id}`}><p>{id}</p></Link>
            </li>
        )
    }
}

export default PaginationBar;