import styles from './Product.module.css';

function Product({image, name, price}) {
    return (
        <div className={styles.product_container}>
            <img src={image} className={styles.image} alt={name} />
            <div className={styles.name}>
                <p>{name}</p>
            </div>
            <div className={styles.price}>
                <p>R$ {price}</p>
            </div>
        </div>
    )
}

export default Product;