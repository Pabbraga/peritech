import { FaShoppingCart, FaAngleDown } from 'react-icons/fa';

import styles from './Header.module.css';
import logo from '../../img/logo64.png';
import Container from './Container';

function Header() {
    return(
        <header className={styles.header}>
            <Container>
                <img 
                    src={logo}
                    className={styles.logo} 
                    alt="logo quadrada com pontas arredondas de coloração alaranjada com letras T e P em branco na sequência e seccionadas" 
                />
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <p>Categorias</p>
                        <FaAngleDown />
                    </li>
                    <li className={styles.item}>
                        <FaShoppingCart />
                    </li>
                </ul>
            </Container>
        </header>
    )
}

export default Header;