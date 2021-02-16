import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCountComponent from '../components/ItemCount';
import React, { useState } from 'react';

const ItemListContainerComponent = ({greeting}) => {

  const [contador, setContador] = useState(1); 
   
  const onAdd = (stock) =>{
    if(contador < stock) {
      setContador(contador + 1);
    }
  }

  const onSubstract = (stock) =>{
    if(contador > 0) {
      setContador(contador - 1);
    }
  }
  
  
  
  return(
      <>

<div class="col-2">
  <div class="row">
    <div class="col-12">
      <div class="card-deck">
        <div class="card">
          <div class="card-body d-flex align-items-end flex-column">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <h5 class="card-title">{greeting}</h5>
                <p class="card-text">Descripcion de ejemplo Descripcion de ejemplo Descripcion de ejemplo </p>
              </li>
            </ul>
           
              
            
              <ItemCountComponent stock={12} contador={contador} onAdd={onAdd} onSubstract={onSubstract}/>
           
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


         
      </>
    );
}


export default ItemListContainerComponent;