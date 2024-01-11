import React from "react";
import { useValue } from "../itemContext";
import styles from "../styles/CartModal.module.css";

function CartModal() {
    const {cart,total,item,toggleCart,handleReset} = useValue();
  return (
    <div className={styles.cartModal}>
      <div className={styles.closeButton} onClick={toggleCart}>
        Close
      </div>
      <div className={styles.clearButton} onClick={()=>handleReset()}>Clear</div>
      <div className={styles.itemContainer}>
         {cart.map((item)=> {
            return (
                <div className={styles.cartCard} key={item.id}>
                    <h1>{item.name}</h1>
                    <h1>X {item.qty}</h1>
                    <h1>X {item.qty * item.price}</h1>
                </div>
            );
         } ) }
      </div>
      <div className={styles.total}>
        <div className={styles.totalText}>Total Item:{item}</div>
        <div className={styles.totalPrice}>Price:&#x20B9;{total}</div> 
                 {/*rupee symbol hai ye ->  &#x20B9; */}
      </div>
    </div>
  );
}

export default CartModal;
