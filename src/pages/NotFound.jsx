import styles from './NotFound.module.css';
import { Link } from 'react-router-dom';

function NotFound() {
    return(
        <div className={styles.container}>
            <span className={styles.title}>Erro 404</span>
            <span className={styles.subtitle}>Esta página não existe ou não foi encontrada.</span>
            <Link className={styles.goback_button} to="/">
                <p>Voltar à página inicial</p>
            </Link>
        </div>
    );
}

export default NotFound;