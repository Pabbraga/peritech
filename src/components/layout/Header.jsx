import React, { useState, useEffect } from 'react';
import { FaShoppingCart, FaAngleDown } from 'react-icons/fa';

import styles from './Header.module.css';
import logo from '../../img/logo64.png';
import Container from './Container';
import Categories from '../hud/Categories';
import ShoppingCart from '../hud/ShoppingCart';

function Header() {
    const [categories, setCategories] = useState(false);
    const [shoppingCart, setShoppingCart] = useState(false);
    
    const showCategories = () => setCategories(!categories);
    const showShoppingCart = () => setShoppingCart(!shoppingCart);
    
    useEffect(() => {
        let handler = (e) => {
            if(e.target.closest('.hud')) {
                return
            }
            setCategories(false);
            setShoppingCart(false);
        }

        document.addEventListener("mousedown", handler);
    });

    return(
        <header className={styles.header}>
            <Container>
                <img 
                    src={logo}
                    className={styles.logo} 
                    alt="logo quadrada com pontas arredondas de coloração alaranjada com letras T e P em branco na sequência e seccionadas" 
                />
                <ul className={styles.list}>
                    <li className={styles.item} onClick={showCategories}>
                        <p>Categorias</p>
                        <FaAngleDown />
                    </li>
                    <li className={styles.item} onClick={showShoppingCart}>
                        <FaShoppingCart />
                    </li>
                </ul>
            </Container>
            <div className='hud'>
                {categories && <Categories />}
                {shoppingCart && <ShoppingCart />}
            </div>
        </header>
    )
}

export default Header;