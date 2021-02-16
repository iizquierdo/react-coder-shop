import React, { useState, useEffect } from "react";
import { Item } from "../Item/index";

export const ItemList = ({ items }) => {
  console.log(items);

  return (
    <>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </>
  );
};
