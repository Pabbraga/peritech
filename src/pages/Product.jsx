import styles from './Product.module.css';

import storeProducts from '../data/products.json';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { useShoppingCart } from '../context/ShoppingCartContext';

function Product() {
    let { productId } = useParams();
    const [product, setProduct] = useState();

    const { increaseCartQuantity } = useShoppingCart();

    useEffect(() => {
        const product = storeProducts.filter(product => product.id === parseInt(productId));

        setProduct(product[0]);
    }, [productId]);

    return(
        <main className={styles.page_container}>
            <section className={styles.product_container}>
                <img src={product?.imgUrl} className={styles.product_image} alt={product?.name} />
                <div className={styles.product_info}>
                    <p className={styles.name}>{product?.name}</p>
                    <p className={styles.price}>R$ {product?.price}</p>
                    <button className={styles.add_to_cart} onClick={() => increaseCartQuantity(product.id)}>
                        <p>+ Adicionar ao carrinho</p>
                    </button>
                </div>
                <div className={styles.description}>
                    <h2>Sobre</h2>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Quibusdam numquam illum inventore ea dolor nostrum a fugiat beatae ipsam,
                        quasi eligendi hic dignissimos veritatis temporibus aliquam harum assumenda,
                        ratione consectetur.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Beatae sed odit repellendus? Ipsam dolor soluta quas itaque vero optio,
                        nobis hic rem cumque quod, sapiente ad obcaecati eius! Quasi, doloremque?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. A velit accusantium 
                        maxime in illo, impedit minima dolorum fugit cupiditate expedita cumque odit 
                        temporibus soluta, dignissimos nemo similique itaque! Asperiores, voluptatum!
                    </p>
                </div>
            </section>
        </main>
    )
}

export default Product;