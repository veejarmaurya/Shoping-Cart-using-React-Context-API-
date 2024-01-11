import { createContext, useState,useContext } from "react";
import CartModal from "./components/CartModal";

const itemContext = createContext();
function useValue(){
     const value = useContext(itemContext);
     return value;
}
function CustomItemContext({children}) {
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);
  const [showcart, setShowcart] = useState(false);
  const [cart,setCart] = useState([]);
 
  const handleAdd = (prod) => {
    //console.log(prod);
    const index = cart.findIndex((item)=> item.id === prod.id);
    if(index === -1){
      setCart([...cart , {...prod,qty:1}]) ;// add new key to product as qty and asign value 1
      setTotal(total+prod.price);
      //console.log(cart);
    }
    else{
      cart[index].qty++;
      setCart(cart);
      setTotal(total+prod.price);
      console.log(cart);
    }
    // setTotal(total + price);
    setItem(item + 1);
  };

  const handleRemove = (id) => {
    const index = cart.findIndex((item) => item.id === id);
    if(index !== -1)
    {
      cart[index].qty--;
      setItem(item-1);
      setTotal(total - cart[index].price);
      
      if(cart[index].qty === 0)
      {
        cart.splice(index,1);
      }
    }
    setCart(cart);
  
    // if (total <= 0) {
    //   return;
    // }
    // setTotal((prevState) => prevState - price);
    // setItem(item - 1);
  };
const handleReset =()=>{
  setTotal(0);
  setItem(0);
  setCart([]);
};
const toggleCart =()=> {
    setShowcart(!showcart);
}
  return(
    <itemContext.Provider value={{total,item,handleAdd,handleRemove,handleReset,toggleCart,cart}}>
      {showcart && <CartModal />}
        {children}
    </itemContext.Provider>
  )
}

export { itemContext ,useValue};
export default CustomItemContext;
