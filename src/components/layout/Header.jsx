import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaAngleDown } from 'react-icons/fa';

import styles from './Header.module.css';
import Container from './Container';
import Categories from '../hud/Categories';
import ShoppingCart from '../hud/ShoppingCart';

function Header() {
    const [fixed, setFixed] = useState(false);
    const [categories, setCategories] = useState(false);
    const [shoppingCart, setShoppingCart] = useState(false);

    function fixHeader() {
        if(window.scrollY >= 325) {
            setFixed(true);
        } else {
            setFixed(false);
        }
    }

    const showCategories = () => setCategories(!categories);
    const showShoppingCart = () => setShoppingCart(!shoppingCart);
    
    useEffect(() => {
        let hudHandler = (e) => {
            if(e.target.closest('.hud')) {
                return
            }
            setCategories(false);
            setShoppingCart(false);
        }
        
        document.addEventListener("mousedown", hudHandler);
        document.addEventListener("scroll", fixHeader);
    });

    return(
        <header className={`${styles.header} ${fixed?styles.fixed:""}`}>
            <Container>
                <Link to="/">
                    <img
                        src='../logo64.png'
                        className={styles.logo}
                        alt="logo quadrada com pontas arredondas de coloração alaranjada com letras T e P em branco na sequência e seccionadas"
                    />
                </Link>
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