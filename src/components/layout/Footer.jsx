import { FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa';

import styles from './Footer.module.css';

function Footer() {
    return(
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    <FaFacebook />
                </li>
                <li>
                    <FaInstagram />
                </li>
                <li>
                    <FaLinkedin />
                </li>
            </ul>
            <p className={styles.copy}>
                <span>Peritech</span> &copy; 2023
            </p>
            <p className={styles.credits}>
                Desenvolvido por <a target='_blank' rel='noreferrer' href='https://www.github.com/Pabbraga'>Pablo Braga</a>
            </p>
        </footer>
    )
}

export default Footer;