import styles from './Categories.module.css';
import LinkButton from './LinkButton';

function Categories() {

    return(
        <div className={styles.categories}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <LinkButton to="/category/accessory" text="Acessório"/>
                </li>
                <li className={styles.item}>
                    <LinkButton to="/category/keyboard" text="Teclado"/>
                </li>
                <li className={styles.item}>
                    <LinkButton to="/category/mouse" text="Mouse"/>
                </li>
                <li className={styles.item}>
                    <LinkButton to="/category/webcam" text="Webcam"/>
                </li>
                <li className={styles.item}>
                    <LinkButton to="/category/headphone" text="Fones de Ouvido"/>
                </li>
                <li className={styles.item}>
                    <LinkButton to="/category/cable" text="Cabos e Adaptadores"/>
                </li>
            </ul>
        </div>
    )

}

export default Categories;