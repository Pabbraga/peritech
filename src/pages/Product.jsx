import styles from './Product.module.css';

import storeProducts from '../data/products.json';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Product() {
    let { productId } = useParams();
    const [product, setProduct] = useState();

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
                    <div className={styles.add_to_cart}>
                        <p>+ Adicionar ao carrinho</p>
                    </div>
                </div>
            </section>
            <section className={styles.more_info}>
                <div className={styles.description}>
                    <h2>Descrição</h2>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Quibusdam numquam illum inventore ea dolor nostrum a fugiat beatae ipsam,
                        quasi eligendi hic dignissimos veritatis temporibus aliquam harum assumenda,
                        ratione consectetur.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Beatae sed odit repellendus? Ipsam dolor soluta quas itaque vero optio,
                        nobis hic rem cumque quod, sapiente ad obcaecati eius! Quasi, doloremque?
                    </p>
                </div>
            </section>
        </main>
    )
}

export default Product;