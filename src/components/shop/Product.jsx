import styles from './Product.module.css';

function Product({id, image, name, price}) {
    return (
        <li className={styles.product_container} key={id}>
            <img src={image} className={styles.image} alt={name} />
            <div className={styles.name}>
                <p>{name}</p>
            </div>
            <div className={styles.price}>
                <p>R$ {price}</p>
            </div>
        </li>
    )
}

export default Product;