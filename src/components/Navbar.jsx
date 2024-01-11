import React from "react";
import styles from "../styles/Total.module.css";
import { itemContext } from "../itemContext";
import { useContext } from "react";
import { useValue } from "../itemContext";
function Navbar() {
  const value = useContext(itemContext);
  const {handleReset,toggleCart} = useValue()
  return (
    <div className={styles.container}>
      <h1>Total : &#x20B9; {value.total}</h1>
      <h1>Items: {value.item}</h1>
      <div className={styles.itemButtonsWrapper}>
      <button className={styles.itemButton} onClick={toggleCart}>Cart</button>
        <button className={styles.itemButton} onClick={()=>handleReset()}>Reset</button>
      </div>
    </div>
  );
}

export default Navbar;
