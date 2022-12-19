import {useState, createContext } from "react";

const CartContext = createContext()

export const CartContextProvider = ({children}) =>{
    const [cart, setCart] = useState([])
    const addItem = (productToAdd) =>{
        if(!isInCart(productToAdd.id)) {
            setCart([...cart, productToAdd])
        } else {
            const cartUp = cart.map(prod => {
                if(prod.id === productToAdd.id) {
                    const productUp = {
                        ...prod,
                        quantity: productToAdd.quantity
                    }
                    return productUp
                } else {
                    return prod
                }
            })

            setCart(cartUp)
        }
    }
    const getQuantity = () => {
        let accu = 0

        cart.forEach(prod => {
        accu += prod.quantity
        })

        return accu
    }
    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const getProductQuantity = (id) => {
        const product = cart.find(prod => prod.id === id)

        return product?.quantity
    }
    const clearCart = () => {
        setCart([])
    }
    const removeItem = (id) => {
        const newCart = cart.filter(prod => prod.id !== id)
        setCart(newCart)
    }

    return(
        <CartContext.Provider value={{cart, addItem, getQuantity,getProductQuantity, isInCart, clearCart, removeItem}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext