import CartItem from './CartItem';
import styles from './ShoppingCart.module.css';

import { useShoppingCart } from '../../context/ShoppingCartContext';

function ShoppingCart() {
    const { cartItems } = useShoppingCart();
    const isEmpty = cartItems?false:true;

    return(
        <div className={styles.shopping_cart}>
            <div className={`${styles.side_to_side} ${styles.title}`}>
                <p>Meu Carrinho</p>
            </div>
            <div className={styles.list}>
                {!isEmpty && cartItems.map(item => (
                    <CartItem 
                        key={item.id}
                        {...item}
                    />
                ))
                }
                {isEmpty && <div className={`${styles.side_to_side} ${styles.msg}`}><p>Seu carrinho está vazio!</p></div>}
            </div>
            <div className={`${styles.side_to_side} ${styles.finish}`}>
                <p>Fechar Pedido</p>
            </div>
        </div>
    )
}

export default ShoppingCart;