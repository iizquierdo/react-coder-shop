import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Item = ({ item }) => {
  return (
    <>
    <div class="card">
          <div class="card-body d-flex align-items-end flex-column">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <h5 class="card-title">{item.title}</h5>
                <img className="w-25" src={item.img} />
                <p class="card-text">Descripcion de ejemplo Descripcion de ejemplo Descripcion de ejemplo </p>
              </li>
            </ul>
           
              
            
            xx

              <Link to={`/product/${item.id}`} className="btn btn-primary">Mas Info</Link>
           
          </div>
        </div>



    </>
  );
};
