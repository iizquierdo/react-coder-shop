import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import itemsPromise from "../../utils/mockItems";
import ItemDetail from "../ItemDetail";
import ItemCount from "../ItemCount";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    itemsPromise.then((resp) => {
      setItem(resp.find((li) => li.id === id));
    });
  }, []);
  console.log(item);
  return (
    <>
    <h1>eeeeeeee</h1>
      <ItemDetail item={item} />
    </>
  );
};

export default ItemDetailContainer;
