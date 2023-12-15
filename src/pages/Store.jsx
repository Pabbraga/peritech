import { useParams, useLocation } from 'react-router-dom';

import styles from './Store.module.css';
import Banner from '../components/storeComponents/Banner';
import Product from '../components/storeComponents/Product';

import storeProducts from '../data/products.json';
import Navbar from '../components/layout/Navbar';
import NotFound from './NotFound';
import { useEffect, useState } from 'react';

function Store() {
    const { pathname } = useLocation();
    const [err, setErr] = useState(false);
    let { pageNumber, category } = useParams();

    useEffect(() => {
        const handleErr = () => {
            if(pathname === "/") {
                setErr(false);
                return;
            }
            if(!storeProducts.find(e => e.category === category)) {
                setErr(true);
                return;
            }
            setErr(false);
        }
        handleErr();
    })

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
            {!err && 
                <div>
                    <Banner/>
                    <ul className={styles.products_container}>
                        {loadProducts(pageNumber, category).map(item => (
                            <Product key={item.id} image={item.imgUrl} name={item.name} price={item.price} to={item.id}/>
                        ))}
                        <Navbar page={pageNumber}/>
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