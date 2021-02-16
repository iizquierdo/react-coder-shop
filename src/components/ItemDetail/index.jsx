import React, { useState, useEffect } from "react";
import ItemCount from "../ItemCount";

const ItemDetail = ({ item }) => {
  const [irCart, setIrCart] = useState(false);
  console.log(item);

  const onAdd = (contador) => {
    console.log("Udselecciono ", contador);
    setIrCart(true);
  };

  return (
    <>

    
      <p>{item.title}</p>
      {irCart ? <button>Ir a Cart</button> : <ItemCount onAdd={onAdd} />}
    </>
  );
};

export default ItemDetail;
