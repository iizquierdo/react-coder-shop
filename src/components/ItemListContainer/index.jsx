import React, { useState, useEffect } from "react";
import itemsPromise from "../../utils/mockItems";
import ItemCount from "../ItemCount";
import { ItemList } from "../ItemList";

export default function ItemListContainer({ geeating }) {
  console.log(itemsPromise);
  const [prod, setProd] = useState([]);

  useEffect(() => {
    itemsPromise.then((res) => setProd(res));
  }, []);
  //console.log(prod);

  return (
    <>
    

      <div class="card-deck">
         <ItemList items={prod} />
    </div> 
    </>
  );
}
