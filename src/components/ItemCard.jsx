import React from "react";
import styles from "../styles/ItemCard.module.css";
// import { useContext } from "react";
// import { itemContext } from "../itemContext";
import { useValue } from "../itemContext";
// koi ke dono import koi kam ke nhi ab kyuki ham custom hook banakae sab wha se ipmort kar rhe hai
function ItemCard({id, name, price }) {
  //const { total, setTotal, item, setItem } = useContext(itemContext);
  const {handleAdd, handleRemove} = useValue();
  // const handleAdd = () => {
  //   setTotal(total + price);
  //   setItem(item + 1);
  // };

  // const handleRemove = () => {
  //   if (total <= 0) {
  //     return;
  //   }
  //   setTotal((prevState) => prevState - price);
  //   setItem(item - 1);
  // };

  return (
    <div className={styles.itemCard}>
      <div className={styles.itemName}>{name}</div>
      <div className={styles.itemPrice}>&#x20B9; {price}</div>
      <div className={styles.itemButtonsWrapper}>
        <button className={styles.itemButton} onClick={() => handleAdd({id,name,price})}>
          Add
        </button>
        <button className={styles.itemButton} onClick={() => handleRemove(id)}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
