import { Link } from 'react-router-dom';

import styles from './Product.module.css';

function Product({id, image, name, price, to}) {

    return (
        <li className={styles.product_container} key={id}>
            <Link to={`/product/${to}`}>
                <img src={image} className={styles.image} alt={name} />
                <div className={styles.name}>
                    <p>{name}</p>
                </div>
                <div className={styles.price}>
                    <p>R$ {price}</p>
                </div>
            </Link>
        </li>
    )
}

export default Product;