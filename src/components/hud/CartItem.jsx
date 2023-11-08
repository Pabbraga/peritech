import styles from './CartItem.module.css';

import { FaMinus, FaPlus } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';

import { useShoppingCart } from '../../context/ShoppingCartContext';
import storeProducts from '../../data/products.json';

function CartItem({id, quantity}) {
    const { increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart();

    const item = storeProducts.filter(item => item.id === id)[0];
    if (item == null) return null;

    return(
        <div className={styles.cart_item}>
            <div>
                <img src={item.imgUrl} className={styles.item_image} alt={item.name} />
            </div>
            <div className={styles.item_info}>
                <span className={styles.item_name}>
                    <p>{item.name}</p>
                    <span className={styles.item_remove}>
                        <button className={styles.control_button} onClick={() => removeFromCart(id)}>
                            <FaXmark/>
                        </button>
                    </span>
                </span>
                <div className={styles.item_control}>
                    <span className={styles.item_price}>
                        <p>R$ {item.price}</p>
                    </span>
                    <span className={styles.item_quantity}>
                        <button className={styles.control_button} onClick={() => increaseCartQuantity(id)}>
                            <FaPlus/>
                        </button>
                        <p>{quantity}</p>
                        <button className={styles.control_button} onClick={() => decreaseCartQuantity(id)}>
                            <FaMinus/>
                        </button>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default CartItem;