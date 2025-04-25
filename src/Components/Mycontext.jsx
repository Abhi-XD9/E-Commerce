import React, { createContext, useEffect, useState } from 'react';

const Store = createContext();

export default function Mycontext({ children }) {
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const[liked,seLiked] = useState([]) 

    const [search, setSearch] = useState('')

    const serachedProduct = products.filter((product)=>{
        return product.title.toLowerCase().includes(search.toLowerCase())
    })

    useEffect(() => {
        const fetchProducts = async ()=>{
           try {
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json()
            setProducts(data)
           } catch (error) {
            console.log(error)
           }
        }
        fetchProducts()
    }, []);

    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(item => item.id === product.id);
            if (existingItem) {
                return prevItems.map(thing =>
                    thing.id === product.id
                        ? { ...thing, quantity: thing.quantity + 1 }
                        : thing
                );
            } else {
                return [...prevItems, { ...product, quantity: 1 }];
            }
        });
    };

const addtoLike =(product)=>{
    seLiked((prevItems) =>{
        const existingItem = prevItems.find(item => item.id === product.id);
        if (existingItem) {
            return prevItems.map(thing =>
                thing.id === product.id
                ? { ...thing, liked: !thing.liked }
                : thing
                );
        }
        else{
            return [...prevItems, { ...product, liked: true }];
        }
    })
}

    const removeliked =(id) =>{
        seLiked((prevItems) => prevItems.filter(item=>item.id !== id))
    }

    const removeFromCart = (id) => {
        setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
    };

    const updateQuantity = (id, newQuantity) => {
        setCartItems((prevItems) => {
            return prevItems.map(item =>
                item.id === id
                    ? { ...item, quantity: newQuantity }
                    : item
            );
        });
    };

    
    return (
        <Store.Provider value={{ products, setProducts, cartItems,setCartItems,removeliked,liked,addtoLike, addToCart,search, removeFromCart, updateQuantity,setSearch,serachedProduct }}>
            {children}
        </Store.Provider>
    );
}

export { Store };