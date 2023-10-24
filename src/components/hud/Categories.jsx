import styles from './Categories.module.css';

function Categories() {

    return(
        <div className={styles.categories}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <p>Acessórios</p>
                </li>
                <li className={styles.item}>
                    <p>Teclados</p>
                </li>
                <li className={styles.item}>
                    <p>Mouse</p>
                </li>
                <li className={styles.item}>
                    <p>Câmeras</p>
                </li>
                <li className={styles.item}>
                    <p>Fones de Ouvido</p>
                </li>
                <li className={styles.item}>
                    <p>Cabos e Adaptadores</p>
                </li>
            </ul>
        </div>
    )

}

export default Categories;