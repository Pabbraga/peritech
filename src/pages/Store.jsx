import { useState } from 'react';
import { useParams } from 'react-router-dom';

import styles from './Store.module.css';
import Banner from '../components/storeComponents/Banner';
import Product from '../components/storeComponents/Product';

import storeProducts from '../data/products.json';
import PaginationBar from '../components/layout/PaginationBar';
import NotFound from './NotFound';

function Store() {
    const [err, setErr] = useState(false);
    let totalPages = Math.ceil(Object.keys(storeProducts).length / 16);
    let { pageNumber, category } = useParams();

    const loadProducts = (page = 1, category = null) => {
        const firstItem = (page > 1 ? page * 16 / 2 : 0);
        const lastItem = page * 16;
        let items = storeProducts;
        let qntItems = 0;

        if(category) {
            items = items.filter(product => product.category === category);
            totalPages = Math.ceil(Object.keys(items).length / 16);
        }

        items = items.slice(firstItem, lastItem);

        qntItems = Object.keys(items).length;

        if(qntItems < 1) {
            setErr(true);
        }

        return items;
    }

    return(
        <section className={styles.store_container}>
            {!err && 
                <div>
                    <Banner/>
                    <ul className={styles.products_container}>
                        {loadProducts(pageNumber, category).map(item => (
                            <Product key={item.id} image={item.imgUrl} name={item.name} price={item.price} to={item.id}/>
                        ))}
                        <PaginationBar currentPage={pageNumber} totalPages={totalPages}/>
                    </ul>
                </div>
            } 
            {err &&
                <NotFound />
            }
        </section>
    )
}

export default Store;