import { useParams } from 'react-router-dom';

import styles from './Store.module.css';
import Banner from '../components/storeComponents/Banner';
import Product from '../components/storeComponents/Product';

import storeProducts from '../data/products.json';
import Navbar from '../components/layout/Navbar';

function Store() {
    let { pageNumber, category } = useParams();

    const loadProducts = (page = 1, category = null) => {
        const firstItem = (page > 1 ? page * 16 / 2 : 0);
        const lastItem = page * 16;

        if(category) {
            return storeProducts.filter(product => product.category === category);
        }

        return storeProducts.slice(firstItem, lastItem);
    }

    return(
        <section className={styles.store_container}>
            <Banner/>
            <ul className={styles.products_container}>
                {loadProducts(pageNumber, category).map(item => (
                    <Product key={item.id} image={item.imgUrl} name={item.name} price={item.price} to={item.id}/>
                ))}
                <Navbar page={pageNumber}/>
            </ul>
        </section>
    )
}

export default Store;