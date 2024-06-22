import { createContext, useEffect, useState } from "react";



const addcartitem= (cartItems, productstoadd) =>{
    const exisitingcartitems = cartItems.find(
        (cartitem) =>cartitem.id === productstoadd.id
    );

    if (exisitingcartitems){
        return cartItems.map((cartitem) => cartitem.id === productstoadd.id ? {
            ...cartitem, quantity: cartitem.quantity+1 
        } : cartitem)
    }

    return [...cartItems, {...productstoadd, quantity:1}]
}

const removeproduct = (cartItems, product) => {
    
    return cartItems.filter((cartitem) => cartitem.id !== product.id)
  
}

const reducequantity = (cartItems, cartItemToRemove) =>{
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id
      );
      if (existingCartItem.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
      }
      return cartItems.map((cartItem) =>
        cartItem.id === cartItemToRemove.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );
}

export const CartContext = createContext({
    iscartopen: false,
    setisopen: ()=>{},
    cartItems: [],
    additemtocart: ()=>{},
    cartitemcount : 0,
    removeProduct: ()=>{},
    reduceitemquantity: () =>{},
    totalamount: 0,
});

export const CartProvider = ({children}) => {
    const [iscartopen, setisopen] = useState(false);
    const [cartItems, setcartItems] = useState([]);
    const [cartitemcount, setcartItemcount] = useState(0);
    const [totalamount, settotalamount] = useState(0);
    useEffect(() => {
        const count = cartItems.reduce(
          (total, cartItem) => total + cartItem.quantity,
          0
        );
        setcartItemcount(count);
      }, [cartItems]);
      useEffect(() => {
        const count = cartItems.reduce(
          (total, cartItem) => total + cartItem.quantity * cartItem.price,
          0
        );
        settotalamount(count);
      }, [cartItems]);
    const additemtocart = (product) => setcartItems(addcartitem(cartItems, product));
    const removeProduct = (product) => setcartItems(removeproduct(cartItems, product));
    const reduceitemquantity = (product) => setcartItems(reducequantity(cartItems, product));
    const value = {iscartopen, setisopen, cartItems, additemtocart, cartitemcount, removeProduct, reduceitemquantity, totalamount};
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
