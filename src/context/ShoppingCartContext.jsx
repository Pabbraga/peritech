import { createContext, useContext, useState } from "react";

const ShoppingCartContext = createContext({});

export function useShoppingCart () {
    return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    function increaseCartQuantity(id) {
        setCartItems(currentItems => {
            if(currentItems.find(item => item.id === id) == null) {
                return [...currentItems, {id, quantity: 1}]
            } else {
                return currentItems.map(item => {
                    if(item.id === id) {
                        if(item.quantity === 99) {
                            return item;
                        }
                        return {...item, quantity: item.quantity + 1}
                    } else {
                        return item;
                    }
                })
            }
        })
    }

    function decreaseCartQuantity(id) {
        setCartItems(currentItems => {
            if(currentItems.find(item => item.id === id)?.quantity === 1) {
                return currentItems.filter(item => item.id !== id);
            } else {
                return currentItems.map(item => {
                    if(item.id === id) {
                        return {...item, quantity: item.quantity - 1}
                    } else {
                        return item;
                    }
                })
            }
        })
    }

    function removeFromCart(id) {
        setCartItems(currentItems => {
            return currentItems.filter(item => item.id !== id);
        })
    }

    return <ShoppingCartContext.Provider value={{ cartItems, increaseCartQuantity, decreaseCartQuantity, removeFromCart }}>
        {children}
    </ShoppingCartContext.Provider>
}