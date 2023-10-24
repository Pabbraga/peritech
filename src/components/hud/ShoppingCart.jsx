import styles from './ShoppingCart.module.css';

function ShoppingCart() {
    const isEmpty = true;

    return(
        <div className={styles.shopping_cart}>
            <div className={`${styles.side_to_side} ${styles.title}`}>
                <p>Meu Carrinho</p>
            </div>
            <div className={styles.list}>
                {isEmpty && <div className={`${styles.side_to_side} ${styles.msg}`}><p>Seu carrinho está vazio!</p></div>}
            </div>
            <div className={`${styles.side_to_side} ${styles.finish}`}>
                <p>Fechar Pedido</p>
            </div>
        </div>
    )
}

export default ShoppingCart;