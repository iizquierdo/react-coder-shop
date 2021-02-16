import 'bootstrap/dist/css/bootstrap.min.css';



const ItemCountComponent = ({ stock, onAdd, onSubstract, contador }) => {
    return(
    <>

    <div class="input-group">
        <span class="input-group-btn">
            <button className="btn btn-danger btn-number" onClick={() => { onSubstract(stock) }}>-</button> 
        </span>
        
        <span className="form-control" >{contador}</span>
        
        <span class="input-group-btn">
            <button className="btn btn-danger btn-number"  onClick={() => { onAdd(stock) }}>+</button> 
        </span>
    </div>
    <br/>
    <a href="#" className="btn btn-danger btn-sm btn-block">Agreagar al Carrito</a>
    

      </>
    );
}


export default ItemCountComponent;