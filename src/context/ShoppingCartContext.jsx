import { createContext, useState, useEffect } from "react";

export const CartContext = createContext(null)

const ShoppingCartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    
    const saveToLocalStorage = (arr) => {
        let string = JSON.stringify(arr)
        localStorage.setItem("cart", string)
    }

    const addItem = (item, quantity) => {
        setCart( (currentItems) => {
            let arr = [];
            if(isInCart(item.id)){
                arr = currentItems.map((currItem) => {
                    if(currItem.id === item.id){
                        return { ...currItem , cantidad: currItem.cantidad + quantity };
                    } else{
                        return currItem;
                    }
                })
                saveToLocalStorage(arr);
                return arr;
            } else {
                item.cantidad = quantity;
                arr = [...currentItems, item]; 
                saveToLocalStorage(arr);
                return arr;
            }
        })        
    }

    const removeItem = (id)  => {
        setCart( (currentItems) => {
            if(currentItems.find((item) => item.id === id)){
                let arr = currentItems.filter((item) => item.id !== id);
                saveToLocalStorage(arr);
                return arr;
            }            
        })
    }

    const clear = () => {
        setCart([]);
        saveToLocalStorage([]);
    }

    const isInCart = (id) => {
        for(let i=0; i < cart.length; i++){
            if(cart[i].id === id){
                return true;                
            }
        }
        return false;
    }

    const itemsInCart = () => {
        return cart.reduce((accum, item) => {
            return accum + item.cantidad;
          }, 0);
    }
        
    useEffect(() => {    
        console.log("Cargando productos desde localstorage")
                
        let cartString = localStorage.getItem("cart")
        if(cartString !== 'undefined') {
            setCart(JSON.parse(cartString))            
        }
    
      }, [])

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart, itemsInCart }}>
            {children}
        </CartContext.Provider>
    )

}

export default ShoppingCartProvider