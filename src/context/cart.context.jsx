import { createContext, useEffect, useState } from "react";



const addcartitem= (cartItems, productstoadd) =>{
    const exisitingcartitems = cartItems.find(
        (cartitem) =>cartitem.id == productstoadd.id
    );

    if (exisitingcartitems){
        return cartItems.map((cartitem) => cartitem.id === productstoadd.id ? {
            ...cartitem, quantity: cartitem.quantity+1 
        } : cartitem)
    }

    return [...cartItems, {...productstoadd, quantity:1}]
}

export const CartContext = createContext({
    iscartopen: false,
    setisopen: ()=>{},
    cartItems: [],
    additemtocart: ()=>{},
    cartitemcount : 0,
});

export const CartProvider = ({children}) => {
    const [iscartopen, setisopen] = useState(false);
    const [cartItems, setcartItems] = useState([]);
    const [cartitemcount, setcartItemcount] = useState(0);
    useEffect(() => {
        const count = cartItems.reduce(
          (total, cartItem) => total + cartItem.quantity,
          0
        );
        setcartItemcount(count);
      }, [cartItems]);
    const additemtocart = (product) => setcartItems(addcartitem(cartItems, product));
    const value = {iscartopen, setisopen, cartItems, additemtocart, cartitemcount};
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
